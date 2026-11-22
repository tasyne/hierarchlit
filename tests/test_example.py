from __future__ import annotations

from pathlib import Path

from streamlit.testing.v1 import AppTest


def test_example_registers_component_without_python_errors() -> None:
    example = Path(__file__).parents[1] / "examples" / "app.py"

    app = AppTest.from_file(str(example)).run(timeout=20)

    assert not app.exception
