from __future__ import annotations

import sys
from types import SimpleNamespace
from typing import Any

import pytest

import hierarchlit.component as component
from hierarchlit import (
    HierarchyAction,
    HierarchyNode,
    HierarchyPage,
    HierarchyProvider,
    HierarchyTheme,
    PageRequest,
    PaginationConfig,
    SelectionToolbarConfig,
)


class RecordingProvider(HierarchyProvider):
    def __init__(self) -> None:
        self.requests: list[PageRequest] = []

    def fetch_page(self, request: PageRequest) -> HierarchyPage:
        self.requests.append(request)
        prefix = request.parent_id or "root"
        offset = int(request.cursor or 0)
        nodes = tuple(
            HierarchyNode(id=f"{prefix}:{index}", label=f"Item {index}")
            for index in range(offset, offset + request.limit)
        )
        return HierarchyPage(nodes=nodes, next_cursor=str(offset + request.limit), total_count=100)


@pytest.fixture
def fake_streamlit(monkeypatch: pytest.MonkeyPatch) -> tuple[Any, list[dict[str, Any]]]:
    mounts: list[dict[str, Any]] = []
    fake = SimpleNamespace(session_state={})

    def renderer(**kwargs: Any) -> dict[str, Any]:
        mounts.append(kwargs)
        result = fake.session_state.get(kwargs["key"], kwargs["default"])
        assert isinstance(result, dict)
        return result

    monkeypatch.setitem(sys.modules, "streamlit", fake)
    monkeypatch.setattr(component, "_renderer", renderer)
    return fake, mounts


