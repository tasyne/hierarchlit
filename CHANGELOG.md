# Changelog

All notable changes to `hierarchlit` are documented here. The project follows
[Semantic Versioning](https://semver.org/) and uses the structure from
[Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added

- Streamlit v2 React component for compact, virtualized hierarchy browsing.
- Provider-neutral lazy expansion and cursor pagination at every hierarchy level.
- Bounded browser and Python page caches for large result sets.
- Single, multiple, cascading, and global selection with lazy rule resolution.
- Configurable per-item and bulk actions, status icons, and theme colors.
- Lazy iteration of selection rules for backend bulk operations.
- Typed Python contracts and a packaged, production-optimized frontend bundle.

## Release checklist

Before cutting a release, move the relevant entries from `Unreleased` into a dated
version section, update both package version files, and create the matching `vX.Y.Z`
source-control tag.
