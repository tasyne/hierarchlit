"""Reference local-filesystem adapter with bounded page memory."""

from __future__ import annotations

import os
from heapq import nsmallest
from pathlib import Path

from hierarchlit import (
    HierarchyNode,
    HierarchyPage,
    HierarchyProvider,
    PageRequest,
    ProviderError,
)


class FilesystemProvider(HierarchyProvider):
    """Browse one trusted root without allowing hierarchy path traversal.

    Pages are ordered by filename. The cursor is the last filename returned, so the
    adapter scans a directory but retains only ``request.limit + 1`` entries in memory.
    Symlinks are omitted to keep this reference adapter inside its configured root.
    """

    def __init__(self, root: str | Path, *, include_hidden: bool = False) -> None:
        try:
            resolved = Path(root).expanduser().resolve(strict=True)
        except OSError as exc:
            raise ValueError(f"Filesystem root is unavailable: {root}") from exc
        if not resolved.is_dir():
            raise ValueError(f"Filesystem root is not a directory: {root}")
        self._root = resolved
        self._include_hidden = include_hidden

    def _directory(self, parent_id: str | None) -> Path:
        candidate = self._root if parent_id is None else self._root / parent_id
        try:
            resolved = candidate.resolve(strict=True)
            resolved.relative_to(self._root)
        except (OSError, ValueError) as exc:
            raise ProviderError("The requested folder is unavailable.") from exc
        if not resolved.is_dir():
            raise ProviderError("The requested item is not a folder.")
        return resolved

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        directory = self._directory(request.parent_id)
        cursor = request.cursor
        if cursor == "" or (cursor is not None and Path(cursor).name != cursor):
            raise ProviderError("The pagination cursor is invalid.")

        try:
            with os.scandir(directory) as iterator:
                candidates = (
                    entry
                    for entry in iterator
                    if not entry.is_symlink()
                    and (self._include_hidden or not entry.name.startswith("."))
                    and (cursor is None or entry.name > cursor)
                )
                page_entries = nsmallest(
                    request.limit + 1,
                    candidates,
                    key=lambda entry: entry.name,
                )
        except OSError as exc:
            raise ProviderError("Unable to list the requested folder.") from exc

        has_more = len(page_entries) > request.limit
        visible_entries = page_entries[: request.limit]
        nodes = tuple(self._node(entry, directory) for entry in visible_entries)
        next_cursor = visible_entries[-1].name if has_more and visible_entries else None
        return HierarchyPage(nodes=nodes, next_cursor=next_cursor, total_count=None)

    def _node(self, entry: os.DirEntry[str], directory: Path) -> HierarchyNode:
        is_directory = entry.is_dir(follow_symlinks=False)
        node_path = directory / entry.name
        node_id = node_path.relative_to(self._root).as_posix()
        return HierarchyNode(
            id=node_id,
            label=entry.name,
            kind="folder" if is_directory else "file",
            expandable=is_directory,
            icon="folder" if is_directory else "file",
        )
