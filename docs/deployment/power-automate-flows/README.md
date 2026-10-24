# Portal flow designs

The seven `NN-*.flow.json` files here are the **designs** for the document-portal endpoints —
what each flow was specified to do. They are not what is deployed. The deployed flows carry
different names (`Portal_UBMISSION_ECM_DOCS`, `Portal_Verify`, and so on) and are exported to
[`docs/reference/flow-contracts/deployed/`](../../reference/flow-contracts/deployed/).

| # | Design file | Endpoint | Deployed as |
|---|---|---|---|
| 1 | `01-portal-submission.flow.json` | SUBMISSION | `Portal_UBMISSION_ECM_DOCS`, `SUBMISSION_ECM_DOCS_PORTAL` |
| 2 | `02-portal-upload.flow.json` | UPLOAD | `Portal_UPLOAD_ECM_DOCS`, `UPLOAD_ECM_DOCS_PORTAL`, `Portal_Upload_HTTP` |
| 3 | `03-portal-support.flow.json` | SUPPORT | `Portal_ECM_DOCS_SUPPORT` |
| 4 | `04-portal-verify-request.flow.json` | VERIFY | `Portal_Verify` |
| 5 | `05-portal-verify-confirm.flow.json` | VERIFY_CONFIRM | `Portal_Verify_Confirm` |
| 6 | `06-portal-status.flow.json` | STATUS | `Portal_ECM_DOCS_STATUS`, `Portal_Status_Enquiry` |
| 7 | `07-portal-provisioning.flow.json` | — | provisioning helper, superseded (below) |

Each file holds `definition`, `connectionReferences`, `allConnectionData` and `staticResults`.
The `definition` key is the complete Logic App definition.

---

## How flows are changed now

**Not by hand, and not by pasting.** Both routes are gone:

- The `paste/` and `codeview/` renderings were removed — `codeview/` was byte-identical to each
  `.flow.json`'s `definition`, and `paste/` served a designer-clipboard route that
  [`PLAN.md`](../sharepoint/remediation/PLAN.md) retired after it proved to be a twenty-hour
  path in which mistakes surface one export later.
- Legacy package import cannot **update** these flows. It offers only "save as a new flow",
  which mints a new trigger URL and breaks the portal's config.

The current route is:

1. `scripts/export-power-automate-flows.ps1` — read the deployed definition.
2. `scripts/patch-flow-package.mjs` — apply the remediation artifact to it.
3. `node scripts/verify-portal-wiring.mjs <dir>` — confirm the result **before** the tenant is
   touched.
4. `scripts/update-flow-definition.ps1` — PATCH it back, the same call the designer makes on
   Save. The flow keeps its id, trigger URL, owners, run history and connections.

What each flow must end up doing is specified in
[`docs/deployment/sharepoint/remediation/`](../sharepoint/remediation/), and the end-to-end
structures are in [`FLOW_STRUCTURES.md`](../sharepoint/FLOW_STRUCTURES.md).

---

## Superseded here

- **`sharepoint-lists.json`** (specVersion 1.0) — superseded by
  [`portal-field-spec.json`](../sharepoint/portal-field-spec.json) v2.0.0, which addresses lists
  by GUID rather than by title and is the specification the 97/97 provisioning run used. The file
  is kept because a test uses it to prove the portal and governance estates share no list title.
- **`07-portal-provisioning.flow.json`** — provisioned columns from inside a flow. Superseded by
  `scripts/provision-sharepoint-fields.ps1`, which did the run on 2026-08-19. Kept as the record
  of the approach.
- **`scripts/setup-sharepoint-portal.ps1`** — removed. It read the v1.0 specification and was
  replaced by `scripts/provision-sharepoint-fields.ps1`.
