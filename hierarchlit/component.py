"""Streamlit v2 component wrapper and bounded page-cache controller."""

from __future__ import annotations

import logging
from collections import OrderedDict
from collections.abc import Callable, Mapping, Sequence
from dataclasses import dataclass, field
from typing import Any

from .models import (
    ActionEvent,
    ActivationEvent,
    HierarchyAction,
    HierarchyPage,
    HierarchyResult,
    HierarchyTheme,
    JsonValue,
    PageRequest,
    PaginationConfig,
    SelectionActionEvent,
    SelectionMode,
    SelectionRule,
    SelectionToolbarConfig,
)
from .providers import HierarchyProvider, ProviderError

LOGGER = logging.getLogger(__name__)
_COMPONENT_NAME = "hierarchlit.hierarchy"
_renderer: Any = None


def _noop() -> None:
    pass


@dataclass(slots=True)
class _CachedPage:
    parent_id: str | None
    cursor: str | None
    page: HierarchyPage | None = None
    error: str | None = None

    @property
    def node_count(self) -> int:
        return len(self.page.nodes) if self.page is not None else 0

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "parentId": self.parent_id,
            "cursor": self.cursor,
            "nodes": [] if self.page is None else [node.to_wire() for node in self.page.nodes],
            "nextCursor": None if self.page is None else self.page.next_cursor,
            "totalCount": None if self.page is None else self.page.total_count,
            "error": self.error,
        }


PageKey = tuple[str | None, str | None]


@dataclass(slots=True)
class _ControllerState:
    revision: str | int | None
    pages: OrderedDict[PageKey, _CachedPage] = field(default_factory=OrderedDict)
    last_request_id: str | None = None
    cache_limited: bool = False

    @property
    def node_count(self) -> int:
        return sum(page.node_count for page in self.pages.values())

    def prune_collapsed(self, expanded_ids: set[str]) -> None:
        stale = [
            key
            for key, page in self.pages.items()
            if page.parent_id is not None and page.parent_id not in expanded_ids
        ]
        for key in stale:
            del self.pages[key]
        if stale:
            self.cache_limited = False

    def fetch(
        self,
        provider: HierarchyProvider,
        request: PageRequest,
        pagination: PaginationConfig,
        *,
        force: bool = False,
    ) -> None:
        key = (request.parent_id, request.cursor)
        if key in self.pages and not force:
            self.pages.move_to_end(key)
            return

        cached = self._call_provider(provider, request)

        if pagination.mode == "paged":
            for old_key in [
                candidate
                for candidate, page in self.pages.items()
                if page.parent_id == request.parent_id
            ]:
                del self.pages[old_key]

        self.pages[key] = cached
        self.pages.move_to_end(key)
        self.cache_limited = False
        self._enforce_bounds(key, pagination)

    @staticmethod
    def _call_provider(provider: HierarchyProvider, request: PageRequest) -> _CachedPage:
        try:
            page = provider.fetch_page(request)
            if len(page.nodes) > request.limit:
                raise ProviderError(
                    f"Provider returned {len(page.nodes)} nodes for a limit of {request.limit}."
                )
            return _CachedPage(parent_id=request.parent_id, cursor=request.cursor, page=page)
        except ProviderError as exc:
            return _CachedPage(
                parent_id=request.parent_id,
                cursor=request.cursor,
                error=str(exc) or "Unable to load items.",
            )
        except Exception:
            LOGGER.exception("Hierarchy provider failed for parent %r", request.parent_id)
            return _CachedPage(
                parent_id=request.parent_id,
                cursor=request.cursor,
                error="Unable to load items.",
            )

    def _enforce_bounds(self, new_key: PageKey, pagination: PaginationConfig) -> None:
        while (
            len(self.pages) > pagination.max_cached_pages
            or self.node_count > pagination.max_browser_nodes
        ):
            new_parent = self.pages[new_key].parent_id
            victim_parent = next(
                (
                    page.parent_id
                    for key, page in self.pages.items()
                    if page.parent_id is not None
                    and page.parent_id != new_parent
                    and key != new_key
                ),
                None,
            )
            if victim_parent is not None:
                for key in [
                    candidate
                    for candidate, page in self.pages.items()
                    if page.parent_id == victim_parent
                ]:
                    del self.pages[key]
                continue

            # Root pages are kept coherent, and a newly requested branch is never
            # partially retained. The UI explains how to recover from this cap.
            self.pages.pop(new_key, None)
            self.cache_limited = True
            break


