"""Verify release versions and packaged frontend assets are synchronized."""

from __future__ import annotations

import json
import tomllib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def _toml(path: Path) -> dict[str, object]:
    with path.open("rb") as source:
        return tomllib.load(source)


def main() -> None:
    project = _toml(ROOT / "pyproject.toml")["project"]
    component = _toml(ROOT / "hierarchlit" / "pyproject.toml")["project"]
    package_json = json.loads(
        (ROOT / "hierarchlit" / "frontend" / "package.json").read_text(encoding="utf-8")
    )
    package_lock = json.loads(
        (ROOT / "hierarchlit" / "frontend" / "package-lock.json").read_text(encoding="utf-8")
    )

    versions = {
        "root pyproject": project["version"],
        "component pyproject": component["version"],
        "frontend package": package_json["version"],
        "frontend lock": package_lock["version"],
    }
    if len(set(versions.values())) != 1:
        details = ", ".join(f"{name}={value}" for name, value in versions.items())
        raise SystemExit(f"Release versions do not match: {details}")
    if component["name"] != project["name"]:
        raise SystemExit("Component and distribution package names do not match")

    build_dir = ROOT / "hierarchlit" / "frontend" / "build"
    javascript = tuple(build_dir.glob("index-*.js"))
    styles = tuple(build_dir.glob("styles*.css"))
    if len(javascript) != 1 or len(styles) != 1:
        raise SystemExit(
            "Frontend build must contain exactly one index-*.js and one styles*.css asset"
        )

    print(f"hierarchlit release metadata is synchronized at {next(iter(versions.values()))}")


if __name__ == "__main__":
    main()
