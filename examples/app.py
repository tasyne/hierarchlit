"""Run with: streamlit run examples/app.py"""

from __future__ import annotations

import streamlit as st

from hierarchlit import (
    HierarchyAction,
    HierarchyNode,
    HierarchyPage,
    HierarchyProvider,
    PageRequest,
    PaginationConfig,
    SelectionRule,
    SelectionToolbarConfig,
    StatusIcon,
    hierarchy,
)


class GeneratedProvider(HierarchyProvider):
    """Synthesizes a large hierarchy without materializing it in Python."""

    ROOT_COUNT = 100_000
    TABLE_COUNT = 237
    OBJECT_COUNT = 143

    def __init__(
        self,
        reviewed_selections: tuple[tuple[SelectionRule, ...], ...] = (),
    ) -> None:
        self._reviewed_selections = reviewed_selections

    def _is_reviewed(self, node_id: str) -> bool:
        for rules in self._reviewed_selections:
            for rule in reversed(rules):
                matches = (
                    rule.scope == "all"
                    or rule.node_id == node_id
                    or (
                        rule.cascade
                        and rule.node_id is not None
                        and node_id.startswith(f"{rule.node_id}/")
                    )
                )
                if matches:
                    if rule.selected:
                        return True
                    break
        return False

    def _status_icons(self, node_id: str, index: int) -> tuple[StatusIcon, ...]:
        statuses = []
        if index % 3 == 0:
            statuses.append(StatusIcon("database", "Indexed", "info"))
        if self._is_reviewed(node_id):
            statuses.append(StatusIcon("check", "Reviewed", "success"))
        return tuple(statuses)

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        offset = int(request.cursor or 0)
        if request.parent_id is None:
            count, label, kind, icon, expandable = (
                self.ROOT_COUNT,
                "Namespace",
                "namespace",
                "database",
                True,
            )
        elif request.parent_id.count("/") == 1:
            count, label, kind, icon, expandable = (
                self.TABLE_COUNT,
                "Table",
                "table",
                "table",
                True,
            )
        elif request.parent_id.count("/") == 2:
            count, label, kind, icon, expandable = (
                self.OBJECT_COUNT,
                "Object",
                "object",
                "file",
                False,
            )
        else:
            count, label, kind, icon, expandable = (0, "Item", "item", "file", False)

        end = min(offset + request.limit, count)
        parent_prefix = request.parent_id or "namespace"
        nodes = tuple(
            HierarchyNode(
                id=(node_id := f"{parent_prefix}/{index}"),
                label=f"{label} {index:,}",
                kind=kind,
                expandable=expandable,
                icon=icon,
                secondary_text=kind,
                status_icons=self._status_icons(node_id, index),
                actions=("inspect", "download", "delete"),
                metadata={"ordinal": index, "kind": kind},
            )
            for index in range(offset, end)
        )
        return HierarchyPage(
            nodes=nodes,
            next_cursor=str(end) if end < count else None,
            total_count=count,
        )


st.set_page_config(page_title="hierarchlit example", layout="wide")
st.title("hierarchlit")
st.caption(
    "Independent pagination at every level: 100,000 namespaces, "
    "237 tables per namespace, and 143 objects per table."
)

reviewed_selections: tuple[tuple[SelectionRule, ...], ...] = st.session_state.get(
    "reviewed-selections", ()
)
provider = GeneratedProvider(reviewed_selections)

result = hierarchy(
    provider,
    key="large-hierarchy",
    revision=len(reviewed_selections),
    selection_mode="multiple",
    range_selection=True,
    pagination=PaginationConfig(
        mode="paged",
        page_size=25,
        max_cached_pages=18,
        max_browser_nodes=750,
    ),
    actions=(
        HierarchyAction("inspect", "Inspect", icon="eye", placement="inline"),
        HierarchyAction("download", "Download", icon="download"),
        HierarchyAction("delete", "Delete", icon="trash", tone="danger"),
    ),
    selection_toolbar=SelectionToolbarConfig(
        label="Selected objects",
        show_select_all=True,
        actions=(
            HierarchyAction(
                "download_selected",
                "Download ZIP",
                icon="download",
                placement="inline",
            ),
            HierarchyAction(
                "mark_reviewed",
                "Mark as reviewed",
                icon="check",
                placement="inline",
                tone="success",
            ),
            HierarchyAction(
                "delete_selected",
                "Delete selected",
                icon="trash",
                tone="danger",
            ),
        ),
    ),
    height=560,
)

st.write("Explicit selection roots", result.selected_ids)
st.write("Ordered selection rules", result.selection_rules)
if result.action:
    st.info(f"Action: {result.action.action_id} on {result.action.node_id}")
if result.activated:
    st.info(f"Activated: {result.activated.node_id}")
if result.selection_action and result.selection_action.action_id == "mark_reviewed":
    st.session_state["reviewed-selections"] = (
        *reviewed_selections,
        result.selection_action.selection_rules,
    )
    st.session_state["reviewed-feedback"] = True
    st.rerun()
elif result.selection_action and result.selection_action.action_id == "download_selected":
    with st.spinner("Resolving the complete lazy selection..."):
        selected_item_count = sum(
            1
            for _ in provider.iter_selected_ids(
                result.selection_action.selection_rules,
                page_size=500,
                include_containers=True,
            )
        )
    st.success(f"Download ZIP selection contains {selected_item_count:,} hierarchy items.")
elif result.selection_action:
    st.info(
        f"Bulk action: {result.selection_action.action_id} on selection rules "
        f"{result.selection_action.selection_rules}"
    )

if st.session_state.pop("reviewed-feedback", False):
    st.success("Marked every item in the selection as reviewed.")
