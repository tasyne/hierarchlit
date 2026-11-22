from __future__ import annotations

import pytest

from hierarchlit import (
    HierarchyNode,
    HierarchyPage,
    HierarchyTheme,
    PaginationConfig,
    SelectionRule,
    SelectionToolbarConfig,
    StatusIcon,
)


def test_node_serializes_multiple_status_icons() -> None:
    node = HierarchyNode(
        id="bucket/key",
        label="key",
        status_icons=(
            StatusIcon("database", "Indexed", "info"),
            StatusIcon("lock", "Read only", "warning"),
        ),
        metadata={"size": 42},
    )

    wire = node.to_wire()

    assert wire["statusIcons"] == [
        {"name": "database", "label": "Indexed", "tone": "info"},
        {"name": "lock", "label": "Read only", "tone": "warning"},
    ]
    assert wire["metadata"] == {"size": 42}


def test_page_rejects_duplicate_ids() -> None:
    duplicate = HierarchyNode(id="same", label="Same")
    with pytest.raises(ValueError, match="duplicate"):
        HierarchyPage(nodes=(duplicate, duplicate))


def test_global_selection_rule_and_toolbar_serialize_explicit_scope() -> None:
    rule = SelectionRule(None, selected=True, cascade=True, scope="all")
    toolbar = SelectionToolbarConfig(show_select_all=True, select_all_label="Everything")

    assert rule.to_wire() == {
        "nodeId": None,
        "selected": True,
        "cascade": True,
        "ancestorIds": [],
        "scope": "all",
    }
    assert toolbar.to_wire()["showSelectAll"] is True
    assert toolbar.to_wire()["selectAllLabel"] == "Everything"


def test_theme_serializes_optional_css_color_overrides() -> None:
    theme = HierarchyTheme(
        accent_color="#7c3aed",
        selected_background="color-mix(in srgb, #7c3aed 18%, transparent)",
        success_color="var(--app-success)",
    )

    wire = theme.to_wire()

    assert wire["accentColor"] == "#7c3aed"
    assert wire["selectedBackground"] == "color-mix(in srgb, #7c3aed 18%, transparent)"
    assert wire["successColor"] == "var(--app-success)"
    assert wire["dangerColor"] is None


def test_theme_rejects_css_declaration_breakout() -> None:
    with pytest.raises(ValueError, match="safe CSS color"):
        HierarchyTheme(accent_color="red; display: none")


@pytest.mark.parametrize(
    "kwargs",
    [
        {"page_size": 0},
        {"page_size": 10, "max_browser_nodes": 9},
        {"max_cached_pages": 0},
        {"row_height": 19},
        {"overscan": -1},
    ],
)
def test_pagination_config_rejects_unsafe_bounds(kwargs: dict[str, int]) -> None:
    with pytest.raises(ValueError):
        PaginationConfig(**kwargs)  # type: ignore[arg-type]
