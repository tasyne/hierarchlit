# hierarchlit

A compact, accessible hierarchy browser for Streamlit. It is a package-based
Streamlit v2 custom component built with React and TypeScript.

`hierarchlit` is domain-neutral: files, S3 objects, LanceDB namespaces, database
objects, and application-specific trees all cross the same small provider boundary.
It supports:

- lazy expansion and cursor-based pagination;
- constant-memory paged navigation or bounded “load more” navigation;
- virtualized rendering of visible rows;
- single, multiple, disabled, or cascading subtree selection;
- any number of status icons per node;
- inline actions and a compact `...` menu;
- typed Python results and Streamlit callbacks;
- keyboard navigation, ARIA tree semantics, light/dark themes, and reduced motion.

## Install

```bash
pip install hierarchlit
```

The package requires Python 3.11+ and Streamlit 1.51+.
The published wheel includes the compiled React application, so consuming Streamlit
apps do not need Node.js or a frontend build step.

`hierarchlit` is currently alpha software. The public contracts are typed and tested,
but minor releases before 1.0 may refine APIs as real filesystem, object-store, and
database integrations provide feedback.

## Quick start

```python
import streamlit as st

from hierarchlit import (
    HierarchyAction,
    HierarchyNode,
    HierarchyTheme,
    PaginationConfig,
    SelectionToolbarConfig,
    StaticHierarchyProvider,
    StatusIcon,
    hierarchy,
)

provider = StaticHierarchyProvider(
    {
        None: [
            HierarchyNode(
                id="documents",
                label="Documents",
                expandable=True,
                actions=("refresh", "delete"),
                status_icons=(StatusIcon("check", "Synchronized", "success"),),
            ),
        ],
        "documents": [
            HierarchyNode(id="documents/report.pdf", label="report.pdf"),
        ],
    }
)

result = hierarchy(
    provider,
    key="objects",
    selection_mode="multiple",
    cascade_selection=True,
    range_selection=True,
    pagination=PaginationConfig(mode="paged", page_size=100),
    actions=(
        HierarchyAction("refresh", "Refresh", icon="refresh", placement="inline"),
        HierarchyAction("delete", "Delete", icon="trash", tone="danger"),
    ),
    selection_toolbar=SelectionToolbarConfig(
        label="Selected items",
        show_select_all=True,
        actions=(
            HierarchyAction(
                "download_selected",
                "Download ZIP",
                icon="download",
                placement="inline",
            ),
            HierarchyAction(
                "delete_selected",
                "Delete selected",
                icon="trash",
                tone="danger",
            ),
        ),
    ),
)

if result.action:
    st.write(result.action.node_id, result.action.action_id)
```

Global action definitions keep presentation consistent. Each node exposes only the
action IDs that are valid for that item. Additional actions use the `...` menu;
`placement="inline"` actions appear on row hover or keyboard focus.

## Colors and Streamlit themes

By default, the component follows Streamlit's global CSS theme variables:
`--st-primary-color` controls checkbox checks, selected-row accents, and focus rings;
`--st-text-color` and `--st-background-color` control text, borders, surfaces, and
derived hover colors. This means changing the normal Streamlit theme requires no
component configuration.

Semantic status colors and any app-specific exceptions can be overridden with the
typed `HierarchyTheme` API. Every field accepts a normal CSS color value, including
`var(...)` and `color-mix(...)`:

```python
result = hierarchy(
    provider,
    key="objects",
    theme=HierarchyTheme(
        accent_color="#7c3aed",  # Checkboxes, focus, selected accent.
        selected_background="#ede9fe",  # Selected-row highlight.
        hover_background="#f5f3ff",
        success_color="#15803d",  # Success/check status icons.
        info_color="#0369a1",
        warning_color="#a16207",
        danger_color="#b91c1c",
    ),
)
```

These map to the component CSS custom properties
`--hierarchlit-accent-color`, `--hierarchlit-selected-background`,
`--hierarchlit-hover-background`, and the four
`--hierarchlit-{success,info,warning,danger}-color` tone variables. Omit `theme=` to
keep the Streamlit-derived defaults.

## Large and remote hierarchies

Implement `HierarchyProvider` for an S3 client, LanceDB connection, filesystem, or
other backend. The provider receives the parent ID, an opaque cursor, and a strict
limit. It returns only one page:

```python
from hierarchlit import (
    HierarchyNode,
    HierarchyPage,
    HierarchyProvider,
    PageRequest,
)


class S3Provider(HierarchyProvider):
    def __init__(self, client, bucket: str) -> None:
        self.client = client
        self.bucket = bucket

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        prefix = request.parent_id or ""
        params = dict(
            Bucket=self.bucket,
            Prefix=prefix,
            Delimiter="/",
            MaxKeys=request.limit,
        )
        if request.cursor is not None:
            params["ContinuationToken"] = request.cursor
        response = self.client.list_objects_v2(**params)
        nodes = tuple(
            HierarchyNode(
                id=item["Key"],
                label=item["Key"].removeprefix(prefix),
                actions=("download",),
            )
            for item in response.get("Contents", ())
        )
        return HierarchyPage(
            nodes=nodes,
            next_cursor=response.get("NextContinuationToken"),
            total_count=None,
        )
```

Provider rules:

- IDs must be stable and globally unique within a component instance.
- Cursors are opaque to `hierarchlit`; encode backend state however you need.
- Never return more than `request.limit` nodes.
- Raise `ProviderError` for a safe message that may be shown to users. Unexpected
  exceptions are logged and rendered as a generic retryable error.
- Put application-specific values in `HierarchyNode.metadata`; events intentionally
  return stable IDs instead of copying arbitrary data back to Python.

Use `revision=` on `hierarchy()` when a changed value should invalidate its bounded
page cache, such as an S3 bucket version, query fingerprint, or refresh counter.

## Pagination and browser bounds

Pagination is configured per component instance:

```python
PaginationConfig(
    mode="paged",  # "paged" or "load_more"
    page_size=100,  # maximum provider result size
    max_cached_pages=24,  # Python/session and browser page window
    max_browser_nodes=2500,
    row_height=28,
    overscan=8,
)
```

`paged` is the recommended mode for hundreds of thousands of siblings: navigating
replaces the current sibling page. `load_more` accumulates sibling pages for browsing
continuity but stops at `max_browser_nodes`. Collapsing a folder drops its cached
descendant pages, so they can be reclaimed immediately. The browser virtualizes the
flattened visible rows in both modes.

## Events and callbacks

Selection and expansion are persistent Streamlit component state. Actions, activation,
and page requests are transient triggers. The returned `HierarchyResult` is usually the
simplest interface:

```python
result = hierarchy(provider, key="catalog")

if result.action:
    handle(result.action.node_id, result.action.action_id)
```

### Cascading selection and global “select all”

For multiple selection, `cascade_selection=True` is the default. Selecting a container
checks every loaded descendant and automatically applies to descendants loaded by later
expansion or pagination. Deselecting a child creates a compact exclusion rule and gives
its ancestors an indeterminate checkbox. Set `cascade_selection=False` when every
checkbox should be independent.

Set `range_selection=True` to let users Shift-click two nodes and select the contiguous
visible rows between them. Range selection is intentionally bounded to nodes already in
the flattened browser view: it skips pager controls and does not load intervening pages.
Containers keep the configured cascade behavior, and the resulting state remains a
normal ordered set of `SelectionRule` objects.

The top-level global checkbox is intentionally opt-in because not every backend or
workflow permits operations over an entire result set:

```python
SelectionToolbarConfig(
    show_select_all=True,
    select_all_label="Select all",  # Configurable for domain-specific wording.
)
```

Selecting it creates one compact `scope="all"` rule. It immediately checks every
loaded root and descendant, also applies to items loaded by later pagination or
expansion, and supports per-node exclusions. Clearing it clears the selection. The
generic provider resolver starts paging at `parent_id=None`, so a global bulk action
can lazily cover the complete result set without sending all IDs through the browser.
Use `result.selects_all` or `result.selection_action.selects_all` when application
logic needs to distinguish a global selection from explicit selection roots.

Lazy trees can contain hundreds of thousands of descendants, so `selected_ids` contains
explicit inclusion roots rather than an eagerly expanded list. Use the ordered
`selection_rules` for backend operations; the most recent matching node or ancestor rule
wins:

```python
for rule in result.selection_rules:
    print(rule.scope, rule.node_id, rule.selected, rule.cascade)

# Resolve a known item when its ancestry is available.
selected = result.is_selected(
    "bucket/folder/object.parquet",
    ancestor_ids=("bucket", "bucket/folder"),
)
```

This representation lets an S3 or LanceDB adapter apply a whole-prefix selection without
transferring every descendant ID through the browser.

