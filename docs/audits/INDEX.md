# Audit record — index and supersession chain

Seven audit documents written between 1 and 7 August 2026, plus one from 5 September 2026,
two from 2 September 2026 covering the notification estate, and one full-scope assessment
of that estate from 9 September 2026.
Five of the seven were previously at the repository root. They are kept **unedited** — an audit record that
gets rewritten when it becomes inconvenient is not a record — so several of them
contain claims that were true of the commit they examined and are not true now.

`AUDIT.md` (ECM Activity Hub Portal era) and `FORENSIC_REPOSITORY_AUDIT.md`
(structural classification, superseded on facts by `docs/forensic/dd2e909/`) were
removed from the tree during the 2026-08-08 cleanup pass: both were fully superseded,
their subject trees no longer exist, and no live document or test cited them as a
dependency. Other unedited records in this index still quote them by name — those
citations are historical prose, not links, and are left as written.

Two exceptions, both structural rather than revisionist:
[`OPERATIONAL_READINESS_AUDIT.md`](./OPERATIONAL_READINESS_AUDIT.md) is the current
audit and carries its own findings live; and `FRONTEND_REVIEW_PARITY_VERDICT.md` was
folded into [`FRONTEND_REVIEW_ASSESSMENT.md`](./FRONTEND_REVIEW_ASSESSMENT.md) rather
than kept beside it, because two records of one review is how a finding gets fixed
twice or not at all. The fold preserves both documents' text and marks what came from
which.

**None of these is guidance.** For what the platform does today, read
[`../../PLATFORM_DOCUMENTATION.md`](../../PLATFORM_DOCUMENTATION.md); for what it
must do to go live, [`../deployment/COMMISSIONING.md`](../deployment/COMMISSIONING.md).

## The documents

