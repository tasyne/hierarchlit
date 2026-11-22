"""Lazy, backend-neutral evaluation of ordered hierarchy selection rules."""

from __future__ import annotations

from collections.abc import Iterator, Sequence

from .models import PageRequest, SelectionRule
from .providers import HierarchyProvider, ProviderError


def _matching_rule(
    node_id: str,
    ancestor_ids: Sequence[str],
    rules: Sequence[SelectionRule],
) -> SelectionRule | None:
    ancestors = set(ancestor_ids)
    for rule in reversed(rules):
        if (
            rule.scope == "all"
            or rule.node_id == node_id
            or (rule.cascade and rule.node_id in ancestors)
        ):
            return rule
    return None


def _is_effectively_selected(rule: SelectionRule, rules: Sequence[SelectionRule]) -> bool:
    if rule.scope == "all":
        return _global_selection_active(rules)
    assert rule.node_id is not None
    match = _matching_rule(rule.node_id, rule.ancestor_ids, rules)
    return match is not None and match.selected


def _global_selection_active(rules: Sequence[SelectionRule]) -> bool:
    for rule in reversed(rules):
        if rule.scope == "all":
            return rule.selected
    return False


def _has_selected_descendant(
    node_id: str,
    rules: Sequence[SelectionRule],
) -> bool:
    return any(
        node_id in rule.ancestor_ids and _is_effectively_selected(rule, rules) for rule in rules
    )


def _top_cascade_roots(rules: Sequence[SelectionRule]) -> tuple[SelectionRule, ...]:
    candidates = [
        rule
        for rule in rules
        if rule.scope == "node"
        and rule.selected
        and rule.cascade
        and _is_effectively_selected(rule, rules)
    ]
    roots: list[SelectionRule] = []
    seen: set[str] = set()
    for rule in candidates:
        assert rule.node_id is not None
        if rule.node_id in seen:
            continue
        if any(
            other.node_id != rule.node_id and other.node_id in rule.ancestor_ids
            for other in candidates
        ):
            continue
        seen.add(rule.node_id)
        roots.append(rule)
    return tuple(roots)


def _iter_selected_children(
    provider: HierarchyProvider,
    rules: Sequence[SelectionRule],
    *,
    parent_id: str | None,
    ancestor_ids: tuple[str, ...],
    page_size: int,
    include_containers: bool,
) -> Iterator[str]:
    Frame = tuple[str | None, str | None, tuple[str, ...], frozenset[str]]
    stack: list[Frame] = [(parent_id, None, ancestor_ids, frozenset())]

    while stack:
        current_parent, cursor, current_ancestors, seen_cursors = stack.pop()
        page = provider.fetch_page(
            PageRequest(parent_id=current_parent, cursor=cursor, limit=page_size)
        )
        if len(page.nodes) > page_size:
            raise ProviderError(
                f"Provider returned {len(page.nodes)} nodes for a limit of {page_size}."
            )

        next_cursor = page.next_cursor
        if next_cursor is not None:
            if next_cursor == cursor or next_cursor in seen_cursors:
                raise ProviderError("Provider returned a repeated pagination cursor.")
            stack.append(
                (
                    current_parent,
                    next_cursor,
                    current_ancestors,
                    seen_cursors | {next_cursor},
                )
            )

        child_tasks: list[Frame] = []
        for node in page.nodes:
            match = _matching_rule(node.id, current_ancestors, rules)
            selected = match is not None and match.selected
            if selected and (include_containers or not node.expandable):
                yield node.id

            if not node.expandable:
                continue
            inherits_selection = (
                match is not None and match.selected and (match.scope == "all" or match.cascade)
            )
            if inherits_selection or _has_selected_descendant(node.id, rules):
                child_tasks.append((node.id, None, (*current_ancestors, node.id), frozenset()))

        stack.extend(reversed(child_tasks))


def iter_selected_ids(
    provider: HierarchyProvider,
    rules: Sequence[SelectionRule],
    *,
    page_size: int = 100,
    include_containers: bool = False,
) -> Iterator[str]:
    """Yield selected IDs lazily, fetching only selected or overridden subtrees.

    The iterator calls ``provider.fetch_page`` as it is consumed. It holds at most
    one provider page plus a hierarchy frontier in memory. Container IDs are omitted
    by default because bulk file/object operations generally target leaves.
    """

    if page_size < 1:
        raise ValueError("page_size must be positive")

    ordered_rules = tuple(rules)
    if _global_selection_active(ordered_rules):
        yield from _iter_selected_children(
            provider,
            ordered_rules,
            parent_id=None,
            ancestor_ids=(),
            page_size=page_size,
            include_containers=include_containers,
        )
        return

    cascade_roots = _top_cascade_roots(ordered_rules)
    root_ids = {rule.node_id for rule in cascade_roots}

    emitted_explicit: set[str] = set()
    for rule in ordered_rules:
        if (
            rule.scope != "node"
            or not rule.selected
            or rule.cascade
            or not _is_effectively_selected(rule, ordered_rules)
            or any(root_id in rule.ancestor_ids for root_id in root_ids)
            or rule.node_id in emitted_explicit
        ):
            continue
        assert rule.node_id is not None
        emitted_explicit.add(rule.node_id)
        yield rule.node_id

    for root in cascade_roots:
        assert root.node_id is not None
        if include_containers:
            yield root.node_id
        yield from _iter_selected_children(
            provider,
            ordered_rules,
            parent_id=root.node_id,
            ancestor_ids=(*root.ancestor_ids, root.node_id),
            page_size=page_size,
            include_containers=include_containers,
        )
