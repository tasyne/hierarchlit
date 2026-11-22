"""Public API for hierarchlit."""

from importlib.metadata import version

from .component import hierarchy
from .models import (
    ActionEvent,
    ActivationEvent,
    HierarchyAction,
    HierarchyNode,
    HierarchyPage,
    HierarchyResult,
    HierarchyTheme,
    PageRequest,
    PaginationConfig,
    SelectionActionEvent,
    SelectionRule,
    SelectionScope,
    SelectionToolbarConfig,
    StatusIcon,
)
from .providers import HierarchyProvider, ProviderError, StaticHierarchyProvider
from .selection import iter_selected_ids

__version__ = version("hierarchlit")

__all__ = [
    "ActionEvent",
    "ActivationEvent",
    "HierarchyAction",
    "HierarchyNode",
    "HierarchyPage",
    "HierarchyProvider",
    "HierarchyResult",
    "HierarchyTheme",
    "PageRequest",
    "PaginationConfig",
    "ProviderError",
    "SelectionActionEvent",
    "SelectionRule",
    "SelectionScope",
    "SelectionToolbarConfig",
    "StaticHierarchyProvider",
    "StatusIcon",
    "__version__",
    "hierarchy",
    "iter_selected_ids",
]
