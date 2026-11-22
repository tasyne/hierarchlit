"""Install the built wheel in an isolated environment and verify packaged assets."""

from __future__ import annotations

import os
import subprocess
import tempfile
import venv
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def _wheel() -> Path:
    wheels = tuple((ROOT / "dist").glob("hierarchlit-*.whl"))
    if len(wheels) != 1:
        raise SystemExit(f"Expected exactly one wheel in dist/, found {len(wheels)}")
    return wheels[0].resolve()


def _environment_python(environment: Path) -> Path:
    if os.name == "nt":
        return environment / "Scripts" / "python.exe"
    return environment / "bin" / "python"


def _verify_archive(wheel: Path) -> None:
    with zipfile.ZipFile(wheel) as archive:
        names = set(archive.namelist())
    required = {
        "hierarchlit/py.typed",
        "hierarchlit/pyproject.toml",
        "hierarchlit/THIRD_PARTY_NOTICES.md",
        "hierarchlit/licenses/Apache-2.0.txt",
        "hierarchlit/licenses/ISC-lucide.txt",
        "hierarchlit/licenses/MIT-react.txt",
        "hierarchlit/licenses/MIT-tanstack.txt",
    }
    missing = required - names
    if missing:
        raise SystemExit(f"Wheel is missing required files: {sorted(missing)}")
    scripts = [name for name in names if name.startswith("hierarchlit/frontend/build/index-")]
    styles = [name for name in names if name == "hierarchlit/frontend/build/styles.css"]
    if len(scripts) != 1 or len(styles) != 1:
        raise SystemExit("Wheel must contain exactly one frontend script and stylesheet")


def main() -> None:
    wheel = _wheel()
    _verify_archive(wheel)

    with tempfile.TemporaryDirectory(prefix="hierarchlit-wheel-") as temporary:
        temp_path = Path(temporary)
        environment = temp_path / "venv"
        venv.EnvBuilder(with_pip=True, system_site_packages=True).create(environment)
        python = _environment_python(environment)
        process_environment = {**os.environ, "PIP_DISABLE_PIP_VERSION_CHECK": "1"}
        subprocess.run(
            [
                str(python),
                "-m",
                "pip",
                "install",
                "--no-deps",
                "--force-reinstall",
                str(wheel),
            ],
            check=True,
            cwd=temp_path,
            env=process_environment,
        )
        smoke_code = """
from importlib.resources import files
from pathlib import Path

import hierarchlit
from hierarchlit import HierarchyNode

package = files("hierarchlit")
assets = tuple((package / "frontend" / "build").iterdir())
assert HierarchyNode(id="smoke", label="Smoke").id == "smoke"
assert any(asset.name.startswith("index-") and asset.name.endswith(".js") for asset in assets)
assert any(asset.name == "styles.css" for asset in assets)
assert Path(hierarchlit.__file__).resolve().is_relative_to(Path(__import__("sys").prefix).resolve())
print(f"installed hierarchlit {hierarchlit.__version__} from {hierarchlit.__file__}")
"""
        subprocess.run(
            [str(python), "-c", smoke_code],
            check=True,
            cwd=temp_path,
            env=process_environment,
        )

    print(f"wheel smoke test passed: {wheel.name}")


if __name__ == "__main__":
    main()