def test_hierarchy_fetches_only_root_then_requested_branch(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    provider = RecordingProvider()
    config = PaginationConfig(page_size=3, max_browser_nodes=30)

    component.hierarchy(provider, key="tree", pagination=config)
    component.hierarchy(provider, key="tree", pagination=config)
    assert provider.requests == [PageRequest(parent_id=None, cursor=None, limit=3)]

    fake.session_state["tree"] = {
        "selected_ids": [],
        "expanded_ids": ["root:0"],
        "page_request": {
            "requestId": "request-1",
            "parentId": "root:0",
            "cursor": None,
        },
    }
    component.hierarchy(provider, key="tree", pagination=config)

    assert PageRequest(parent_id="root:0", cursor=None, limit=3) in provider.requests
    assert len(provider.requests) == 2
    assert mounts[-1]["data"]["pagination"]["mode"] == "paged"
    assert len(mounts[-1]["data"]["pages"]) == 2


def test_hierarchy_returns_typed_events(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, _ = fake_streamlit
    fake.session_state["tree"] = {
        "selected_ids": ["root:2"],
        "expanded_ids": [],
        "action": {"nodeId": "root:2", "actionId": "delete"},
        "activated": {"nodeId": "root:2"},
    }

    result = component.hierarchy(RecordingProvider(), key="tree")

    assert result.selected_ids == ("root:2",)
    assert result.action is not None and result.action.action_id == "delete"
    assert result.activated is not None and result.activated.node_id == "root:2"


def test_hierarchy_returns_compact_cascading_selection_rules(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    fake.session_state["tree"] = {
        "selection": {
            "rules": [
                {"nodeId": "folder", "selected": True, "cascade": True},
                {"nodeId": "folder/excluded", "selected": False, "cascade": True},
            ]
        },
        "expanded_ids": [],
    }

    result = component.hierarchy(RecordingProvider(), key="tree", selection_mode="multiple")

    assert result.selected_ids == ("folder",)
    assert result.is_selected("folder/child", ("folder",)) is True
    assert result.is_selected("folder/excluded/child", ("folder", "folder/excluded")) is False
    assert mounts[-1]["data"]["cascadeSelection"] is True


def test_empty_selection_rules_do_not_restore_defaults(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    fake.session_state["tree"] = {
        "selection": {"rules": []},
        "expanded_ids": [],
    }

    result = component.hierarchy(
        RecordingProvider(),
        key="tree",
        selection_mode="multiple",
        default_selected=("folder",),
    )

    assert result.selected_ids == ()
    assert result.selection_rules == ()
    assert mounts[-1]["data"]["initialSelectionRules"] == []


def test_theme_is_forwarded_to_frontend(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    _, mounts = fake_streamlit
    theme = HierarchyTheme(accent_color="#7c3aed", success_color="#15803d")

    component.hierarchy(RecordingProvider(), key="tree", theme=theme)

    assert mounts[-1]["data"]["theme"] == theme.to_wire()


def test_selection_toolbar_emits_bulk_action_with_selection_snapshot(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    rules: list[dict[str, object]] = [
        {"nodeId": "folder", "selected": True, "cascade": True},
        {"nodeId": "folder/skip", "selected": False, "cascade": True},
    ]
    fake.session_state["tree"] = {
        "selection": {"rules": rules},
        "selection_action": {
            "requestId": "bulk-1",
            "actionId": "download_selected",
            "rules": rules,
        },
        "expanded_ids": [],
    }
    toolbar = SelectionToolbarConfig(
        actions=(
            HierarchyAction(
                "download_selected",
                "Download ZIP",
                icon="download",
                placement="inline",
            ),
        )
    )

    result = component.hierarchy(
        RecordingProvider(),
        key="tree",
        selection_mode="multiple",
        selection_toolbar=toolbar,
    )

    assert result.selection_action is not None
    assert result.selection_action.action_id == "download_selected"
    assert result.selection_action.selected_ids == ("folder",)
    assert result.selection_action.selection_rules == result.selection_rules
    assert mounts[-1]["data"]["selectionToolbar"] == toolbar.to_wire()


def test_optional_global_selection_rule_round_trips(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    rules: list[dict[str, object]] = [
        {
            "nodeId": None,
            "selected": True,
            "cascade": True,
            "ancestorIds": [],
            "scope": "all",
        }
    ]
    fake.session_state["tree"] = {
        "selection": {"rules": rules},
        "selection_action": {
            "requestId": "bulk-all",
            "actionId": "download_selected",
            "rules": rules,
        },
        "expanded_ids": [],
    }

    result = component.hierarchy(
        RecordingProvider(),
        key="tree",
        selection_mode="multiple",
        selection_toolbar=SelectionToolbarConfig(show_select_all=True),
    )

    assert result.selected_ids == ()
    assert result.selects_all is True
    assert result.is_selected("any-root") is True
    assert result.selection_action is not None
    assert result.selection_action.selects_all is True
    assert mounts[-1]["data"]["selectionToolbar"]["showSelectAll"] is True


def test_select_all_requires_multiple_selection(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    with pytest.raises(ValueError, match="show_select_all"):
        component.hierarchy(
            RecordingProvider(),
            key="tree",
            selection_mode="single",
            selection_toolbar=SelectionToolbarConfig(show_select_all=True),
        )


def test_each_hierarchy_level_has_independent_pages(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    provider = RecordingProvider()
    config = PaginationConfig(page_size=3, max_browser_nodes=30)

    component.hierarchy(provider, key="tree", pagination=config)
    interactions = (
        ("request-1", ["root:0"], "root:0", None),
        ("request-2", ["root:0", "root:0:0"], "root:0:0", None),
        ("request-3", ["root:0", "root:0:0"], "root:0", "3"),
    )
    for request_id, expanded_ids, parent_id, cursor in interactions:
        fake.session_state["tree"] = {
            "expanded_ids": expanded_ids,
            "page_request": {
                "requestId": request_id,
                "parentId": parent_id,
                "cursor": cursor,
            },
        }
        component.hierarchy(provider, key="tree", pagination=config)

    assert PageRequest(parent_id="root:0:0", cursor=None, limit=3) in provider.requests
    assert PageRequest(parent_id="root:0", cursor="3", limit=3) in provider.requests
    pages = mounts[-1]["data"]["pages"]
    assert {(page["parentId"], page["cursor"]) for page in pages} == {
        (None, None),
        ("root:0", "3"),
        ("root:0:0", None),
    }


def test_selection_rerun_preserves_active_root_page(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    provider = RecordingProvider()
    config = PaginationConfig(page_size=3, max_browser_nodes=30)

    component.hierarchy(provider, key="tree", pagination=config)
    fake.session_state["tree"] = {
        "expanded_ids": [],
        "page_request": {
            "requestId": "page-2",
            "parentId": None,
            "cursor": "3",
        },
    }
    component.hierarchy(provider, key="tree", pagination=config)
    requests_before_selection = tuple(provider.requests)

    fake.session_state["tree"] = {
        "expanded_ids": [],
        "selection": {
            "rules": [
                {
                    "nodeId": "root:3",
                    "selected": True,
                    "cascade": False,
                    "ancestorIds": [],
                }
            ]
        },
    }
    component.hierarchy(provider, key="tree", pagination=config)

    assert tuple(provider.requests) == requests_before_selection
    root_pages = [page for page in mounts[-1]["data"]["pages"] if page["parentId"] is None]
    assert [page["cursor"] for page in root_pages] == ["3"]


def test_revision_refresh_preserves_and_refetches_active_root_page(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    provider = RecordingProvider()
    config = PaginationConfig(page_size=3, max_browser_nodes=30)

    component.hierarchy(provider, key="tree", pagination=config, revision=1)
    fake.session_state["tree"] = {
        "expanded_ids": [],
        "page_request": {
            "requestId": "page-2",
            "parentId": None,
            "cursor": "3",
        },
    }
    component.hierarchy(provider, key="tree", pagination=config, revision=1)
    request_count = len(provider.requests)

    component.hierarchy(provider, key="tree", pagination=config, revision=2)

    assert provider.requests[request_count:] == [PageRequest(parent_id=None, cursor="3", limit=3)]
    root_pages = [page for page in mounts[-1]["data"]["pages"] if page["parentId"] is None]
    assert [page["cursor"] for page in root_pages] == ["3"]


def test_load_more_stops_at_browser_cap_without_dropping_loaded_pages(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    fake, mounts = fake_streamlit
    provider = RecordingProvider()
    config = PaginationConfig(
        mode="load_more",
        page_size=3,
        max_cached_pages=4,
        max_browser_nodes=6,
    )

    component.hierarchy(provider, key="tree", pagination=config)
    for request_id, cursor in (("request-1", "3"), ("request-2", "6")):
        fake.session_state["tree"] = {
            "expanded_ids": [],
            "page_request": {
                "requestId": request_id,
                "parentId": None,
                "cursor": cursor,
            },
        }
        component.hierarchy(provider, key="tree", pagination=config)

    payload = mounts[-1]["data"]
    assert [page["cursor"] for page in payload["pages"]] == [None, "3"]
    assert payload["cacheLimited"] is True


def test_callbacks_are_passed_to_streamlit(
    fake_streamlit: tuple[Any, list[dict[str, Any]]],
) -> None:
    _, mounts = fake_streamlit

    def callback() -> None:
        pass

    component.hierarchy(
        RecordingProvider(),
        key="tree",
        on_action=callback,
        on_selection_action=callback,
        on_selection_change=callback,
    )

    assert mounts[-1]["on_action_change"] is callback
    assert mounts[-1]["on_selection_action_change"] is callback
    assert mounts[-1]["on_selection_change"] is callback
