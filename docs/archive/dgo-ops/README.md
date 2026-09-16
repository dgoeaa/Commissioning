# DGO_OPS Repository

## Structure

This repository was restructured on 2026-07-30 by extracting and flattening two ZIP archives.

### Archives processed

| Archive | Files | Notes |
|---|---|---|
| `upload to git.zip` | 442 files | Top-level `upload to git/` wrapper stripped; contents placed at repo root |
| `Leanest operational package ZIP.zip` | 55 files | `ECM_ActivityHub_Portal/htdocs/` identical to `upload to git.zip`; only unique `MANIFEST` and `VERIFICATION` retained |

### Flattening decisions

- **`ECM_ActivityHub_Portal/ECM_ActivityHub_Portal/`** — redundant nested wrapper removed; `aud_activityhubp_20260728_151904/` and `precision_auditor_v3.py` moved up into `ECM_ActivityHub_Portal/`. The inner `htdocs/` (older/smaller version) was discarded in favour of the outer `htdocs/` which matches the curated leanest package.
- **`Document_submission portals/Document_submission portals/`** — empty nested directory; both levels removed.

### File collisions resolved

| File | Decision |
|---|---|
| `Complete full-content JSON state file.json` | Overwritten with the version from `upload to git.zip` (newer content) |
| `VERIFICATION.json` | Kept from `upload to git.zip`; leanest-package version saved as `VERIFICATION.leanest.json` |
| `MANIFEST.sha256.json` | Kept from `upload to git.zip`; leanest-package version saved as `MANIFEST.leanest.sha256.json` |

### Root directories

```
ECM_ActivityHub_Portal/   ECM Activity Hub portal app
design-system/            DGO Design System source, docs, tokens, styles, assets
digitaldocs.page.gd/      DigitalDocs public site (htdocs)
docs-root/                Governance and reference documents
intelhub.page.gd/         IntelHub public site (htdocs)
manifests/                Package manifest records
runtime/                  Canonical clean runtime package
templates/                Operational Power Automate / email templates
```