def _get_renderer() -> Any:
    global _renderer
    if _renderer is None:
        import streamlit as st

        try:
            component_v2 = st.components.v2
        except AttributeError as exc:  # pragma: no cover - depends on installed Streamlit
            raise RuntimeError("hierarchlit requires Streamlit 1.51 or newer") from exc
        _renderer = component_v2.component(
            _COMPONENT_NAME,
            html='<div class="hierarchlit-root"></div>',
            css="styles.css",
            js="index-*.js",
        )
    return _renderer


def _value(source: object, name: str, default: Any = None) -> Any:
    if isinstance(source, Mapping):
        return source.get(name, default)
    return getattr(source, name, default)


def _string_tuple(value: object) -> tuple[str, ...]:
    if not isinstance(value, (list, tuple)):
        return ()
    return tuple(item for item in value if isinstance(item, str))


def _parse_page_request(raw: object, page_size: int) -> tuple[str, PageRequest, bool] | None:
    if not isinstance(raw, Mapping):
        return None
    request_id = raw.get("requestId")
    parent_id = raw.get("parentId")
    cursor = raw.get("cursor")
    if not isinstance(request_id, str) or not request_id:
        return None
    if parent_id is not None and not isinstance(parent_id, str):
        return None
    if cursor is not None and not isinstance(cursor, str):
        return None
    return (
        request_id,
        PageRequest(parent_id=parent_id, cursor=cursor, limit=page_size),
        raw.get("force") is True,
    )


def _parse_result(raw: object) -> HierarchyResult:
    selection_rules = _parse_selection_rules(_value(raw, "selection"))
    if selection_rules is not None:
        selected_ids = tuple(
            rule.node_id for rule in selection_rules if rule.selected and rule.node_id is not None
        )
    else:
        # Migrate state created by pre-cascade versions of the component.
        selected_ids = _string_tuple(_value(raw, "selected_ids", ()))
        selection_rules = tuple(
            SelectionRule(node_id=node_id, selected=True, cascade=False) for node_id in selected_ids
        )

    action_raw = _value(raw, "action")
    action = None
    if isinstance(action_raw, Mapping):
        node_id = action_raw.get("nodeId")
        action_id = action_raw.get("actionId")
        if isinstance(node_id, str) and isinstance(action_id, str):
            action = ActionEvent(node_id=node_id, action_id=action_id)

    activated_raw = _value(raw, "activated")
    activated = None
    if isinstance(activated_raw, Mapping):
        node_id = activated_raw.get("nodeId")
        if isinstance(node_id, str):
            activated = ActivationEvent(node_id=node_id)

    selection_action_raw = _value(raw, "selection_action")
    selection_action = None
    if isinstance(selection_action_raw, Mapping):
        action_id = selection_action_raw.get("actionId")
        event_rules = _parse_selection_rules({"rules": selection_action_raw.get("rules")})
        if isinstance(action_id, str) and action_id and event_rules is not None:
            selection_action = SelectionActionEvent(
                action_id=action_id,
                selection_rules=event_rules,
            )

    return HierarchyResult(
        selected_ids=selected_ids,
        selection_rules=selection_rules,
        selection_action=selection_action,
        action=action,
        activated=activated,
    )


