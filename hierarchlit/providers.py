"""Extensible data-provider boundary for lazy hierarchies."""

from __future__ import annotations

from abc import ABC, abstractmethod
from collections.abc import Iterable, Iterator, Mapping, Sequence

from .models import HierarchyNode, HierarchyPage, PageRequest, SelectionRule


class ProviderError(Exception):
    """A safe, user-displayable provider failure."""


class HierarchyProvider(ABC):
    """Implement this interface for S3, LanceDB, filesystems, or other stores.

    Implementations should treat cursors as opaque, return stable globally unique
    node IDs, and perform no more work than requested by ``request.limit``.
    """

    @abstractmethod
    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        """Fetch one root or child page."""

    def iter_selected_ids(
        self,
        rules: Sequence[SelectionRule],
        *,
        page_size: int = 100,
        include_containers: bool = False,
    ) -> Iterator[str]:
        """Resolve rules lazily; override for backend-native query optimization."""

        from .selection import iter_selected_ids

        return iter_selected_ids(
            self,
            rules,
            page_size=page_size,
            include_containers=include_containers,
        )


class StaticHierarchyProvider(HierarchyProvider):
    """In-memory provider useful for examples, tests, and small hierarchies."""

    def __init__(
        self,
        nodes_by_parent: Mapping[str | None, Iterable[HierarchyNode]],
    ) -> None:
        self._nodes_by_parent = {
            parent_id: tuple(nodes) for parent_id, nodes in nodes_by_parent.items()
        }
        all_ids = [node.id for nodes in self._nodes_by_parent.values() for node in nodes]
        if len(all_ids) != len(set(all_ids)):
            raise ValueError("Node IDs must be globally unique")

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        nodes = self._nodes_by_parent.get(request.parent_id, ())
        try:
            offset = int(request.cursor) if request.cursor is not None else 0
        except ValueError as exc:
            raise ProviderError("The pagination cursor is invalid.") from exc
        if offset < 0:
            raise ProviderError("The pagination cursor is invalid.")

        end = min(offset + request.limit, len(nodes))
        next_cursor = str(end) if end < len(nodes) else None
        return HierarchyPage(
            nodes=nodes[offset:end],
            next_cursor=next_cursor,
            total_count=len(nodes),
        )