| Document | Date | Commit examined | Scope | Status |
|---|---|---|---|---|
| [`CAPABILITY_ASSESSMENT_R11.6.md`](./CAPABILITY_ASSESSMENT_R11.6.md) | 2026-08-01 | `31ca711` | The R11.6 runtime — capability and gaps `G-01`…`G-09` | **Partly live.** The `G-nn` numbering is still the canonical reference for the open gaps |
| [`REPOSITORY_AUDIT.md`](./REPOSITORY_AUDIT.md) | 2026-08-01 | 399 tracked files | Repository-wide security and data, findings `R-nn` | **Superseded on facts, live on method** |
| [`FORENSIC_ROOT_PLATFORM_AUDIT.md`](./FORENSIC_ROOT_PLATFORM_AUDIT.md) | 2026-08-02 | `61604a3` | Root runtime and `document-portal/` behaviour | **Partly live.** `tests/output-encoding.test.mjs` is written case-for-case against its findings |
| [`REFERENCE_SNAPSHOT_REVIEW.md`](./REFERENCE_SNAPSHOT_REVIEW.md) | 2026-08-02 | `main` at the time | The `dgo_targets__state.json` snapshot; envelope mismatch `A-1`/`A-2` | **Live.** `A-1`/`A-2` are cited as prerequisites by the root platform audit |
| [`FRONTEND_REVIEW_ASSESSMENT.md`](./FRONTEND_REVIEW_ASSESSMENT.md) | 2026-08-05, folded 08-06 | `8613358` | Assessment of an external frontend design review, 18 findings, **plus the 2 it missed** | **Live.** Wave 1 shipped; findings 19 and 20 closed; `tests/containment.spec.js` and `tests/portal.spec.js` cover them. The former `FRONTEND_REVIEW_PARITY_VERDICT.md` is folded into this document |
| [`OPERATIONAL_READINESS_AUDIT.md`](./OPERATIONAL_READINESS_AUDIT.md) | 2026-08-06 | `main` | End-to-end audit of both platforms, all branches, and readiness for live operationalization. Findings `O-nn` | **Live.** The current audit |
| [`DESIGN_AUDIT_BRIEF_ASSESSMENT.md`](./DESIGN_AUDIT_BRIEF_ASSESSMENT.md) | 2026-08-07 | `b003acd` | Assessment of an external visual/UX audit of both platforms, 33 findings, **plus the 7 it missed** (`V-nn`) | **Live.** 22 confirmed, 8 half right, 3 not reproducible — including `P-06`, one of the report's own release gates. **Remediation shipped**; `tests/audit-remediation.spec.js` holds all 31 fixes, and three decisions are recorded as open for the agency |
| [`BRANCH_CONSOLIDATION_AUDIT_2026-09-05.md`](./BRANCH_CONSOLIDATION_AUDIT_2026-09-05.md) | 2026-09-05, extended same day | 27 branches; **6 assessed** | Audit and consolidation of the five most recently updated branches into `claude/ecm-docs-branch-audit-c0sisf`, **extended in §12–16 to a sixth** under closure action R-7. Decision register `D1`…`D15` | **Live.** The OTP topology (§7.2) is **Contradicted** and open; two selections go against the newest branch. The 92-second scope boundary (L1) is **closed** — the excluded branch was one commit ahead of common history, and regenerating its reference against the consolidated tree was what kept it from contradicting `D2`/`D3`/`D8` (§14). 21 branches remain unassessed |
| [`NOTIFICATION_ESTATE_EVIDENCE_REGISTER_2026-09-02.md`](./NOTIFICATION_ESTATE_EVIDENCE_REGISTER_2026-09-02.md) | 2026-09-02 | A four-batch repository intake, not a commit | The 38 notification obligations `RN-001`…`RN-038`, each with its audience, state, severity and repository evidence | **Superseded on facts, live as provenance.** This is where the `RN-nn` numbering comes from and why each row exists. Its own counts are stale by design: it reports 7 provisioned and 0 recurrence triggers, where `config/notification-matrix.config.js` now measures 16 provisioned across 39 rows and the estate carries four scheduled flows. Several of its file paths (`deployment/…`, `NITDA Email Template Library/…`) are the intake's layout, not this repository's |
| [`NOTIFICATION_ESTATE_EXECUTION_SUMMARY_2026-09-02.md`](./NOTIFICATION_ESTATE_EXECUTION_SUMMARY_2026-09-02.md) | 2026-09-02 | The same intake | The NO-GO release decision, 14 confirmed blockers, and the Release 0–5 remediation sequence | **Partly live.** The release sequence and its gates are still the plan of record. Release 5's repository-side assurance shipped — the matrix, its machine verifier and the completeness tests; its tenant-side items did not, and `npm run tenant:validate` still reports live acceptance, rehearsed rollback and production authorisation as outstanding. The measures it opens with are superseded: it counts 60 flows, 76 mail actions and 0 recurrence triggers, against 77, 106 and 4 today. Blocker 9 — nothing processes expiry, breach, reminder or escalation on a schedule — is the one these two documents are most out of date on |
| [`NOTIFICATION_ESTATE_FULL_SCOPE_ASSESSMENT_2026-09-09.md`](./NOTIFICATION_ESTATE_FULL_SCOPE_ASSESSMENT_2026-09-09.md) | 2026-09-09 | `45a1c7c` on this branch | The whole notification estate across both platforms — channels, frontend and backend, specifications and controls. Findings `F-01`…`F-10` | **Live.** Sourced only from this branch, and every figure re-derivable by a named command. Its findings are the ones that span rows and so have nowhere to appear in the matrix: the delivery ledger covers 15 of 106 sends, a second mail connector sits outside every connection control, the 20-template library is referenced by no carrier, and nine matrix rows rest on one scheduled flow |

## Also here

[`FLOW_TRUTH_PERSISTENCE_REVIEW.md`](./FLOW_TRUTH_PERSISTENCE_REVIEW.md) — 2026-09-10. Review of a
submitted Power Automate clipboard package, `Scope_SharePoint_Flow_Truth_Persistence`, against the
estate's own gates: 52 mechanical failures where the thirty-four committed packages produce none,
plus nineteen behavioural defects and two security findings. It sits outside the supersession
chain below because it examines a submitted artefact rather than a commit of this repository, and
unlike the records in that chain it is **live** — the rebuild it specifies is
`docs/deployment/governance/flows/`, generated by `npm run flowtruth` and held to the findings by
`npm run test:flowtruth`.


[`repository-hygiene/`](./repository-hygiene/README.md) — the narrative half of a
machine-assisted hygiene audit of commit `c2d78ba2ea23`, recovered from the
`archive/repo-hygiene-audit` branch. Its ~63,000 lines of raw `.tsv`/`.log`/`.json`
output were deliberately left behind; see that README. It sits outside the chain below
because it audited repository structure rather than the platform.

## Supersession chain

