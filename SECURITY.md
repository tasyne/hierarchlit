# Security policy

## Supported versions

Until the first stable release, security fixes are applied to the latest published
minor release only.

## Reporting a vulnerability

Do not disclose suspected vulnerabilities in a public issue. Use the source
repository's private security-reporting feature. If private reporting is unavailable,
contact the maintainer through the private contact method listed on the package index.

Include the affected version, impact, reproduction steps, and any suggested mitigation.
You should receive an acknowledgement within five business days. Please allow time for
triage and a coordinated fix before public disclosure.

## Scope

Useful reports include unsafe rendering, component bridge state confusion, unintended
provider access, path traversal in published adapters, dependency compromise, and
release-pipeline issues. Application authorization and backend credential management
remain the responsibility of the application integrating `hierarchlit`.
