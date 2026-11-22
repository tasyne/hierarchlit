# Provider adapter guide

The provider boundary intentionally does not require filesystem, cloud, or database
SDKs. Applications can keep credentials, authorization, and backend dependencies in
their own layer while reusing the same component.

## Filesystems

[`examples/filesystem_provider.py`](../examples/filesystem_provider.py) contains a
bounded-memory local adapter. It uses the last filename as an opaque cursor and does
not count or materialize an entire directory. The companion
[`examples/filesystem_app.py`](../examples/filesystem_app.py) shows it in Streamlit.

Production filesystem adapters should additionally decide how to handle symlinks,
permission changes, filesystem mutations during pagination, hidden entries, and
platform-specific case sensitivity.

## S3-compatible stores

Map `parent_id` to a prefix and use the object store's continuation token directly as
`PageRequest.cursor`. Return common prefixes as expandable nodes and objects as leaves.
Pass `request.limit` to the SDK's maximum-key option.

For bulk operations, an override of `iter_selected_ids()` can translate cascading
rules into prefix scans and exclusions. Avoid listing all selected keys merely to pass
them back into another S3 bulk API or asynchronous job.

## LanceDB namespaces

Use stable, fully qualified IDs such as `catalog/namespace/table`. Fetch only the
children of `request.parent_id`, and encode any backend page token or last sort key in
the opaque cursor. Namespace and table containers should set `expandable=True`.

LanceDB capabilities vary by deployment and SDK version, so keep the connection and
SDK-specific calls in the adapter. A bulk action can pass the immutable selection-rule
snapshot directly to an application service instead of expanding every table or row in
the Streamlit process.

## Adapter checklist

- IDs are stable and globally unique for the component instance.
- Results are deterministic for a cursor or document the consistency boundary.
- No page exceeds `request.limit`.
- Provider exceptions do not expose credentials or sensitive backend details.
- Authorization is applied again during bulk actions, not inferred from UI state.
- Backend-native bulk operations override generic ID iteration when appropriate.
