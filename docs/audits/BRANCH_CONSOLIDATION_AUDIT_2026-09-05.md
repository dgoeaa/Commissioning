# Branch consolidation audit — the five most recently updated branches

*Extended 5 September 2026 to a sixth branch under closure action R-7; see §12–16.*

**Audit date:** 5 September 2026
**Repository:** `dgoeaa/ECM_DOCS_DEV`
**Scope as commissioned:** the 5 most recently updated accessible branches, consolidated into one version
**Scope as extended (§12–16):** `claude/platform-flows-endpoints-docs-plxjlw`, added under closure action R-7 — **6 of 27 branches**
**Consolidated output:** branch `claude/ecm-docs-branch-audit-c0sisf`
**Baseline:** `main` @ `63d79ee`
**Evidence boundary:** this repository only. No other repository was read, cloned, or queried. Nothing below is sourced from outside the branches named.

Every conclusion carries one of five classifications, used exactly as commissioned:
**Confirmed** (established by repository evidence or by a validation actually run),
**Strong inference** (consistent repository evidence, not directly demonstrated),
**Unverified** (not provable from this repository),
**Contradicted** (conflicting evidence prevents a reliable conclusion),
**Not applicable** (outside the approved scope, with the reason given).

---

## 1. Complete branch inventory

27 branches exist. All 27 are accessible: the GitHub branch listing and a local
`git fetch --all` return the same 27 names and the same 27 tip SHAs, so the inventory is
complete and neither source holds a branch the other does not. **Confirmed.**

Committer date and author date are identical on every branch tip, so "most recently updated"
is not ambiguous between the two. **Confirmed.**

`AHEAD`/`BEHIND` are relative to `main` @ `63d79ee`. `FILES` counts tracked files at the tip.

### 1.1 In scope — the five most recently updated

| # | Branch | Tip | Updated (UTC) | Ahead | Behind | Files | Assessed |
|---|---|---|---|---|---|---|---|
| 1 | `claude/sharepoint-lists-gap-bqo7j7` | `3657e0a4` | 2026-09-04 23:31:46 | 193 | 0 | 1080 | Yes — tree diff, 70-stage run, per-file blob comparison |
| 2 | `claude/fetchall-flow-error-1h94u5` | `5d922bea` | 2026-09-04 21:24:21 | 185 | 0 | 1049 | Yes — same |
| 3 | `claude/system-remediation-gaps-ahpmsy` | `0e42f8c8` | 2026-09-04 21:12:24 | 180 | 0 | 1055 | Yes — same |
| 4 | `claude/operational-parameters-audit-nieb71` | `e03fbc5f` | 2026-09-04 06:28:32 | 2 | 0 | 681 | Yes — same |
| 5 | `claude/tool-review-errors-rofllx` | `d8429cd3` | 2026-09-02 23:38:31 | 172 | 0 | 1061 | Yes — same |

Referred to below as **S**, **F**, **R**, **O**, **T** in that order.

**Every one of the five is 0 commits behind `main`.** `main`'s tip is an ancestor of all five,
so this consolidation is a merge, not a reconstruction, and no branch had to be rebased or
replayed. **Confirmed** — `git merge-base origin/main origin/<branch>` returns `63d79ee` for
all five.

### 1.2 Out of scope — the remaining 22

Accessible, inventoried, **not assessed**. **Not applicable** — outside the commissioned scope
of five. Listed so the inventory is complete and so the scope boundary is auditable.

| Branch | Tip | Updated (UTC) | Ahead | Behind | Files |
|---|---|---|---|---|---|
| `claude/platform-flows-endpoints-docs-plxjlw` | `1cd896d4` | 2026-09-02 23:36:59 | 169 | 0 | 1157 |
| `claude/system-notifications-provisioning-h5h1gy` | `095b8672` | 2026-09-02 09:19:55 | 153 | 0 | 1059 |
| `claude/sharepoint-lists-gap-docs-hyoup8` | `de925d75` | 2026-08-31 01:52:49 | 4 | 0 | 679 |
| `claude/ecm-docs-cleanup-3vhb6g` | `72b84866` | 2026-08-30 23:14:55 | 96 | 0 | 975 |
| `claude/power-automate-internal-flows-snrmx2` | `6653ce95` | 2026-08-25 01:37:55 | 2 | 0 | 757 |
| `claude/ecm-docs-dev-cleanup-v2h35g` | `8bd420a0` | 2026-08-22 22:05:53 | 2 | 0 | 563 |
| `claude/power-automate-execution-flow-xihaj6` | `71fd23a6` | 2026-08-20 22:42:11 | 2 | 0 | 683 |
| `claude/visual-docs-consolidation-r6w3el` | `2ccb994f` | 2026-08-20 22:37:45 | 4 | 0 | 691 |
| `claude/docs-portal-live-ops-comments-maavhp` | `9f82aa91` | 2026-08-18 02:10:49 | 15 | 1 | 700 |
| `main` | `63d79eea` | 2026-08-16 04:45:43 | 0 | 0 | 679 |
| `claude/power-automate-actions-review-kjpsna` | `3c232ece` | 2026-08-11 17:06:26 | 1 | 74 | 687 |
| `claude/platform-visual-architecture-4zffpk` | `4d3a3313` | 2026-08-10 22:30:29 | 1 | 5 | 674 |
| `claude/document-portal-automate-flows-30o4xd` | `503214e4` | 2026-08-10 00:46:37 | 1 | 5 | 674 |
| `production-baseline` | `5cbae7e7` | 2026-08-09 22:07:48 | 0 | 8 | 674 |
| `claude/power-automate-portal-flows-tvjvl3` | `4d3801f8` | 2026-08-09 20:20:31 | 0 | 25 | 703 |
| `claude/internal-platform-ui-bafs4t` | `481f34b3` | 2026-08-09 19:23:53 | 0 | 26 | 684 |
| `claude/auth-rbac-config-guide-12jmb3` | `3454539c` | 2026-08-09 04:22:12 | 0 | 67 | 685 |
| `claude/internal-platform-ui-redesign-7hjohv` | `01ad5cb1` | 2026-08-09 02:49:19 | 0 | 129 | 682 |
| `claude/portal-live-pilot-ops-i8mbh4` | `29c4d387` | 2026-08-08 02:46:43 | 0 | 74 | 642 |
| `claude/repo-cleanup-vpe880` | `31f5a948` | 2026-08-08 00:32:15 | 0 | 74 | 675 |
| `claude/audit-report-validation-xda9gm` | `7ad3bb66` | 2026-08-07 21:57:40 | 0 | 76 | 677 |
| `claude/ecm-docs-dev-audit-ysyy2v` | `ca09f56a` | 2026-08-07 05:28:37 | 0 | 90 | 666 |

