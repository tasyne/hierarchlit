# Python API

`hierarchlit` exposes frozen data contracts, one provider interface, and the
`hierarchy()` renderer. All public symbols are importable from the package root.

## Rendering

```python
hierarchy(
    provider,
    *,
    key,
    actions=(),
    selection_mode="single",
    cascade_selection=True,
    range_selection=False,
    selection_toolbar=None,
    pagination=None,
    theme=None,
    default_selected=(),
    default_expanded=(),
    revision=None,
    height=420,
    empty_message="No items",
    on_selection_change=None,
    on_selection_action=None,
    on_expansion_change=None,
    on_action=None,
    on_activate=None,
) -> HierarchyResult
```

The `key` must be stable across Streamlit reruns. Change `revision` when provider data
has changed and cached pages must be refreshed. Revision refreshes retain the active
pagination cursors.

Callbacks receive no arguments. Read the matching component state from
`st.session_state[key]`, or use the returned `HierarchyResult` in straight-line code.

## Providers

Subclass `HierarchyProvider` and implement:

```python
def fetch_page(self, request: PageRequest) -> HierarchyPage: ...
```

`PageRequest.parent_id` is `None` for roots. Treat `cursor` as opaque and never return
more than `limit` nodes. Raise `ProviderError` for safe user-visible failures.

Override `iter_selected_ids()` when a backend can translate `SelectionRule` objects
into a more efficient native prefix or query operation. The default implementation is
lazy and provider-neutral.

`StaticHierarchyProvider` is intended for tests and small in-memory hierarchies.

## Nodes and pages

- `HierarchyNode`: stable ID, label, kind, expansion state, icon, statuses, actions,
  JSON metadata, and disabled state.
- `HierarchyPage`: one bounded sibling page, an optional next cursor, and optional
  total count.
- `PageRequest`: parent ID, cursor, and strict result limit.

## Selection

- `SelectionRule`: ordered inclusion or exclusion for a node, subtree, or all items.
- `HierarchyResult.selected_ids`: explicit inclusion roots only; never an eagerly
  expanded subtree.
- `HierarchyResult.selection_rules`: the complete ordered selection expression.
- `HierarchyResult.selects_all`: whether a global selection is active.
- `HierarchyResult.is_selected()`: resolve a known node when its ancestors are known.
- `SelectionActionEvent`: bulk action plus the exact selection snapshot at click time.

Use `provider.iter_selected_ids()` only when an operation truly needs individual IDs.
For very large backends, prefer translating rules into a backend-native operation.

Set `range_selection=True` with multiple selection to enable Shift-click selection.
Ranges follow the currently visible flattened node order, skip disabled nodes and pager
controls, and never fetch unloaded pages. Containers in the range retain normal
`cascade_selection` behavior. The implementation emits ordinary node rules, so bulk
actions and lazy Python resolution require no separate range contract.

## Configuration

- `PaginationConfig`: paged/load-more mode, page size, cache bounds, row height, and
  virtualization overscan.
- `SelectionToolbarConfig`: bulk actions, clear behavior, visibility, and optional
  global select-all.
- `HierarchyTheme`: optional accent, highlight, hover, and semantic tone colors.
- `HierarchyAction`: stable action ID, label, icon, placement, tone, and disabled state.
- `StatusIcon`: icon, accessible label, and semantic tone.

## Events

- `ActionEvent`: per-node action ID and node ID.
- `ActivationEvent`: activated node ID.
- `SelectionActionEvent`: bulk action ID and immutable selection-rule snapshot.

Event values are transient. Selection and expansion are persistent component state.