Resolve the rules through the provider when an operation needs individual IDs. The
iterator is lazy: it fetches one configured page at a time and does no provider work
until iteration begins.

```python
selected_ids = provider.iter_selected_ids(
    result.selection_rules,
    page_size=500,
    include_containers=False,  # Yield leaves/files/objects only.
)

for node_id in selected_ids:
    process(node_id)
```

The generic resolver starts directly at selected subtree roots—or at the provider root
for a global rule—follows pagination at every depth, skips excluded subtrees, and still
finds later re-inclusions. Its memory is bounded to paged traversal state. Override
`iter_selected_ids()` in an S3,
LanceDB, or filesystem provider when the backend can translate the rules into a more
efficient native prefix scan or query.

### Selection toolbar and bulk actions

Pass `SelectionToolbarConfig` to add a top-level toolbar that appears when a selection
is active. Its actions are independent from per-row actions. `placement="inline"`
creates a labeled toolbar button; menu actions are grouped under `...`.

When an action is clicked, `result.selection_action` contains the action ID and the
exact ordered selection-rule snapshot that was active at click time:

```python
import io
import zipfile

event = result.selection_action
if event and event.action_id == "download_selected":
    archive = io.BytesIO()
    with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as output:
        for object_name in provider.iter_selected_ids(event.selection_rules):
            # `read` is an application-specific S3/filesystem/LanceDB method.
            output.writestr(object_name, provider.read(object_name))

    st.download_button(
        "Save selected objects",
        archive.getvalue(),
        file_name="selected-items.zip",
        mime="application/zip",
    )
```

The component intentionally emits a backend-neutral action instead of reading object
contents itself. This lets the application enforce authorization, stream from S3 or
LanceDB, and choose whether a bulk operation returns a ZIP, starts a job, or updates
the selected records. Configure `show_clear=False`, `always_visible=True`, or the
opt-in `show_select_all=True` on `SelectionToolbarConfig` to adjust toolbar behavior;
omit `selection_toolbar` entirely to hide it.

For callback-oriented apps, pass `on_action`, `on_selection_action`, `on_activate`,
`on_selection_change`, or `on_expansion_change`. Streamlit invokes these callbacks
without arguments; read `st.session_state["catalog"].selection` inside the callback.
Because Streamlit ignores trigger values inside `st.form`, do not place a lazy or
action-enabled hierarchy inside a form.

Built-in safe icon names include `archive`, `box`, `bucket`, `check`, `cloud`,
`database`, `download`, `error`, `eye`, `file`, `file-text`, `folder`, `info`,
`lock`, `pencil`, `refresh`, `server`, `settings`, `success`, `table`, `trash`,
`unlock`, and `warning`. Unknown names render as a neutral circle. Labels and
metadata are rendered as React text, never injected HTML.

## Reference material

- `docs/api.md` summarizes every public Python contract and event.
- `docs/provider-adapters.md` covers filesystem, S3-compatible, and LanceDB adapter
  design.
- `examples/filesystem_app.py` is a runnable local-filesystem integration.
- `CHANGELOG.md`, `CONTRIBUTING.md`, and `SECURITY.md` document release history,
  development checks, and private vulnerability reporting.

The local filesystem adapter is intentionally an example rather than a mandatory
runtime dependency. Cloud and database SDKs remain in the consuming application, so a
basic `pip install hierarchlit` stays small and backend-neutral.

## Architecture

- `HierarchyProvider` is the backend port; S3, LanceDB, and filesystem classes are
  adapters.
- Frozen data classes are the transport contract.
- The Python controller owns provider calls, revision invalidation, errors, and a
  bounded LRU-like page window.
- React owns view state and sends only IDs/cursors across the Streamlit bridge.
- The frontend flattens expanded pages and virtualizes only the visible viewport.

## Development

```bash
python -m venv .venv
.venv/bin/pip install -e '.[dev]'

cd hierarchlit/frontend
npm install
npm test
npm run build

cd ../..
.venv/bin/pytest
.venv/bin/ruff check .
.venv/bin/mypy hierarchlit tests
.venv/bin/python scripts/check_versions.py
.venv/bin/streamlit run examples/app.py
```

The built frontend in `hierarchlit/frontend/build` is included in Python wheels.
See `CONTRIBUTING.md` for distribution validation and `docs/releasing.md` for the
pre-release checklist.
