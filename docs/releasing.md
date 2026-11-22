# Release preparation

Publishing should happen only after CI is green on the intended release commit.

## Prepare

1. Update versions in `pyproject.toml`, `hierarchlit/pyproject.toml`,
   `hierarchlit/frontend/package.json`, and `package-lock.json`.
2. Move changelog entries from `Unreleased` into a dated version section.
3. Run `python scripts/check_versions.py`.
4. Run the full checks in `CONTRIBUTING.md` from a clean checkout.
5. Inspect the wheel and source archive under `dist/`.
6. Install the wheel in a separate environment and run a consumer application.
7. Review dependency audit results and bundled frontend dependency licenses.

## Repository configuration

Before enabling publishing, add the actual repository, documentation, issue tracker,
and changelog URLs to `[project.urls]` in `pyproject.toml`. Add maintainer metadata only
after the maintainer has approved publishing those details.

Protect the release branch and require the CI workflow. Publishing credentials must not
be committed. Use a dedicated protected package-index environment and trusted
publishing with short-lived credentials.

## Tagging

The source tag must be `vX.Y.Z` and match all package versions exactly. Package-index
versions are immutable; never attempt to replace an existing release artifact.
