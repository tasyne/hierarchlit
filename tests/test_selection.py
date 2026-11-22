from __future__ import annotations

from hierarchlit import (
    HierarchyNode,
    HierarchyPage,
    PageRequest,
    SelectionRule,
    StaticHierarchyProvider,
)


class RecordingStaticProvider(StaticHierarchyProvider):
    def __init__(self) -> None:
        super().__init__(
            {
                "folder": (
                    HierarchyNode(id="folder/a.txt", label="a.txt"),
                    HierarchyNode(id="folder/excluded", label="excluded", expandable=True),
                    HierarchyNode(id="folder/nested", label="nested", expandable=True),
                ),
                "folder/excluded": (
                    HierarchyNode(
                        id="folder/excluded/reincluded.txt",
                        label="reincluded.txt",
                    ),
                    HierarchyNode(
                        id="folder/excluded/skipped.txt",
                        label="skipped.txt",
                    ),
                ),
                "folder/nested": (HierarchyNode(id="folder/nested/b.txt", label="b.txt"),),
            }
        )
        self.requests: list[PageRequest] = []

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        self.requests.append(request)
        return super().fetch_page(request)


def test_selected_ids_are_resolved_lazily_across_pages_and_overrides() -> None:
    provider = RecordingStaticProvider()
    rules = (
        SelectionRule("folder", selected=True, cascade=True),
        SelectionRule(
            "folder/excluded",
            selected=False,
            cascade=True,
            ancestor_ids=("folder",),
        ),
        SelectionRule(
            "folder/excluded/reincluded.txt",
            selected=True,
            cascade=False,
            ancestor_ids=("folder", "folder/excluded"),
        ),
    )

    selected = provider.iter_selected_ids(rules, page_size=1)
    assert provider.requests == []

    assert next(selected) == "folder/a.txt"
    assert provider.requests == [PageRequest(parent_id="folder", cursor=None, limit=1)]

    assert list(selected) == [
        "folder/excluded/reincluded.txt",
        "folder/nested/b.txt",
    ]
    assert all(request.limit == 1 for request in provider.requests)
    assert any(request.cursor is not None for request in provider.requests)


def test_selected_id_iteration_can_include_containers() -> None:
    provider = RecordingStaticProvider()
    rules = (SelectionRule("folder", selected=True, cascade=True),)

    selected = list(provider.iter_selected_ids(rules, page_size=10, include_containers=True))

    assert selected == [
        "folder",
        "folder/a.txt",
        "folder/excluded",
        "folder/nested",
        "folder/excluded/reincluded.txt",
        "folder/excluded/skipped.txt",
        "folder/nested/b.txt",
    ]


def test_explicit_non_container_selection_needs_no_provider_call() -> None:
    provider = RecordingStaticProvider()
    rules = (SelectionRule("standalone.txt", selected=True, cascade=False),)

    assert list(provider.iter_selected_ids(rules)) == ["standalone.txt"]
    assert provider.requests == []


def test_global_selection_iterates_every_root_page_and_respects_exclusions() -> None:
    provider = RecordingStaticProvider()
    provider._nodes_by_parent[None] = (
        HierarchyNode(id="folder", label="folder", expandable=True),
        HierarchyNode(id="root.txt", label="root.txt"),
    )
    rules = (
        SelectionRule(None, selected=True, cascade=True, scope="all"),
        SelectionRule(
            "folder/excluded",
            selected=False,
            cascade=True,
            ancestor_ids=("folder",),
        ),
        SelectionRule(
            "folder/excluded/reincluded.txt",
            selected=True,
            cascade=False,
            ancestor_ids=("folder", "folder/excluded"),
        ),
    )

    selected = list(provider.iter_selected_ids(rules, page_size=1))

    assert selected == [
        "folder/a.txt",
        "folder/excluded/reincluded.txt",
        "folder/nested/b.txt",
        "root.txt",
    ]
    assert PageRequest(parent_id=None, cursor=None, limit=1) in provider.requests
    assert PageRequest(parent_id=None, cursor="1", limit=1) in provider.requests
