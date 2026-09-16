# DGO Cleaned Repository Package

Generated: 2026-07-30T18:41:07.849457+00:00

This package applies the holistic cleanup policy requested for the attached repository state. It keeps a canonical runtime, design-system source, operational templates, and quality verification assets while excluding duplicate htdocs deployments, forensic state dumps, generated standalone HTML, stale reports, previews, UI kits, build artifacts, backups, caches, and obsolete auditor outputs.

## Folders

- `runtime/` - canonical browser/static runtime package.
- `design-system/` - canonical DGO Design System source, docs, tokens, styles, assets, and retained legacy-v1 reference assets.
- `templates/` - operational Power Automate/email templates retained as source assets.
- `quality/` - retained tests/tools for verification, excluded from runtime deploy.
- `manifests/` - retained cleanup/package manifests.
- `docs-root/` - root governance/reference documents retained from source.

## Deployment

Deploy only `runtime/` for production/static hosting. Do not deploy `quality/`, `docs-root/`, `templates/`, `manifests/`, or `design-system/` unless intentionally publishing source/docs.

## Verification

Integrity was checked by recomputing SHA-256 and byte lengths for every file written to this package. See `MANIFEST.sha256.json` and `CLEANUP_REPORT.json`.