def _parse_selection_rules(raw: object) -> tuple[SelectionRule, ...] | None:
    rules_raw = _value(raw, "rules")
    if not isinstance(rules_raw, (list, tuple)):
        return None

    rules: list[SelectionRule] = []
    for item in rules_raw:
        if not isinstance(item, Mapping):
            continue
        node_id = item.get("nodeId")
        selected = item.get("selected")
        cascade = item.get("cascade")
        scope = item.get("scope", "node")
        ancestor_ids = item.get("ancestorIds", ())
        if (
            scope in ("node", "all")
            and (
                (scope == "node" and isinstance(node_id, str) and node_id)
                or (scope == "all" and node_id is None)
            )
            and isinstance(selected, bool)
            and isinstance(cascade, bool)
            and isinstance(ancestor_ids, (list, tuple))
            and all(isinstance(ancestor_id, str) for ancestor_id in ancestor_ids)
        ):
            rules.append(
                SelectionRule(
                    node_id=node_id,
                    selected=selected,
                    cascade=cascade,
                    ancestor_ids=tuple(ancestor_ids),
                    scope=scope,
                )
            )
    return tuple(rules)


def _validate_actions(actions: Sequence[HierarchyAction]) -> None:
    action_ids = [action.id for action in actions]
    if len(action_ids) != len(set(action_ids)):
        raise ValueError("HierarchyAction IDs must be unique")


