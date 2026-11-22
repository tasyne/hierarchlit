"""Run from the project root: streamlit run examples/filesystem_app.py"""

from __future__ import annotations

from pathlib import Path

import streamlit as st

from examples.filesystem_provider import FilesystemProvider
from hierarchlit import (
    HierarchyAction,
    PaginationConfig,
    SelectionToolbarConfig,
    hierarchy,
)

st.set_page_config(page_title="hierarchlit filesystem example", layout="wide")
st.title("Filesystem hierarchy")
st.caption("For local development against a trusted filesystem root.")

root = st.text_input("Root directory", value=str(Path.cwd()))

try:
    provider = FilesystemProvider(root)
except ValueError as exc:
    st.error(str(exc))
    st.stop()

result = hierarchy(
    provider,
    key="filesystem-hierarchy",
    selection_mode="multiple",
    range_selection=True,
    pagination=PaginationConfig(page_size=100, max_browser_nodes=2_500),
    selection_toolbar=SelectionToolbarConfig(
        show_select_all=True,
        actions=(
            HierarchyAction(
                "inspect_selected",
                "Inspect selection",
                icon="eye",
                placement="inline",
            ),
        ),
    ),
    height=600,
)

if result.selection_action:
    st.write(result.selection_action)