```
(originally scoped from AUDIT.md and FORENSIC_REPOSITORY_AUDIT.md — both fully
 superseded and removed from the tree 2026-08-08; see "The documents" above)

CAPABILITY_ASSESSMENT_R11.6.md   ──┐  G-nn  runtime capability
REPOSITORY_AUDIT.md              ──┤  R-nn  repository-wide security
   │                                │
   │  both superseded on FACTS by
   ▼                                │
docs/forensic/dd2e909/             ─┘  the current forensic snapshot, on main
   │
   ├─ FORENSIC_ROOT_PLATFORM_AUDIT.md   behaviour, still the basis of a test suite
   └─ REFERENCE_SNAPSHOT_REVIEW.md      A-1/A-2 envelope mismatch, still open

FRONTEND_REVIEW_ASSESSMENT.md  ←── FRONTEND_REVIEW_PARITY_VERDICT.md
   (independent line: external design review, August 2026)
   The verdict was FOLDED IN, not superseded: its two findings, 19 and 20, are the
   ones the review itself missed, and both are now closed.
        │
        ├─ DESIGN_AUDIT_BRIEF_ASSESSMENT.md   (7 August 2026)
        │     Same line, second external report — a visual/UX audit of both platforms,
        │     assessed at b003acd. Neither supersedes the other: the frontend review
        │     examined the stylesheet and shell, this one examined navigation, copy and
        │     rendered layout. Its V-nn findings are the ones this report missed.
        │
        ▼
OPERATIONAL_READINESS_AUDIT.md   (6 August 2026)
   Draws every open item above into one register and adds its own, O-nn. This is
   the document to read for current state; the ones above it are the record of how
   it got there.

NOTIFICATION_ESTATE_EVIDENCE_REGISTER_2026-09-02.md
   │   (independent line: the notification estate, September 2026)
   │   RN-001…RN-038, one row per obligation, against a four-batch intake
   ├─ NOTIFICATION_ESTATE_EXECUTION_SUMMARY_2026-09-02.md   the NO-GO and Release 0-5
   │
   ▼  superseded on facts, and still the provenance of the numbering, by
config/notification-matrix.config.js  ─  39 rows, each recomputed from the artifacts
   by scripts/verify-notification-matrix.mjs on every run. Read the matrix for what
   is true now; read those two for why each row exists at all.
   │
   ▼  measured ACROSS the rows, where a matrix organised per row cannot look, by
NOTIFICATION_ESTATE_FULL_SCOPE_ASSESSMENT_2026-09-09.md   (9 September 2026)
   F-01…F-10. Neither supersedes the other: the matrix answers "is each required
   message sent, and to whom"; this answers "what carries them, what records them,
   and what governs the carriers". Read it for the channel, ledger, connector and
   template findings, none of which is expressible as a row.
```

`docs/forensic/dd2e909/` is deliberately **not** rewritten by later reorganisations,
including the one that moved these files here. It is a snapshot of one commit and
cites paths as they were at that commit; correcting it would falsify it.

## What remains open

Two gaps, both outside this repository to close. Everything else recorded across
these documents has either been fixed and verified, or has had its subject removed
from the repository. The current audit's own register is in
[`OPERATIONAL_READINESS_AUDIT.md`](./OPERATIONAL_READINESS_AUDIT.md).

| Gap | What | Why it is still open |
|---|---|---|
| **G-03** | **55 distinct Power Automate SAS signatures across 28 tracked files** under `docs/reference/foundational/` | Deleting a file revokes nothing. These must be **rotated in Power Automate** — `../deployment/MINIMAL-PILOT.md` §3a. The corpus documents the deployed estate verbatim by explicit decision (D5), so `tests/check-secrets.mjs` excludes it from the ratchet and reports the excluded figure on every run instead; `tests/secrets-baseline.txt` covers the application tree and may only shrink. `npm run package` refuses to build a pilot or enforced package wired to any of these |
| **G-04** | No server-side authentication; client-asserted identity is trusted | The client half is complete and tested. The server half is seven obligations that belong to the Power Automate flows, specified in [`../architecture/AUTHENTICATION_CONTRACT.md`](../architecture/AUTHENTICATION_CONTRACT.md) §2 and sequenced in [`../deployment/FLOW-BUILD-PLAN.md`](../deployment/FLOW-BUILD-PLAN.md). Until they are implemented, all governance in this repository is advisory |

`npm run commission` reports which obligations stand between the current state and a
live deployment. The G-03 figure above was previously recorded as *4 signatures in 2
files*; that was the application tree only, and the whole-repository figure is the one
that matters for rotation.
