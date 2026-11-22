"""Verify Streamlit discovers the packaged v2 component and its entry assets."""

from __future__ import annotations

from streamlit.components.v2.component_manager import BidiComponentManager


def main() -> None:
    manager = BidiComponentManager()
    manager.discover_and_register_components()
    asset_root = manager.get_component_asset_root("hierarchlit.hierarchy")
    if asset_root is None:
        raise SystemExit("Streamlit did not discover hierarchlit.hierarchy")

    scripts = tuple(asset_root.glob("index-*.js"))
    styles = tuple(asset_root.glob("styles*.css"))
    if len(scripts) != 1 or len(styles) != 1:
        raise SystemExit("Streamlit component assets are incomplete or ambiguous")
    print(f"Streamlit discovered hierarchlit.hierarchy at {asset_root}")


if __name__ == "__main__":
    main()
