"""Stable public data contracts for hierarchy providers and rendering."""

from __future__ import annotations

import math
from collections.abc import Mapping
from dataclasses import dataclass, field
from typing import Literal, TypeAlias

JsonPrimitive: TypeAlias = str | int | float | bool | None
JsonValue: TypeAlias = JsonPrimitive | list["JsonValue"] | dict[str, "JsonValue"]
IconTone: TypeAlias = Literal["neutral", "info", "success", "warning", "danger"]
ActionPlacement: TypeAlias = Literal["inline", "menu"]
SelectionMode: TypeAlias = Literal["single", "multiple", "none"]
SelectionScope: TypeAlias = Literal["node", "all"]
PaginationMode: TypeAlias = Literal["paged", "load_more"]
_TONES = frozenset({"neutral", "info", "success", "warning", "danger"})
_PLACEMENTS = frozenset({"inline", "menu"})
_PAGINATION_MODES = frozenset({"paged", "load_more"})


def _require_nonempty(value: str, field_name: str) -> None:
    if not value or not value.strip():
        raise ValueError(f"{field_name} must be a non-empty string")


def _is_json_value(value: object) -> bool:
    if value is None or isinstance(value, (str, bool, int)):
        return True
    if isinstance(value, float):
        return math.isfinite(value)
    if isinstance(value, list):
        return all(_is_json_value(item) for item in value)
    if isinstance(value, dict):
        return all(isinstance(key, str) and _is_json_value(item) for key, item in value.items())
    return False


def _validate_css_color(value: str | None, field_name: str) -> None:
    if value is None:
        return
    _require_nonempty(value, field_name)
    if len(value) > 200 or any(character in value for character in ";{}"):
        raise ValueError(f"{field_name} must be a safe CSS color value")


@dataclass(frozen=True, slots=True)
class StatusIcon:
    """A small, accessible status glyph displayed after a node's label.

    ``name`` is resolved through the frontend's safe icon registry. Unknown names
    render as a neutral circle instead of being interpreted as markup.
    """

    name: str
    label: str
    tone: IconTone = "neutral"

    def __post_init__(self) -> None:
        _require_nonempty(self.name, "StatusIcon.name")
        _require_nonempty(self.label, "StatusIcon.label")
        if self.tone not in _TONES:
            raise ValueError(f"Unsupported status icon tone: {self.tone!r}")

    def to_wire(self) -> dict[str, JsonValue]:
        return {"name": self.name, "label": self.label, "tone": self.tone}


@dataclass(frozen=True, slots=True)
class HierarchyAction:
    """An action definition referenced by ID from one or more nodes."""

    id: str
    label: str
    icon: str | None = None
    placement: ActionPlacement = "menu"
    tone: IconTone = "neutral"
    disabled: bool = False

    def __post_init__(self) -> None:
        _require_nonempty(self.id, "HierarchyAction.id")
        _require_nonempty(self.label, "HierarchyAction.label")
        if self.placement not in _PLACEMENTS:
            raise ValueError(f"Unsupported action placement: {self.placement!r}")
        if self.tone not in _TONES:
            raise ValueError(f"Unsupported action tone: {self.tone!r}")

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "id": self.id,
            "label": self.label,
            "icon": self.icon,
            "placement": self.placement,
            "tone": self.tone,
            "disabled": self.disabled,
        }


@dataclass(frozen=True, slots=True)
class SelectionToolbarConfig:
    """Configuration for the optional bulk-selection toolbar."""

    actions: tuple[HierarchyAction, ...] = ()
    label: str = "Selected items"
    show_clear: bool = True
    always_visible: bool = False
    show_select_all: bool = False
    select_all_label: str = "Select all"

    def __post_init__(self) -> None:
        _require_nonempty(self.label, "SelectionToolbarConfig.label")
        _require_nonempty(self.select_all_label, "SelectionToolbarConfig.select_all_label")
        action_ids = [action.id for action in self.actions]
        if len(action_ids) != len(set(action_ids)):
            raise ValueError("Selection toolbar action IDs must be unique")

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "actions": [action.to_wire() for action in self.actions],
            "label": self.label,
            "showClear": self.show_clear,
            "alwaysVisible": self.always_visible,
            "showSelectAll": self.show_select_all,
            "selectAllLabel": self.select_all_label,
        }


