# `ECM_DOCS_DEV.zip` — disposition

**Status: SETTLED.** The archive was removed from the working tree after its irreplaceable
content was extracted. What follows is what was done.

## What was done

Extracted to `docs/reference/`, all verified secret-free before committing:

| Now at | Was |
|---|---|
| `business_requirements_functional_requirements_hybrid.txt` | the BRD/FRD baseline |
| `platform-architecture-pack/` (18 documents) | the governance baseline |
| `sharepoint-provisioning-spec.json` | 10 lists, 97 fields, with SchemaXml |
| `data-model-architecture.md` | the DGCEO data model |
| `flow-contracts/` (14 files) | trigger schemas and full definitions |
| `operations-manifest.json` | the manifest, with 36 signed URLs redacted |

Discarded rather than extracted, with reasons:

- `DGO_Targets_Platform/` — an older copy of this repository, including the retired ECM
  Activity Hub. Superseded in full.
- `Consolidated_Design_System_References/` (14 MB) — already implemented in `styles/`.
- `HTML_OPS_Standard_Email_Templates/` — already implemented in
  `config/correspondence-email-templates.config.js`.
- Flow **run records** — these were where the signed URLs lived. The flow *contracts* were
  kept; the recorded executions were not.

Tracked size went from 20 MB to 3.9 MB. `tests/secret-exposure.test.mjs` and
`tests/check-secrets.mjs` now both assert zero, and both caught the change themselves rather
than needing to be told.

**This revoked nothing.** The blob is still in git history and every signed trigger URL still
works. Rotation is `docs/deployment/MINIMAL-PILOT.md` §3a and remains outstanding.
