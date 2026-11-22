# Contributing to hierarchlit

Thank you for helping improve `hierarchlit`.

## Development setup

The Python package requires Python 3.11 or newer. Frontend development uses the Node
version documented by the current Streamlit v2 component tooling.

```bash
python -m venv .venv
.venv/bin/pip install -e '.[dev]'

cd hierarchlit/frontend
npm ci
npm run build
cd ../..
```

On Windows, replace `.venv/bin` with `.venv\Scripts`.

The compiled frontend is committed because it is part of the distributable Python
wheel. After changing `hierarchlit/frontend/src`, run `npm run build` and include the
updated `frontend/build` files in the same change.

## Required checks

Run these before submitting a change:

```bash
cd hierarchlit/frontend
npm test
npm audit --omit=dev --audit-level=high
npm run build

cd ../..
.venv/bin/ruff format --check .
.venv/bin/ruff check .
.venv/bin/mypy hierarchlit tests
.venv/bin/pytest
.venv/bin/python scripts/check_component_registry.py
.venv/bin/python -m build
.venv/bin/python -m twine check dist/*
.venv/bin/check-wheel-contents dist/*.whl
.venv/bin/python scripts/smoke_test_wheel.py
```

## Design expectations

- Preserve stable, globally unique node IDs.
- Keep provider work bounded by `PageRequest.limit`.
- Do not eagerly materialize a lazy selection or send full result sets to the browser.
- Keep wire contracts JSON-compatible and backward-compatible where practical.
- Add Python tests for backend contracts and frontend tests for view-state behavior.
- Treat accessibility, keyboard use, light/dark themes, and reduced motion as required.

## Releases

Release versions must match in the root `pyproject.toml`,
`hierarchlit/pyproject.toml`, and `hierarchlit/frontend/package.json`. Run
`python scripts/check_versions.py` before tagging. Publishing is performed from a
reviewed release workflow; contributors should never commit registry credentials.
