# Final Consolidated Clean Folder

This package implements the approved cleanup decision:

- Keep `ECM_ActivityHub_Portal/`.
- Remove root `htdocs/`.
- Keep `runtime/` as the canonical clean runtime package.
- Keep `design-system/` as the DGO Design System source package.
- Keep `templates/`, `quality/`, `manifests/`, and `docs-root/` as retained non-deployment source/support folders.

## Folder roles

```text
ECM_ActivityHub_Portal/   Approved portal package retained exactly by name.
runtime/                  Canonical clean runtime package retained from the clean runtime source.
design-system/            DGO Design System source, docs, tokens, styles, and assets.
templates/                Operational templates retained as source assets.
quality/                  Tests/tools retained for verification, not production deployment.
manifests/                Retained package manifest records.
docs-root/                Retained root governance/reference documents.
```

## Deployment note

Deploy `ECM_ActivityHub_Portal/` if the ECM portal is the required portal app.
Deploy `runtime/` if the canonical clean runtime is the required app shell.
Do not deploy `quality/`, `docs-root/`, `templates/`, or `manifests/` unless intentionally publishing source/support materials.
