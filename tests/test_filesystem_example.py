from __future__ import annotations

from pathlib import Path

import pytest

from examples.filesystem_provider import FilesystemProvider
from hierarchlit import PageRequest, ProviderError


def test_filesystem_provider_pages_by_stable_filename_cursor(tmp_path: Path) -> None:
    (tmp_path / "b.txt").write_text("b", encoding="utf-8")
    (tmp_path / "a.txt").write_text("a", encoding="utf-8")
    (tmp_path / "folder").mkdir()
    (tmp_path / "folder" / "child.txt").write_text("child", encoding="utf-8")
    provider = FilesystemProvider(tmp_path)

    first = provider.fetch_page(PageRequest(parent_id=None, cursor=None, limit=2))
    second = provider.fetch_page(PageRequest(parent_id=None, cursor=first.next_cursor, limit=2))

    assert [node.id for node in first.nodes] == ["a.txt", "b.txt"]
    assert first.next_cursor == "b.txt"
    assert [node.id for node in second.nodes] == ["folder"]
    assert second.next_cursor is None
    assert second.nodes[0].expandable is True

    child_page = provider.fetch_page(PageRequest(parent_id="folder", cursor=None, limit=10))
    assert [node.id for node in child_page.nodes] == ["folder/child.txt"]


def test_filesystem_provider_rejects_parent_traversal(tmp_path: Path) -> None:
    provider = FilesystemProvider(tmp_path)

    with pytest.raises(ProviderError, match="unavailable"):
        provider.fetch_page(PageRequest(parent_id="../outside", cursor=None, limit=10))
