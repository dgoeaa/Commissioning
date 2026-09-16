# Mobile shell workstream — handoff record

Ten documents, written between 9 and 11 August 2026, covering the mobile shell
remediation workstream R-1 through R-4 and two repository reviews written alongside it.
They are kept **unedited**, under the same rule as [`../audits/INDEX.md`](../audits/INDEX.md):
a record that gets rewritten when it becomes inconvenient is not a record.

## Where these documents came from

The export they arrived in — `Internal_Platformpagegs` — is **commit `e03fbc5`** (2026-09-04,
"Record a live credential exposure found while…", on `origin/claude/ecm-docs-branch-audit-c0sisf`)
plus exactly five files: the mobile-shell work listed below. 152 of its 157 platform files are
byte-identical to that commit. It is a working copy of this repository, not a foreign tree.

Of the baselines the documents cite, one is here and the rest are not:

| Cited as baseline | Named in | In this repository |
|---|---|---|
| `73bb471de8504e47f8d77c70a435adc7c2c7e42b` | R-1 directive | **Yes** — 2026-08-09, "Production baseline: consolidate verified branches into main (#23)", on `origin/main` and `origin/production-baseline` |
| `7ef5e894…` | R-2 brief | No |
| `12dde148…` | R-3 brief | No |
| `36454da4…` | R-4 brief (R-3 HEAD) | No |
| `4815f28` | consolidation review | No |
| `a6e2288`, `bc96dca`, `4596105`, `d6b47d5`, `36454da` | R-4 brief, the five R-3 commits | No |

So R-1 began from a commit that is in this history; R-2 through R-4 then ran on a line that
was never pushed here, and the work reached us as a file export instead. That is why the
record needed landing.

> **Correction, 2026-09-09.** An earlier version of this file stated that *none* of the cited
> baselines exists here, and that the repository's root commit is `8e4d1d6`. Both were wrong.
> They were derived from a **shallow clone** truncated at `8e4d1d6` with only this branch
> fetched — 1,924 of the repository's 10,759 objects, and 2 of its 29 refs. `8e4d1d6` is the
> graft boundary, not a root; the true root is `361b792` (2026-08-01). Re-verified against the
> full 577-commit history across all refs.

## What is live here, and what is not

Unlike the audit documents next door, these describe work that **is now in the tree**.
The five files carrying R-1 → R-4 were ported from the `Internal_Platformpagegs` export
on 2026-09-08: [`../../styles/app.css`](../../styles/app.css),
[`../../shared/shell.js`](../../shared/shell.js), [`../../core/ui.js`](../../core/ui.js),
[`../../modules/home.js`](../../modules/home.js) and
[`../../modules/response-tracking.js`](../../modules/response-tracking.js). The ratchet
the workstream measured itself against came with them, as
[`../../tests/static/css-contract.mjs`](../../tests/static/css-contract.mjs) and
[`../../tests/baseline.json`](../../tests/baseline.json), and runs as `npm run test:css`.

Four files the export also carried were **not** taken: `config/rbac.config.js`,
`core/api.js`, `core/contracts.js` and `core/security-actions.js`. It carries an older state
of all four — neither the F-020 RBAC fix nor `liftEnvelope()` — so porting them would have
moved the tree backwards. Tested against the full history: those four versions already exist
on other refs, while the five that were ported existed nowhere. The split is exact.

Paths written `handoff/…` inside these documents resolve to this directory.

## The documents

| Document | Date | Baseline examined | Scope | Status |
|---|---|---|---|---|
| [`EXEC-DIRECTIVE-mobile-shell.md`](./EXEC-DIRECTIVE-mobile-shell.md) | 2026-08-09 | `73bb471d…` | R-1. Application shell and narrow-viewport safety, directives `D-1`…`D-6` | Closed; superseded by R-2 |
| [`EXEC-BRIEF-R2-remediation.md`](./EXEC-BRIEF-R2-remediation.md) | 2026-08-10 | `7ef5e894…` | R-2. Every open defect from the R-1 assessment, `R-D1`…`R-D6` | Closed; five items left open for R-3 |
| [`EXEC-BRIEF-R3-closing.md`](./EXEC-BRIEF-R3-closing.md) | 2026-08-10 | `12dde148…` | R-3. The five items R-2 left open, `R3-D1`…`R3-D5` | Closed |
| [`REVIEW-R3-closing.md`](./REVIEW-R3-closing.md) | 2026-08-11 | `36454da4…` against `12dde148…` | Independent review of R-3; raises findings `F-1`…`F-4` | Ratified R-3 in full |
| [`ADJUDICATION-R4-and-DIRECTIVE-R4A.md`](./ADJUDICATION-R4-and-DIRECTIVE-R4A.md) | 2026-08-11 | R-4 execution | Adjudication of the R-4 submission, and directive R-4A | Closed |
| [`CLOSURE-R4A-and-DIRECTIVE-R4B.md`](./CLOSURE-R4A-and-DIRECTIVE-R4B.md) | 2026-08-11 | R-4A execution | R-4A accepted, one final transcription directed as R-4B | Closed |
| [`EXEC-BRIEF-R4-terminal.md`](./EXEC-BRIEF-R4-terminal.md) | 2026-08-11 | `36454da4…` | R-4. Terminal closure: the execution report, and one comment block | **Terminal.** Ends the workstream; there is no R-5 |
| [`REPORT-R3-execution.md`](./REPORT-R3-execution.md) | 2026-08-11 | `12dde148…36454da4` | The §6 execution report R-4 required — the permanent artifact of record for R-3 | The measured record |
| [`ADJUDICATION-repo-audit-execution.md`](./ADJUDICATION-repo-audit-execution.md) | 2026-08-11 | repository state | Adjudication of the repository audit execution | Closed |
| [`REVIEW-repo-consolidation-audit.md`](./REVIEW-repo-consolidation-audit.md) | 2026-08-11 | `4815f28` | Repository consolidation and hygiene — **not** the mobile shell workstream | Closed |

## Three items survive closure

The R-4 brief closes the workstream with three items explicitly owned elsewhere, none of
them blocking. All three are still open in this tree:

| Survives | Owner | State here |
|---|---|---|
| The 9-vs-25 navigation disagreement — `navigation-relationships.config.js` declares 9 main modules across 5 groups; `workflow-clarity.config.js` declares 25 flat workspaces; the runtime renders the 25 | Product decision-maker | Unresolved. Both files still claim authority in their own comments and neither references the other |
| `F-1` — `--dgo-control-target-min` stays 36px in compact density between the mobile tier's ceiling and `NAV_DRAWER_MAX` (641–900px) | Product decision-maker | Unresolved. A question about which devices are treated as touch, not a defect |
| `F-2`, `F-3` — click-outside and stale identity, consistency items across notifications, persona and `refreshIdentityAndNav()` | Whichever future pass owns those surfaces | Unresolved. Fixing either on one surface alone makes the surfaces disagree |

**None of these documents is guidance.** For what the platform does today, read
[`../../PLATFORM_DOCUMENTATION.md`](../../PLATFORM_DOCUMENTATION.md); for what it must do
to go live, [`../deployment/COMMISSIONING.md`](../deployment/COMMISSIONING.md).
