from __future__ import annotations

import json
import tomllib
from pathlib import Path

ROOT = Path(__file__).parents[1]


def _project(path: Path) -> dict[str, object]:
    with path.open("rb") as source:
        document = tomllib.load(source)
    project = document["project"]
    assert isinstance(project, dict)
    return project


def test_release_versions_and_component_name_are_synchronized() -> None:
    root_project = _project(ROOT / "pyproject.toml")
    component_project = _project(ROOT / "hierarchlit" / "pyproject.toml")
    package = json.loads(
        (ROOT / "hierarchlit" / "frontend" / "package.json").read_text(encoding="utf-8")
    )
    package_lock = json.loads(
        (ROOT / "hierarchlit" / "frontend" / "package-lock.json").read_text(encoding="utf-8")
    )

    assert root_project["name"] == component_project["name"]
    assert {
        root_project["version"],
        component_project["version"],
        package["version"],
        package_lock["version"],
    } == {"0.1.0"}


def test_typed_marker_and_single_frontend_entrypoint_exist() -> None:
    build = ROOT / "hierarchlit" / "frontend" / "build"

    assert (ROOT / "hierarchlit" / "py.typed").is_file()
    assert len(tuple(build.glob("index-*.js"))) == 1
    assert len(tuple(build.glob("styles*.css"))) == 1
