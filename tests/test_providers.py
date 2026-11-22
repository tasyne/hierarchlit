from __future__ import annotations

import pytest

from hierarchlit import HierarchyNode, PageRequest, ProviderError, StaticHierarchyProvider


def test_static_provider_pages_with_opaque_cursor_contract() -> None:
    provider = StaticHierarchyProvider(
        {None: [HierarchyNode(id=str(index), label=str(index)) for index in range(5)]}
    )

    first = provider.fetch_page(PageRequest(parent_id=None, cursor=None, limit=2))
    second = provider.fetch_page(PageRequest(parent_id=None, cursor=first.next_cursor, limit=2))

    assert [node.id for node in first.nodes] == ["0", "1"]
    assert first.next_cursor == "2"
    assert [node.id for node in second.nodes] == ["2", "3"]
    assert second.next_cursor == "4"
    assert second.total_count == 5


def test_static_provider_rejects_invalid_cursor() -> None:
    provider = StaticHierarchyProvider({None: []})
    with pytest.raises(ProviderError, match="cursor"):
        provider.fetch_page(PageRequest(parent_id=None, cursor="opaque", limit=10))


def test_static_provider_requires_global_ids() -> None:
    node = HierarchyNode(id="duplicate", label="Duplicate")
    with pytest.raises(ValueError, match="globally unique"):
        StaticHierarchyProvider({None: [node], "parent": [node]})