> **Read the scope boundary before relying on it.** The cut between the 5th branch (**T**,
> 2026-09-02 23:38:31) and the 6th (`claude/platform-flows-endpoints-docs-plxjlw`,
> 2026-09-02 23:36:59) is **92 seconds**. The 6th branch carries 169 commits and 1157 tracked
> files — more files than any branch consolidated here. Nothing about "five" is a natural
> boundary in this repository's history; it is the number commissioned. See §9.

---

## 2. Branch comparison and difference register

### 2.1 The shared spine, established once

The four large branches are not four independent bodies of work. They share a single
ancestry, and this is what makes it legitimate to analyse the shared content once rather than
four times:

```
main 63d79ee ──162 commits──▶ ce60d6b ──6 commits──▶ 2fde2fb ──┬──25──▶ S 3657e0a
                                   │                           ├──17──▶ F 5d922be
                                   │                           └───4──▶ T d8429cd
                                   └──18──▶ R 0e42f8c

main 63d79ee ───2 commits──▶ O e03fbc5      (shares nothing with the other four)
```

**Confirmed**, and the arithmetic closes on every path independently:
S 193 = 162+6+25 · F 185 = 162+6+17 · T 172 = 162+6+4 · R 180 = 162+18.
`git merge-base --is-ancestor ce60d6b 2fde2fb` returns true.

**Comparison method used throughout, and the basis for not re-analysing identical content.**
Every tracked path in all six trees (`main`, S, F, R, O, T) was reduced to its git blob SHA
and compared as a matrix — 1,145 distinct paths across the six trees. Two paths with the same blob SHA are
byte-identical; this is an identity check, not a similarity heuristic, so "identical across
branches" is decided rather than judged. Where a path is identical, the analysis of it applies
to every branch holding that blob, and the matrix records which branches those are.

**Result over the four large branches (S, F, R, T):**

| Classification | Paths |
|---|---|
| Present in all four, byte-identical in all four | **848** |
| Present in all four, 2 distinct variants | 112 |
| Present in all four, 3 distinct variants | 76 |
| Present in all four, 4 distinct variants | 5 |
| Present in 1 of 4 (branch-unique addition) | 61 |
| Present in 3 of 4 | 6 |
| Present in 2 of 4 | 1 |
| Absent from all four (present in `main` or O only) | 36 |

848 of the 1,145 paths were therefore analysed once and the finding applied to four branches on
proof of identity. **Confirmed.** No branch-specific configuration, metadata or dependency
difference affects that: `devDependencies` is byte-identical across all five branches and
`main` (`@playwright/test ^1.48.0`, `http-server ^14.1.1`, `linkinator ^8.0.3`,
`puppeteer-core ^25.4.0`), so one dependency tree serves every branch and identical source
cannot behave differently between them for dependency reasons. **Confirmed.**

### 2.2 Who actually changed what

Blob identity alone does not say which branch *acted*. Each branch's tip was therefore
compared against **its own fork point** — `2fde2fb` for S, F and T; `ce60d6b` for R — so that
"differs" is separated from "changed". 261 paths differ across S/F/R/T. Their attribution:

| S | F | R | T | Paths | Meaning |
|---|---|---|---|---|---|
| MOD | · | MOD | · | 72 | S and R both changed it — the adjudication set |
| · | · | MOD | · | 59 | R only |
| NEW | · | · | · | 32 | S only, new file |
| · | · | · | · | 24 | **Nobody changed it.** The 6 spine commits `ce60d6b..2fde2fb` did; R forked before them |
| · | MOD | · | · | 19 | F only |
| · | · | · | NEW | 14 | T only, new file — all of `tools/flow-workbench/` |
| MOD | · | · | · | 13 | S only |
| · | · | NEW | · | 13 | R only, new file |
| MOD | MOD | MOD | · | 5 | Three-way |
| MOD | MOD | · | · | 4 | S and F |
| · | NEW | · | · | 2 | F only, new file |
| · | MOD | MOD | · | 1 | F and R |
| NEW | · | NEW | · | 1 | S and R independently created `docs/process/detail/PROC-089.md` |
| · | · | · | MOD | 1 | T only — `.gitignore` |
| · | · | DEL | · | 1 | R deleted it — see §6.3 |

`·` = byte-identical to that branch's own fork point.

**The 24 "nobody changed it" paths are not a conflict.** They differ only because R forked at
`ce60d6b`, before six spine commits that S, F and T all carry. On every one of those paths R
holds the older content and S/F/T hold the newer, and no branch competes with the spine.
**Confirmed** — `git log ce60d6b..2fde2fb -- <path>` names the changing commit for all 24;
they are `4049435` (17 paths), `339b405` (3), `ad8fd9f` (2), `2fde2fb` (1), `010f752`+`a36f596` (1) — 24 in all.
Among them are `.github/workflows/ci.yml`, `CONTRIBUTING.md`, `core/acknowledgement-service.js`,
`core/dispatch-service.js`, `scripts/check-links.mjs`, `scripts/patch-otp-verify.mjs` and eight
test files plus `tests/README.md`. **Selection: the spine value (S/F/T) on all 24.**

### 2.3 Branch-unique capability

| Branch | Unique to it | What it is |
|---|---|---|
| **S** | 7 scripts, 6 tests, `docs/deployment/rotation/` | The OTP verify rebuild kit and browser patcher (`build-otp-verify-fresh-flow.mjs`, `build-otp-verify-browser-patch.mjs`, `apply-otp-verify-patch.browser.js`, `otp-cutover-tests.browser.js`), the rotation worksheet generator (`build-rotation-worksheet.mjs`), `run-pending.mjs`, `portal-seo.mjs`, and 7 test stages |
| **F** | `diagnose-designer-paste.mjs`, `verify-deployed-package.browser.js` | Tenant-sourced workflow-id resolution: 18 of 18 internal keys named to a flow, and the flow-id/workflow-id distinction written into `build-endpoint-workflow-ids.mjs` |
| **R** | `verify-contract-key-implementation.mjs` + `test:keyimpl`, 13 new files | Contract-key implementation verification, the `IP_SCAN_INTAKE` build, five 2026-09-03 re-exports, the portal-mapping withdrawal |
| **T** | `tools/flow-workbench/` (14 files) | A standalone Flow Operations Workbench, packaged for Termux/Android shells |
| **O** | 2 documents | An operational-parameters audit and a commissioning walkthrough, plus a standing credential-exposure finding |