@dataclass(frozen=True, slots=True)
class HierarchyTheme:
    """Optional CSS color overrides; omitted values inherit component defaults."""

    accent_color: str | None = None
    selected_background: str | None = None
    hover_background: str | None = None
    success_color: str | None = None
    info_color: str | None = None
    warning_color: str | None = None
    danger_color: str | None = None

    def __post_init__(self) -> None:
        for field_name in (
            "accent_color",
            "selected_background",
            "hover_background",
            "success_color",
            "info_color",
            "warning_color",
            "danger_color",
        ):
            _validate_css_color(getattr(self, field_name), f"HierarchyTheme.{field_name}")

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "accentColor": self.accent_color,
            "selectedBackground": self.selected_background,
            "hoverBackground": self.hover_background,
            "successColor": self.success_color,
            "infoColor": self.info_color,
            "warningColor": self.warning_color,
            "dangerColor": self.danger_color,
        }


@dataclass(frozen=True, slots=True)
class HierarchyNode:
    """A provider-independent item in a hierarchy.

    IDs must be stable and globally unique within one component instance. A node
    advertises its permitted actions by referencing ``HierarchyAction.id`` values.
    """

    id: str
    label: str
    kind: str = "item"
    expandable: bool = False
    icon: str | None = None
    secondary_text: str | None = None
    status_icons: tuple[StatusIcon, ...] = ()
    actions: tuple[str, ...] = ()
    disabled: bool = False
    metadata: Mapping[str, JsonValue] = field(default_factory=dict)

    def __post_init__(self) -> None:
        _require_nonempty(self.id, "HierarchyNode.id")
        _require_nonempty(self.label, "HierarchyNode.label")
        _require_nonempty(self.kind, "HierarchyNode.kind")
        if len(set(self.actions)) != len(self.actions):
            raise ValueError(f"HierarchyNode.actions contains duplicates for node {self.id!r}")
        for action_id in self.actions:
            _require_nonempty(action_id, "HierarchyNode.actions item")
        if not _is_json_value(dict(self.metadata)):
            raise ValueError(
                f"HierarchyNode.metadata must contain JSON values for node {self.id!r}"
            )

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "id": self.id,
            "label": self.label,
            "kind": self.kind,
            "expandable": self.expandable,
            "icon": self.icon,
            "secondaryText": self.secondary_text,
            "statusIcons": [status.to_wire() for status in self.status_icons],
            "actions": list(self.actions),
            "disabled": self.disabled,
            "metadata": dict(self.metadata),
        }


@dataclass(frozen=True, slots=True)
class PageRequest:
    """One cursor-based page requested from a provider."""

    parent_id: str | None
    cursor: str | None
    limit: int

    def __post_init__(self) -> None:
        if self.limit < 1:
            raise ValueError("PageRequest.limit must be positive")


@dataclass(frozen=True, slots=True)
class HierarchyPage:
    """A page returned by ``HierarchyProvider.fetch_page``."""

    nodes: tuple[HierarchyNode, ...]
    next_cursor: str | None = None
    total_count: int | None = None

    def __post_init__(self) -> None:
        ids = [node.id for node in self.nodes]
        if len(ids) != len(set(ids)):
            raise ValueError("HierarchyPage contains duplicate node IDs")
        if self.total_count is not None and self.total_count < len(self.nodes):
            raise ValueError("HierarchyPage.total_count cannot be smaller than the page")
        if self.next_cursor == "":
            raise ValueError("HierarchyPage.next_cursor must be None or a non-empty string")


@dataclass(frozen=True, slots=True)
class PaginationConfig:
    """Controls server paging, browser bounds, and row virtualization.

    ``paged`` replaces a sibling page when navigating and is recommended for very
    large result sets. ``load_more`` accumulates pages until ``max_browser_nodes``.
    """

    mode: PaginationMode = "paged"
    page_size: int = 100
    max_cached_pages: int = 24
    max_browser_nodes: int = 2_500
    row_height: int = 28
    overscan: int = 8

    def __post_init__(self) -> None:
        if self.mode not in _PAGINATION_MODES:
            raise ValueError(f"Unsupported pagination mode: {self.mode!r}")
        if not 1 <= self.page_size <= 10_000:
            raise ValueError("PaginationConfig.page_size must be between 1 and 10,000")
        if self.max_cached_pages < 1:
            raise ValueError("PaginationConfig.max_cached_pages must be positive")
        if self.max_browser_nodes < self.page_size:
            raise ValueError("max_browser_nodes must be at least page_size")
        if not 20 <= self.row_height <= 80:
            raise ValueError("row_height must be between 20 and 80 pixels")
        if not 0 <= self.overscan <= 100:
            raise ValueError("overscan must be between 0 and 100")

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "mode": self.mode,
            "pageSize": self.page_size,
            "maxCachedPages": self.max_cached_pages,
            "maxBrowserNodes": self.max_browser_nodes,
            "rowHeight": self.row_height,
            "overscan": self.overscan,
        }