def hierarchy(
    provider: HierarchyProvider,
    *,
    key: str,
    actions: Sequence[HierarchyAction] = (),
    selection_mode: SelectionMode = "single",
    cascade_selection: bool = True,
    range_selection: bool = False,
    selection_toolbar: SelectionToolbarConfig | None = None,
    pagination: PaginationConfig | None = None,
    theme: HierarchyTheme | None = None,
    default_selected: Sequence[str] = (),
    default_expanded: Sequence[str] = (),
    revision: str | int | None = None,
    height: int = 420,
    empty_message: str = "No items",
    on_selection_change: Callable[[], None] | None = None,
    on_selection_action: Callable[[], None] | None = None,
    on_expansion_change: Callable[[], None] | None = None,
    on_action: Callable[[], None] | None = None,
    on_activate: Callable[[], None] | None = None,
) -> HierarchyResult:
    """Render a lazy, paginated hierarchy and return its current interaction state.

    The provider is called only for the root page, expanded nodes, or explicit page
    navigation. Set ``revision`` to a new value when provider contents should
    invalidate this component instance's page cache.

    Streamlit callbacks receive no event argument. Within a callback, read the
    corresponding event from ``st.session_state[key]``. For straight-line code,
    consume the typed ``HierarchyResult`` returned by this function instead.
    """

    if not isinstance(key, str) or not key.strip():
        raise ValueError("key must be a non-empty string")
    if selection_mode not in ("single", "multiple", "none"):
        raise ValueError("selection_mode must be 'single', 'multiple', or 'none'")
    if not 80 <= height <= 2_000:
        raise ValueError("height must be between 80 and 2,000 pixels")
    _validate_actions(actions)
    pagination = pagination or PaginationConfig()
    theme = theme or HierarchyTheme()
    selected_defaults = tuple(default_selected)
    expanded_defaults = tuple(default_expanded)
    if any(not isinstance(item, str) or not item for item in selected_defaults):
        raise ValueError("default_selected must contain non-empty string IDs")
    if any(not isinstance(item, str) or not item for item in expanded_defaults):
        raise ValueError("default_expanded must contain non-empty string IDs")
    if len(selected_defaults) != len(set(selected_defaults)):
        raise ValueError("default_selected must not contain duplicate IDs")
    if len(expanded_defaults) != len(set(expanded_defaults)):
        raise ValueError("default_expanded must not contain duplicate IDs")
    if selection_mode == "single" and len(selected_defaults) > 1:
        raise ValueError("single selection mode accepts at most one default selection")
    if selection_mode == "none" and selected_defaults:
        raise ValueError("selection mode 'none' does not accept default selections")
    if range_selection and selection_mode != "multiple":
        raise ValueError("range_selection requires selection_mode='multiple'")
    if (
        selection_toolbar is not None
        and selection_toolbar.show_select_all
        and selection_mode != "multiple"
    ):
        raise ValueError("show_select_all requires selection_mode='multiple'")
    default_rules = tuple(
        SelectionRule(
            node_id=node_id,
            selected=True,
            cascade=cascade_selection and selection_mode == "multiple",
        )
        for node_id in selected_defaults
    )

    import streamlit as st

    controller_key = f"_hierarchlit:{key}:controller"
    stored_controller = st.session_state.get(controller_key)
    controller_created = not isinstance(stored_controller, _ControllerState)
    if isinstance(stored_controller, _ControllerState) and stored_controller.revision == revision:
        controller = stored_controller
    elif isinstance(stored_controller, _ControllerState):
        # A data revision invalidates page contents, but it should not move the user
        # back to the first page. Re-fetch the bounded working set at the same
        # cursors and retain the last handled browser request.
        controller = _ControllerState(
            revision=revision,
            last_request_id=stored_controller.last_request_id,
        )
        for cached_page in stored_controller.pages.values():
            controller.fetch(
                provider,
                PageRequest(
                    parent_id=cached_page.parent_id,
                    cursor=cached_page.cursor,
                    limit=pagination.page_size,
                ),
                pagination,
            )
        st.session_state[controller_key] = controller
    else:
        controller = _ControllerState(revision=revision)
        st.session_state[controller_key] = controller

    component_state = st.session_state.get(key, {})
    stored_expanded = _value(component_state, "expanded_ids")
    expanded_ids = set(
        expanded_defaults if stored_expanded is None else _string_tuple(stored_expanded)
    )
    controller.prune_collapsed(expanded_ids)

    # In paged mode, navigating replaces (None, None) with the active root cursor.
    # Any root page means the root is loaded; requiring the first-page key here
    # would reset pagination on every unrelated Streamlit rerun.
    if not any(page.parent_id is None for page in controller.pages.values()):
        controller.fetch(
            provider,
            PageRequest(parent_id=None, cursor=None, limit=pagination.page_size),
            pagination,
        )

    # Preload explicitly configured initial expansions once. Subsequent expansions
    # are driven by browser requests and reruns.
    if controller_created:
        for parent_id in expanded_ids:
            if not any(page.parent_id == parent_id for page in controller.pages.values()):
                controller.fetch(
                    provider,
                    PageRequest(parent_id=parent_id, cursor=None, limit=pagination.page_size),
                    pagination,
                )

    parsed_request = _parse_page_request(
        _value(component_state, "page_request"), pagination.page_size
    )
    if parsed_request is not None:
        request_id, request, force = parsed_request
        if request_id != controller.last_request_id:
            controller.fetch(provider, request, pagination, force=force)
            controller.last_request_id = request_id

    stored_selection_rules = _parse_selection_rules(_value(component_state, "selection"))
    initial_selection_rules = (
        default_rules if stored_selection_rules is None else stored_selection_rules
    )

    data: dict[str, JsonValue] = {
        "pages": [page.to_wire() for page in controller.pages.values()],
        "actions": [action.to_wire() for action in actions],
        "selectionMode": selection_mode,
        "cascadeSelection": cascade_selection,
        "rangeSelection": range_selection,
        "selectionToolbar": (None if selection_toolbar is None else selection_toolbar.to_wire()),
        "pagination": pagination.to_wire(),
        "theme": theme.to_wire(),
        "height": height,
        "emptyMessage": empty_message,
        "cacheLimited": controller.cache_limited,
        "initialSelectionRules": [rule.to_wire() for rule in initial_selection_rules],
        "initialExpandedIds": list(
            _string_tuple(_value(component_state, "expanded_ids", expanded_defaults))
        ),
    }

    renderer = _get_renderer()
    raw_result = renderer(
        key=key,
        data=data,
        default={
            "selection": {"rules": [rule.to_wire() for rule in default_rules]},
            "expanded_ids": list(expanded_defaults),
        },
        on_selection_change=on_selection_change or _noop,
        on_selection_action_change=on_selection_action or _noop,
        on_expanded_ids_change=on_expansion_change or _noop,
        on_page_request_change=_noop,
        on_action_change=on_action or _noop,
        on_activated_change=on_activate or _noop,
    )
    return _parse_result(raw_result)