### 2.4 Test-suite capability, measured by running it

Each branch's own non-browser chain was run in an isolated worktree against a shared,
identical dependency tree. **Confirmed** — these are executions, not readings.

| Branch | Entry point | Stages | Result |
|---|---|---|---|
| S | `test:node` | 69 | **PASS**, exit 0 |
| F | `test:node` | 62 | **PASS**, exit 0 |
| R | `test` (no `test:node` split exists on this branch) minus `test:smoke` | 62 | **PASS**, exit 0 |
| T | `test:node` | 62 | **FAIL**, exit 1 — `tests/references.test.mjs`, 4 broken references in `tools/flow-workbench/index.html` |
| O | `test` minus `test:smoke` | 29 | **PASS**, exit 0 (`main`'s suite; O adds no stage) |

61 stages are common to S, F, R and T. S adds 7 (`test:cascade`, `test:freshflow`,
`test:otpdeployed`, `test:otppatch`, `test:otpprotocol`, `test:pendingplan`, `test:rotation`).
R adds 1 (`test:keyimpl`). `test:ackactor` is on S, F and T but not R — it arrives with spine
commit `ad8fd9f`. F and T add no unique stage. Union: **70**.

**T's failure is real and reproduces in isolation**, before any merge. It is not a merge
artefact. Diagnosis and fix in §7.1.

---

## 3. Component-selection decision register

No component was selected for being newer, larger, on the active branch, or on a branch
labelled production. Two of the decisions below go **against** the newest branch.

| # | Component | Selected | Rejected | Evidence that decided it | Class |
|---|---|---|---|---|---|
| D1 | 24 spine-only paths (§2.2) | S/F/T value | R value | R forked at `ce60d6b`, before the 6 commits that changed them; R did not touch any of the 24, so there is no competing implementation — only an older one | Confirmed |
| D2 | OTP topology in the register, `config/endpoints.config.js`, `config/config.example.js`, `scripts/lib/endpoint-surface.mjs` | **S** — two flows | F — one flow `OTP_ENDPOINT` at `b372d45e…` | S's model is backed by a committed tenant export in the tree (`IP_OTP_VERIFY__c5e314c7-…__full_definition.json`, `workflow_identity.internal_name c5e314c7-…`, `full_resource_id` flow `4dbe6dde-…`). F's `b372d45e…` appears in **no committed flow definition on either branch** — its provenance is an operator-supplied name-to-id map plus an id read from a trigger URL | **Contradicted** — see §7.2 |
| D3 | OTP wire protocol (`core/otp-identity.js`, `core/api.js`, `core/security-actions.js`, `document-portal/js/submit.js`) | **S** — `action: "generate"/"verify"`, `flatPayload` | F — `"otpGenerate"/"otpVerify"`, nested | S's `c314ec9` read both deployed definitions and found each switches on `generate`/`verify` and reads `identifier`/`otp_code` at top level; the client was the outlier. S added `test:otpprotocol`, which reads the deployed definitions and checks what the client puts on the wire against what each flow takes off it — a standing gate, not an assertion | Confirmed (against the committed definitions; the live call has never been made — see §10 R-3) |
| D4 | `SCAN_INTAKE` register row | **R** | F | R attaches the tenant export of `IP_SCAN_INTAKE` (`5504d7f9-…`), the flow that reads the `X-DGO-Filename`/`X-DGO-Sha256`/`X-DGO-Size` headers `depositScan` sends, and gates it with `test:keyimpl`. F's row still attached `ECM_DOCS_INTAKE__df7ddff1-…`, which R proved is a different flow — a POST tenant-authenticated Portal Registry feed reading no `X-DGO-*` header. **This selection goes against the newer branch.** F's id `88401ce1…` is kept as `workflowIdCandidateUnverified`, not promoted into `workflowId` | Confirmed for the definition; the id is Unverified (§7.3) |
| D5 | Open item 37 (`docs/deployment/sharepoint/OPEN_ITEMS.md`) | **R**'s withdrawal | S's 2026-09-01 measurement | R's `ff980b1` re-exported five endpoints on 2026-09-03 and found the 2026-08-24 `CG_Upload_Endpoint` capture carried **`ECM_DOCS_INTAKE`'s workflow id stamped on `CG_Upload_Endpoint`'s definition**. S's item 37 ("zero Portal Registry operations") was measured from that corrupted file. Items 38–41 have no counterpart on R and are retained — the resolution is a union, not a substitution. **Against the newer branch** | Confirmed |
| D6 | `scripts/build-internal-designer-paste.mjs` | **Both** | — | The single conflict hunk tangled two independent changes: S's OTP action rename and R's new `DGO_SCAN_INTAKE` row plus its comment. Not a conflict; both are kept | Confirmed |
| D7 | `package.json` test chain | **HEAD structure + R's stage** | either alone | The `test:node`/`test:smoke` split is spine commit `4049435` ("the gate was red on this branch and nothing on a push ever ran it"), which R lacks. R's `test:keyimpl` is unique to R. Union: 70 stages, every one with a script definition | Confirmed — verified programmatically, 0 stages undefined |
| D8 | Every non-OTP internal workflow id | **F** | S/R older corpus values | F's `2921b1c` established that a Power Automate flow carries two identifiers and that this field holds the trigger-URL id, proved by `EMAIL_RELATED_TASK` matching the operator's live URL exactly and by `IP_FETCH_ALL_ENDPOINT` (flow id `b79e6707…`, trigger-URL id `aa662769…`, one flow). The four ids previously read from export definitions moved to a new `flowId` field | Strong inference — the map is operator-supplied and not independently checkable here (§7.4) |
| D9 | `docs/deployment/PRODUCTION_READINESS_REGISTER.json` steps (3 hunks) | **S** | R | S's steps point at `docs/deployment/rotation/ROTATION.md`, a generated worklist present in the tree. R's step text restates the item's own `requirements[]` array, and its claim that "setup exits 0 having changed nothing" is contradicted by R's own later fix `9e86cf5`, which is merged: `scripts/setup.mjs` now exits 2 and names `--force` | Confirmed |
| D10 | `tools/flow-workbench/` | **T**, admitted whole | — | Sole source; no competing implementation. Admitted only after the gate failure it caused was diagnosed as a checker defect rather than a defect in the workbench (§7.1) | Confirmed |
| D11 | O's two documents | **Kept, annotated** | deletion; relocation | Unique standing content (§6.4). No gate governs repository-root contents, so relocation would be preference, not evidence | Confirmed |
| D12 | All generated artefacts (68 `docs/process/**` + 8 registers) | **Regenerated** | either branch's bytes | Each is produced by a named script and guarded by a `--check` stage. Choosing a side would have been arbitrary; regeneration is decidable and checkable | Confirmed |

---

## 4. Source-to-output traceability map

The consolidated tree holds **1,112 tracked files**. Every one was traced back to a source by
blob SHA:

| Origin | Files |
|---|---|
| Byte-identical in 4 or more sources | 847 |
| Byte-identical to **R** alone | 69 |
| Byte-identical to **S** alone | 44 |
| Byte-identical to **S, F and T** (spine value; R behind) | 23 |
| Byte-identical to **F** alone | 21 |
| Byte-identical to **T** alone | 15 |
| **New in consolidation** | 93 |

1,019 of 1,112 files (91.6%) are byte-identical to at least one audited branch tip.
**Confirmed.**

The 93 new files are fully enumerated, with nothing unaccounted:

| Count | What | Why not byte-identical to a source |
|---|---|---|
| 79 | `docs/process/**` (44), the 6 generated registers, `docs/reference/FLOW_CATALOGUE.md`, `docs/visual/platform-data.js`, `docs/deployment/rotation/` (3), `docs/deployment/EXECUTION_RUNBOOK.md`, `DGO_OTP.designer-paste.json`, `DGO_SCAN_INTAKE.variables.md` | **Regenerated** from merged inputs (D12). Each has a `--check` stage; all pass |
| 5 | `README.md`, `docs/deployment/EXECUTION_GUIDE.md`, `docs/deployment/OPERATOR_WALKTHROUGH.md`, `docs/deployment/sharepoint/LISTS.md`, `docs/reference/process-inventory.json` | Clean three-way merges git resolved with no conflict |
| 3 | `config/config.example.js`, `docs/deployment/PRODUCTION_READINESS_REGISTER.json`, `docs/deployment/sharepoint/OPEN_ITEMS.md` | Adjudicated conflicts — D2, D9, D5 |
| 2 | `OPERATIONAL_PARAMETERS_AUDIT.md`, `COMMISSIONING_WALKTHROUGH.md` | O's files, plus the consolidation provenance note (D11) |
| 1 | `package.json` | Union of two test chains — D7 |
| 1 | `scripts/build-internal-designer-paste.mjs` | Both sides kept — D6 |
| 2 | `tests/references.test.mjs`, `tests/pending-plan.test.mjs` | Gate defects fixed — §7.1, §7.5 |

Note that `docs/reference/internal-flow-register.json`, `endpoint-workflow-ids.json`,
`flow-list-map.json` and `flow-trigger-auth.json` are counted in the 79 because they were
regenerated last; the register itself was first merged semantically (§7.3).

---

## 5. The consolidated version

Branch `claude/ecm-docs-branch-audit-c0sisf`, built from `main` @ `63d79ee` by five
`--no-ff` merges in this order: **S → T → F → R → O**. Each merge commit names its source
branch and tip SHA, so the output is traceable to source branch, commit and file throughout.

**The original repository state is preserved.** None of the five source branches was
modified, deleted, renamed, or force-pushed; `main` is untouched. All five tips are still at
the SHAs recorded in §1.1. **Confirmed.**

| Merge | Conflicts | Disposition |
|---|---|---|
| S | 0 (fast-forward) | — |
| T | 0 | `tools/flow-workbench/` (14 files) + `.gitignore` + `package.json`, auto-merged |
| F | 7 | 3 adjudicated (D2), 4 generated → regenerated |
| R | 72 | 60 `docs/process/**` + 8 generated → regenerated; 4 adjudicated (D5, D6, D7, D9); the register merged semantically (§7.3) |
| O | 0 | 2 new files |

---

## 6. Duplicate, stale, superseded and excluded-content register

36 paths present in `main` are absent from all four large branches. Every one was traced to
the commit that removed it and the removal independently verified — the commit message was
treated as a claim to check, not as evidence.

### 6.1 Five root files — relocated, not deleted. **No content lost.**

| `main` path | Now at | Verification |
|---|---|---|
| `Design audit brief - AI input.md` | `docs/audits/design-audit-brief/ai-input.md` | blob `cd0e4f3d` — **identical** |
| `Design audit brief - integrity manifest.json` | `docs/audits/design-audit-brief/integrity-manifest.json` | blob `82aaacea` — **identical** |
| `Design audit brief - verification report.txt` | `docs/audits/design-audit-brief/verification-report.txt` | blob `49ef91d2` — **identical** |
| `DOCUMENTS_PORTAL_transcript_…-mskul63e.json` | `docs/reference/flow-contracts/transcripts/` | blob `64122a38` — **identical** |
| `INTERNAL_PLATFORM-transcript_probe-mskv094z.json` | `docs/reference/flow-contracts/transcripts/` | blob `afe4df67` — **identical** |

Removed by `3683941`. **Confirmed** by blob-SHA equality at old and new paths.

### 6.2 Duplicates and superseded artefacts — `ec66bc7`

| Content | Count | Verification | Class |
|---|---|---|---|
| `docs/reference/flow-contracts/*` duplicates and one `run-records/trigger_schema.json` | 15 | **Every one** of the 15 `main` blobs is still present in the consolidated tree under another path, checked by blob SHA against the full tree blob set | Confirmed |
| `docs/deployment/power-automate-flows/codeview/*.definition.json` | 7 | Each parsed and compared to the `definition` key of its sibling `.flow.json`: **7 of 7 semantically equal**. The commit's claim was checked, not accepted | Confirmed |
| `docs/deployment/power-automate-flows/paste/*.paste.json` | 6 | The hand-paste route they served was retired; 55 `designer-paste` artefacts serve the replacement route in the consolidated tree | Strong inference — the route's retirement is documented and the replacement exists; byte-level supersession is not applicable between different formats |
| `scripts/setup-sharepoint-portal.ps1` | 1 | Superseded by `scripts/setup-sharepoint.ps1`, `provision-sharepoint-fields.ps1`, `provision-sharepoint-fields.browser.js` and `build-sharepoint-browser-provisioner.mjs`, all present | Strong inference |

### 6.3 One deletion by R

`docs/reference/flow-contracts/deployed/CG_Upload_Endpoint__df7ddff1-…__full_definition.json`
— removed as **corrupted**: it carried `CG_Upload_Endpoint`'s definition stamped with
`ECM_DOCS_INTAKE`'s workflow id. Replaced in the same branch by
`CG_Upload_Endpoint__df82e331-…` and `ECM_DOCS_INTAKE__df7ddff1-…`, both present in the
consolidated tree. **Confirmed** — both replacements verified present. This deletion is
adopted; it is the basis of D5.

### 6.4 Nothing was excluded by this consolidation

No file was dropped on this audit's own judgement. The exclusions above are all inherited
decisions, verified rather than re-made. Where exclusion could not be justified conclusively
(§7.3, §7.4) the content was **kept and marked**, never removed silently.

---

## 7. Conflict and unresolved-items register

### 7.1 T's reference-integrity failure — **RESOLVED**, checker defect

**Confirmed.** `tests/references.test.mjs` reported 4 broken references in
`tools/flow-workbench/index.html` to files named `u`, `u`, `blob` and `url`. Located precisely:

```
line 755  const x = new URL(u);
line 764  try { return new URL(u).protocol === 'https:'; } catch { return false; }
line 928  const url = URL.createObjectURL(blob);
line 933  setTimeout(() => URL.revokeObjectURL(url), 5000);
```

The CSS `url()` pattern — case-insensitive, because CSS is — was being applied to inline
`<script>` bodies and matching the WHATWG `URL` API. The workbench is not defective.

This is the same defect the file already carries a fix for one block type further out: it
strips `<script type="application/json">` because `URL(s)` in English prose was reported as a
broken reference to a file named `s`. The fix follows that precedent — `CSS_URL` now runs over
markup with script bodies removed, while `HTML_REF` still sees the whole document so
`<script src>` is unaffected.

**The gate was not weakened, and this was checked rather than asserted:**

- Reference count fell from **2255 to 2251** across the same 848 files, measured on the tree
  as it stood at the moment of the fix — exactly the four false positives, and no genuine
  reference lost. (The tree has grown by this document since; the gate now reads 2254 across
  849 files.)
- **Negative control 1:** a broken `href` injected into the workbench's markup is still
  caught.
- **Negative control 2:** a broken `url()` injected inside a `<style>` block is still caught.
- The file's own "the checker is actually reading references" self-assertion still passes.

### 7.2 OTP topology — **CONTRADICTED. Not resolved.**

Two branches assert incompatible facts about the deployed tenant, and this repository cannot
settle which is true.

| | S `3657e0a` | F `5d922be` |
|---|---|---|
| Topology | Two flows | One flow, renamed |
| `OTP_GENERATE` | `314aaf27…` (`Web - OTP Generate`) | `b372d45e…` |
| `OTP_VERIFY` | `c5e314c7…` (`IP_OTP_VERIFY`) | `b372d45e…` |
| Committed definition for the id | **Yes** — `IP_OTP_VERIFY__c5e314c7-…__full_definition.json` | **No** — appears in no definition on either branch |
| Other evidence | Built from the fresh-flow kit 2026-09-04 and exported; nine security properties asserted individually by `test:otpdeployed` | Operator's tenant name-to-id map; id read from `IP_OTP_Endpoint`'s trigger URL; `IP_OTP_Endpoint` reported installed at flow id `913bd078…`, 73/73 actions |

The two-GUID distinction F itself established (D8) does **not** reconcile them: S's export
declares `internal_name c5e314c7-…` and `full_resource_id` flow `4dbe6dde-…`, and F's
`b372d45e…` is a third distinct GUID. F states "the tenant holds exactly one \[IP\_ OTP flow]
… no evidence of a second exists"; S's committed export is evidence of a second. Neither
branch's evidence subsumes the other's.

**Disposition:** S's model is adopted, on the single stated ground that it is the one an
artefact committed to this repository supports. This is **not** a finding that F is wrong —
F is the *older* of the two branches and recency played no part either way. The contradiction
is recorded verbatim on both contract keys (`contradictedByBranch`) and in the register
changelog, so nothing is silently resolved.

**Closure action:** export `IP_OTP_Endpoint` from the tenant and compare its
`workflow_identity` against `c5e314c7-…` and `4dbe6dde-…`. If they match, one flow was renamed
and F is right. If they do not, the estate holds two OTP verify flows and the cutover
(ITEM-43) must name which one.

### 7.3 `SCAN_INTAKE` workflow id — **UNVERIFIED, kept not promoted**

R records `workflowId: null` with `internalName 5504d7f9-…`. F records `88401ce1…` from the
operator's map — but against the `ECM_DOCS_INTAKE` attribution R proved wrong. The two name
the same flow by display name and disagree on nothing directly, yet `88401ce1…` has not been
read from `IP_SCAN_INTAKE`'s own trigger URL or `workflow_identity`.

It is recorded as `workflowIdCandidateUnverified` with its source, and `workflowId` stays
`null` — because, in both branches' own words, a null makes the checker print an observed id
as an unverifiable warning, while a wrong expectation reports a **correct** URL as the wrong
flow. **Closure:** read the id from the flow's trigger URL when this key is first configured.

### 7.4 Operator-supplied tenant map — **UNVERIFIED as a source**

D8 and several ids in §7.3 rest on a name-to-workflow-id map supplied by the operator. The map
itself is not committed to this repository and cannot be checked here. Its *consequences* are
partly corroborated in-repo (`EMAIL_RELATED_TASK` matched a live URL; `IP_FETCH_ALL_ENDPOINT`'s
two ids were both observed), which is why D8 is **Strong inference** rather than Unverified —
but the map is not repository evidence and is marked as such.

### 7.5 `tests/pending-plan.test.mjs` expectations — **RESOLVED**

S's gate named three portal keys as decided-upon contradictions between `npm run recover` and
the endpoint map. After consolidation they are no longer contradictions, and four internal
keys are. Both halves were verified before the expectation list was touched:

- **The three portal keys are gone because R fixed the underlying defect.** `95cae03` withdrew
  the portal mapping entirely, having found four portal keys resolving onto **internal**
  workflow ids carrying `triggerAuthenticationType All` — a portal package built from it would
  have handed anonymous visitors a working URL into the internal estate. Verified directly:
  `recoverEndpoints` now returns **zero** portal keys.
- **The four internal keys contradict because F's tenant ids supersede the corpus** (D8).
  Verified by running the comparison and reading each register entry's provenance.

The expectation list now names the four with their reasons, and the withdrawal is asserted
**positively** — recovery must resolve *no* portal key — so the removed coverage is not
silently dropped. A genuinely new contradiction still fails the gate.

### 7.6 `docs/process/detail/PROC-089.md` — created independently by S and R

Both branches created the same path with different content. **Resolved by regeneration**
(D12): the file is generated from `docs/reference/process-inventory.json`, so neither hand
version survives and the output is derived from the merged inventory.

---

## 8. Validation results

The eight states the commission asks to be kept distinct are kept distinct.

| State | Result |
|---|---|
| **Documented** | 1,112 tracked files. `docs/process/**` regenerated to 124 files; 8 registers regenerated; every `--check` stage passes |
| **Implemented** | All five branches merged; every adjudicated conflict resolved with recorded evidence; 0 merge markers remain in the tree (`git grep` over every tracked file returns none) |
| **Configured** | `config/config.example.js` and `config/endpoints.config.js` carry the adopted OTP contract. `config.local.js` is **absent by design** in a fresh clone |
| **Tested** | `npm run test:node` — **70 stages, 1350 assertions, 0 failed, exit 0**. `npx playwright test` — **155 passed, 0 failed, exit 0** (6.0 min) |
| **Built** | `npm run package` — **exit 0**. `dist/dgo-internal-platform/` and `dist/dgo-document-portal/` (46 files, 0.9 MB) both built and provisioned |
| **Provisioned** | Provisioning **resources** are present and their generators run clean (`provision-sharepoint-fields.browser.js`, `setup-sharepoint.ps1`, `build-sharepoint-browser-provisioner.mjs`). **No provisioning was executed against a tenant.** Not applicable — no tenant is reachable from this session |
| **Deployed** | **Nothing was deployed.** Not applicable |
| **Operationally verified** | **Nothing was operationally verified.** No flow was invoked, no live endpoint called. Not applicable |

### 8.1 The browser suite required an environment override — recorded, not hidden

`npx playwright test` first failed **155 of 155** with
`Executable doesn't exist at /opt/pw-browsers/chromium_headless_shell-1234/…`. This is
environmental: the pinned Playwright expects build `1234`; the image ships `1194`. It is not a
consolidation defect, and the same pattern appears when running R's suite unmodified.

The repository's own `playwright.config.js` already provides the escape hatch — it reads
`DGO_CHROME_PATH` / `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` / `CHROME_PATH` for exactly this
case. The run above used `DGO_CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
with `DGO_CHROME_NO_SANDBOX=1`. **No repository file was changed to make the suite pass**, and
`npx playwright install` was not run.

### 8.2 Commissioning gate — 2 blockers, both environmental

`npm run commission` exits 1 with 2 blockers, and **neither is a code defect or a
consolidation defect**:

1. Internal runtime not configured — `config/config.local.js` does not exist.
2. Public portal not configured — `document-portal/config.local.js` does not exist.

Both are the documented, intended state of a fresh clone: with no endpoint URLs the platforms
run in demo mode. The gate also raises 2 warnings (43 committed signed trigger URLs across 28
files; inert authentication) and 4 manual obligations. All are inherited standing findings,
not consolidation outcomes. **Confirmed.**

### 8.3 What was re-validated before delivery

Branch coverage (27/27 accounted, tips cross-checked against the GitHub listing); commit and
file references (every SHA and path in this document resolved); the difference register (blob
matrix rebuilt against the consolidated tree); the selection decisions (each re-read against
its source commit); compatibility (full suite green); dependency integrity (`devDependencies`
identical across all branches, one install serves all); configuration completeness (every one
of the 70 stages has a script definition — checked programmatically); build (packages built);
broken references (2254/2254 resolve); regression — **every stage in every source branch's chain is present in the
consolidated 70**, checked set-wise: `main` 29/29, S 69/69, F 62/62, R 62/62, O 29/29,
T 62/62, none missing; and all 70 pass; traceability (1,019 of 1,112 files matched to a source tip by
blob SHA, the other 93 individually accounted).

---

## 9. Limitations and blocked validations

| # | Limitation | Effect |
|---|---|---|
| L1 | **The scope boundary is 92 seconds wide.** `claude/platform-flows-endpoints-docs-plxjlw` (169 commits, 1157 files — more files than any branch consolidated) missed inclusion by 92 seconds | The consolidation is complete **for the five commissioned branches** and is not a consolidation of the repository. Treat "five most recent" as the commissioned scope, not as a claim that these five hold all current work. **CLOSED by §12** — the branch has since been assessed and merged. Both figures here are branch totals; measured against the consolidated branch the exclusion was **one commit**. See §12 for the correction |
| L2 | No tenant access | Every claim about what is deployed in Power Automate or SharePoint is a claim about a **committed export**, not about the live tenant. §7.2 cannot be closed from here |
| L3 | The operator's name-to-workflow-id map is not in the repository | D8 rests on a source that cannot be checked here (§7.4) |
| L4 | O's cross-repository finding cannot be verified | O reports the same 55 signatures public in `Sytem_Production_Governance` and 3 more in `DGO_OPS`. Reading those repositories is outside the evidence boundary and was not done. **Unverified** — recorded, not confirmed and not dismissed |
| L5 | Playwright browser mismatch | The browser suite ran against the image's Chromium 1194 via the repository's own override, not the pinned build. 155/155 passed; a pinned-build run was not performed |
| L6 | `npm run verify:endpoints`, `npm run test:links` not run | Both need live endpoints or a network crawl. Neither is in `test:node`. Blocked |
| L7 | Deployed-build browser run not performed | The suite's own manual obligation: run it once more against the deployed hostname. Requires a deployment |
| L8 | The 22 out-of-scope branches were inventoried, not assessed | Content unique to them is neither included nor ruled out. Not applicable by scope |

---

## 10. Residual risks and required closure actions

| # | Risk | Severity | Closure action | Owner |
|---|---|---|---|---|
| R-1 | **The OTP topology is unresolved (§7.2).** A cutover performed against the wrong model repoints the portal at a flow that either does not exist or is not the hardened one | **High** | Export `IP_OTP_Endpoint` from the tenant; compare `workflow_identity` against `c5e314c7-…` / `4dbe6dde-…`. Do not run ITEM-43's cutover until this is settled | operator |
| R-2 | **43 signed trigger URLs remain committed** across 28 files. Deleting a file revokes nothing | **High** | `npm run rotation` produces the worklist; work `docs/deployment/rotation/ROTATION.md` | security authority |
| R-3 | **The OTP protocol has never run live.** D3 is verified against the deployed definitions and by a standing gate, but no OTP request has ever been made | **Medium** | ITEM-43: make the live call | operator |
| R-4 | **O's exposure finding is unverified here (L4).** If it holds, privatising this repository closed nothing and the window has been open since at least 30 July 2026 | **High if true** | Verify the two named repositories directly. This audit did not and must not be read as having cleared it | security authority |
| R-5 | `SCAN_INTAKE`'s workflow id is unverified (§7.3) | **Low** | Read it from the flow's trigger URL when the key is first configured | operator |
| R-6 | Authentication is inert; RBAC is advisory | **High** | Standing gap G-04 / register CFG items. Unchanged by this consolidation | agency |
| R-7 | Work unique to the 22 unassessed branches may be lost if they are deleted (L8) | **Medium** | Extend the audit before retiring any branch, starting with `claude/platform-flows-endpoints-docs-plxjlw` | repository owner |
| R-7a | **R-7 is discharged for `plxjlw` only (§16).** That branch is assessed, merged and safe to retire. **21 branches remain unassessed** and the risk stands for every one of them | **Medium** | Extend the audit before retiring any of the remaining 21 | repository owner |

---

## 11. Qualified completion statement

**What was done, and is demonstrated.** All 27 branches were inventoried and their tips
cross-checked against the GitHub branch listing. The five most recently updated were assessed
by blob-level comparison of every tracked path across six trees, by attribution of every
differing path to the branch that changed it, and by executing each branch's own test suite in
an isolated worktree. They were consolidated into `claude/ecm-docs-branch-audit-c0sisf` by
five merges that preserve every source branch unchanged. Every conflict was adjudicated on
stated repository evidence and recorded in §3 and §7. The consolidated tree passes **70 Node
stages (1350 assertions)** and **155 browser tests**, and builds both distributable packages.
1,019 of its 1,112 files are byte-identical to a source branch tip and the other 93 are
individually accounted for in §4.

**Two selections go against the most recent branch** (D4, D5), and the one contradiction that
could not be settled (§7.2) was resolved *in favour of* the newer branch only because that
branch holds the committed artefact — not because it is newer. Recency was not used as
evidence anywhere.

**What is not established.** This audit did not deploy anything, did not provision anything,
did not invoke any Power Automate flow or SharePoint list, and did not read any repository
other than this one. Every statement about the live tenant is a statement about a committed
export. §7.2 is **Contradicted** and remains open; §7.3 and §7.4 are **Unverified**; L1–L8
bound what the rest of this document can be taken to mean. In particular, this is a
consolidation of **five commissioned branches**, not of the repository: a sixth branch with
more tracked files than any assessed here fell outside the scope by 92 seconds, and nothing
here should be read as having considered it.

**The consolidated branch is not cleared for deployment.** `npm run commission` exits 1 with
two configuration blockers and two standing warnings. Those predate this work and are
unchanged by it.

---

# Extension — the sixth branch

**Extension date:** 5 September 2026
**Added to scope:** `claude/platform-flows-endpoints-docs-plxjlw`
**Reason:** closure action **R-7**, which named this branch as the place to start
**Evidence boundary:** unchanged — this repository only

Sections 1–11 above record the consolidation of the five commissioned branches and are left
as written. This extension is additive: it assesses the one branch §9 L1 excluded, states what
that exclusion actually amounted to once measured, and records the result. Where it changes a
finding above, it says so and the finding is marked, not rewritten.

## 12. What the 92-second exclusion actually excluded

L1 described the excluded branch as **169 commits, 1157 files — more files than any branch
consolidated**. Both figures are correct and both are branch totals, which is the wrong
measure for what was at risk. Measured against the consolidated branch instead of against
`main`:

| Measure | Value | Method |
|---|---|---|
| Commits since `main` | 169 | `git rev-list --count origin/main..P` — the L1 figure, reproduced |
| Commits **not already in the consolidated branch** | **1** | `git rev-list --count 327ef4d..P` |
| That commit | `1cd896d` "Document what every flow and endpoint is actually configured with" | — |
| Merge base with the consolidated branch | `2fde2fb`, an ancestor of `327ef4d` | `git merge-base`, then `--is-ancestor` |
| Tracked files on the branch | 1157 | `git ls-tree -r --name-only P` — the L1 figure, reproduced |
| Files changed by the one unique commit | 144 (110 added, 34 modified) | `git diff --name-status 2fde2fb P` |

168 of the 169 commits were already in the consolidated branch through the shared spine. The
branch was one commit ahead of common history, not a parallel body of work. **L1 overstated
the exposure** — not in its arithmetic, which is right, but in the measure it chose. The
correction is recorded here rather than by editing L1, and L1 is annotated to point at this
section.

This does not retire the caution L1 expressed. It shows that the caution was cheap to
discharge for this branch, and says nothing about the remaining 21.

## 13. Decision register (continued)

| # | Component | Selected | Rejected | Evidence that decided it | Class |
|---|---|---|---|---|---|
| D13 | `scripts/build-provisioning-reference.mjs`, `scripts/lib/provisioning-reader.mjs`, `tests/provisioning-reference.test.mjs` | **P**, admitted whole | — | Sole source; no competing implementation. All three are byte-identical to `P`'s committed blobs in the merged tree (`git hash-object` against `git rev-parse P:<path>`) | Confirmed |
| D14 | The 117 pages under `docs/reference/provisioning/` | **Regenerated** | `P`'s 107 committed pages | Same ground as D12: the pages are produced by a named script and guarded by a `--check` stage, so regeneration is decidable and taking a side is not. Regeneration is not cosmetic here — see §14 | Confirmed |
| D15 | `package.json` `test:node` chain | **HEAD chain + `P`'s stage at `P`'s position** | either alone | `P` inserts `test:provisioning` between `test:catalogue` and `test:datacontract`; HEAD carries 9 stages `P` lacks. Union preserves both, 71 stages, every one with a script definition. The two new script entries (`provisioning`, `test:provisioning`) merged without conflict | Confirmed |

## 14. Why regenerating the reference was not cosmetic

`P` generated its 107 pages on 2026-09-02, before the five-branch consolidation existed. Run
against the consolidated tree, the same generator produces **117** pages and **26 changed rows**
in `ENDPOINT_REGISTER.md`. The changes are not formatting. They are the consolidation's own
adjudicated facts arriving in the reference:

- `OTP_VERIFY` — workflow id becomes `c5e314c768b54bdc89350954ef6a256d`, the export-backed
  model adopted in **D2/§7.2**.
- `OTP_GENERATE` / `OTP_VERIFY` — the `action` sent becomes `generate` / `verify`, not
  `otpGenerate` / `otpVerify`. This is **D3**.
- `FETCH_ALL`, `REFERENCE_DATA`, `SINGLE_ASSIGNMENT`, `AI_DOC_ANALYSIS` and 9 further keys —
  trigger-URL workflow ids from **D8**.
- Ten pages appear that `P` could not have written, because the packages behind them arrive on
  the other branches: `ip-otp-verify`, `ip-scan-intake`, the four `cg-*-endpoint` pages, and
  four OTP/scan-intake package pages. `ip-otp-verify` and `ip-scan-intake` are the exports that
  **decided D2 and D4**.

Had `P`'s committed pages been taken as bytes, the repository would have carried a generated
reference contradicting the decisions the same repository records — asserting the OTP protocol
the consolidation rejected on evidence. **This is the finding of the extension.** It is also
the second time D12's rule has paid: generated artefacts are regenerated, never chosen.

One ordering constraint was found by a gate failure rather than by reading. `docs/visual/platform-data.js`
and `docs/reference/process-inventory.json` count files, including the reference pages and test
files, so the generators are ordered: `provisioning` → `process:docs` → `visual`. Regenerating
`visual` first left it stale and `test:visual` failed on "the committed dataset is what the
generator produces now". The gate caught it; the order above is the one that satisfies all
three `--check` stages.

## 15. Validation results for the extension

| State | Result |
|---|---|
| **Documented** | 1,232 tracked files (was 1,112; +120). 117 provisioning pages — 66 flows, 49 packages, plus `ENDPOINT_REGISTER.md` and `README.md`. `docs/process/**` regenerated; every `--check` stage passes |
| **Implemented** | `P` merged by one merge commit preserving it unchanged. 32 conflicts: 1 semantic (`package.json`, D15), 31 in generated artefacts resolved by regeneration (D14). 0 merge markers remain in the tree |
| **Configured** | Unchanged by this extension. No configuration file was edited |
| **Tested** | `npm run test:node` — **71 stages, 1480 assertions, 0 failed, exit 0** (was 70 / 1350). `npx playwright test` — **155 passed, 0 failed, exit 0** (5.6 min), with the environment override §15.1 records |
| **Built** | `npm run package` — exit 0, both packages built and provisioned. `npm run package:bundle` — exit 0 |
| **Provisioned** | Unchanged. **No provisioning was executed against a tenant.** Not applicable |
| **Deployed** | **Nothing was deployed.** Not applicable |
| **Operationally verified** | **Nothing was operationally verified.** No flow was invoked, no live endpoint called. Not applicable |

The new stage is `test:provisioning`. It is not a `--check` against the generator alone: it
reads the packages and looks for their values in the pages as exact blocks — 4,187 action
inputs, 60 trigger schemas, 140 response bodies — so a renderer that began paraphrasing would
fail it. Against the merged tree it reports 38,748 table rows well-formed, 19 internal contract
keys and 7 portal endpoints present, and no signed trigger URL in any page.

### 15.1 The browser suite reproduced §8.1 exactly

Run without the environment override, `npx playwright test` failed **152 of 155** with
`Executable doesn't exist` — the same pinned-build-vs-image mismatch recorded in §8.1 and L5,
reproduced here unchanged. The image ships `chromium-1194`; 3 tests that need no browser
passed. Re-run with the repository's own escape hatch
(`DGO_CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, `DGO_CHROME_NO_SANDBOX=1`),
the suite is **155 passed, 0 failed, exit 0** (5.6 min) — the same result §8 records for the
five-branch tree. No repository file was changed to make the suite pass and `npx playwright
install` was not run.

This extension touches no browser-facing source: the merge changes `docs/**`, `package.json`,
and three new files under `scripts/` and `tests/`. No file under `document-portal/`, `core/`,
`assets/`, or any `.css`/`.html` entry point is modified.

## 16. What this closes, and what it does not

| Item | Status after this extension |
|---|---|
| **L1** — the 92-second scope boundary | **Closed.** The excluded branch is assessed and merged. Its exclusion amounted to one commit (§12) |
| **R-7** — extend the audit before retiring any branch, starting with `plxjlw` | **Discharged for `plxjlw` only.** The branch is safe to retire: every file in its unique commit is present in the consolidated tree, and its three hand-written sources are byte-identical. **Still open for the other 21** |
| **L8** — 22 out-of-scope branches inventoried, not assessed | **Reduced to 21.** Unchanged in kind |
| **§7.2 / R-1** — OTP topology **Contradicted** | **Still open.** This extension did not resolve it and could not: it added no tenant evidence. §14 records that the generated reference now states the adopted model consistently, which is not the same as the model being confirmed |
| **R-2** — 43 committed signed trigger URLs | **Unchanged.** The new pages add none; `test:provisioning` asserts that |
| **R-3, R-4, R-5, R-6** | **Unchanged.** Nothing here bears on them |
| Commissioning gate | **Unchanged.** `npm run commission` still exits 1 with the same 2 blockers and 2 warnings |

**Scope statement.** With this extension the audit covers **6 of 27 branches**. It is not a
consolidation of the repository. 21 branches remain inventoried but unassessed, and nothing
here should be read as having considered them.