@dataclass(frozen=True, slots=True)
class ActionEvent:
    node_id: str
    action_id: str


@dataclass(frozen=True, slots=True)
class ActivationEvent:
    node_id: str


@dataclass(frozen=True, slots=True)
class SelectionRule:
    """An ordered inclusion or exclusion rule for a node, subtree, or all items."""

    node_id: str | None
    selected: bool
    cascade: bool
    ancestor_ids: tuple[str, ...] = ()
    scope: SelectionScope = "node"

    def __post_init__(self) -> None:
        if self.scope == "node":
            if self.node_id is None:
                raise ValueError("A node selection rule requires node_id")
            _require_nonempty(self.node_id, "SelectionRule.node_id")
        elif self.scope == "all":
            if self.node_id is not None:
                raise ValueError("An all-items selection rule cannot have node_id")
            if not self.cascade:
                raise ValueError("An all-items selection rule must cascade")
            if self.ancestor_ids:
                raise ValueError("An all-items selection rule cannot have ancestors")
        else:
            raise ValueError(f"Unsupported selection rule scope: {self.scope!r}")
        if len(self.ancestor_ids) != len(set(self.ancestor_ids)):
            raise ValueError("SelectionRule.ancestor_ids must not contain duplicates")
        for ancestor_id in self.ancestor_ids:
            _require_nonempty(ancestor_id, "SelectionRule.ancestor_ids item")
        if self.node_id is not None and self.node_id in self.ancestor_ids:
            raise ValueError("SelectionRule.node_id cannot be its own ancestor")

    def to_wire(self) -> dict[str, JsonValue]:
        return {
            "nodeId": self.node_id,
            "selected": self.selected,
            "cascade": self.cascade,
            "ancestorIds": list(self.ancestor_ids),
            "scope": self.scope,
        }


@dataclass(frozen=True, slots=True)
class SelectionActionEvent:
    """A bulk action and the ordered selection snapshot it targets."""

    action_id: str
    selection_rules: tuple[SelectionRule, ...]

    @property
    def selected_ids(self) -> tuple[str, ...]:
        """Return explicit inclusion roots without expanding selected subtrees."""

        return tuple(
            rule.node_id
            for rule in self.selection_rules
            if rule.selected and rule.node_id is not None
        )

    @property
    def selects_all(self) -> bool:
        """Whether the snapshot includes a global all-items rule."""

        for rule in reversed(self.selection_rules):
            if rule.scope == "all":
                return rule.selected
        return False


@dataclass(frozen=True, slots=True)
class HierarchyResult:
    """Current selection rules plus transient events from this Streamlit rerun.

    ``selected_ids`` contains explicit node inclusion roots, not an eagerly expanded
    list of every item in a selected subtree. It is empty for a purely global
    selection; use ``selects_all``, ``is_selected``, or ``selection_rules`` when
    applying a cascading selection to a lazy backend.
    """

    selected_ids: tuple[str, ...] = ()
    selection_rules: tuple[SelectionRule, ...] = ()
    selection_action: SelectionActionEvent | None = None
    action: ActionEvent | None = None
    activated: ActivationEvent | None = None

    @property
    def selects_all(self) -> bool:
        """Whether the current selection includes the global all-items rule."""

        for rule in reversed(self.selection_rules):
            if rule.scope == "all":
                return rule.selected
        return False

    def is_selected(self, node_id: str, ancestor_ids: tuple[str, ...] = ()) -> bool:
        """Resolve selection for an ID given its root-to-parent ancestor IDs."""

        ancestors = set(ancestor_ids)
        for rule in reversed(self.selection_rules):
            if (
                rule.scope == "all"
                or rule.node_id == node_id
                or (rule.cascade and rule.node_id in ancestors)
            ):
                return rule.selected
        return False
