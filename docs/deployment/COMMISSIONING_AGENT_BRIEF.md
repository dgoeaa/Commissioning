# Final configuration commissioning — engagement brief

> ## RETIRED — the engagement it briefed is closed
>
> **DO NOT COMMISSION FROM THIS DOCUMENT, AND DO NOT ENGAGE AN AGENT FROM IT.**
>
> This briefed an independent audit and implementation agent for production commissioning. No such agent was engaged. The audit was performed here, its findings are recorded as GOV-01 through GOV-08, and every action still outstanding is a tenant-side step in the governance execution runbook — not a scope for a new engagement.
>
> **Where the work now lives:**
>
> | For | Read |
> |---|---|
> | Wiring the estate and commissioning the endpoints | [`CLEAR-THE-LAST-BLOCKER.md`](CLEAR-THE-LAST-BLOCKER.md) — on a phone, [`CLEAR-THE-LAST-BLOCKER-TERMUX.md`](CLEAR-THE-LAST-BLOCKER-TERMUX.md) |
> | The tenant-side governance work that remains | [`governance/GOVERNANCE-TENANT-RUNBOOK.md`](governance/GOVERNANCE-TENANT-RUNBOOK.md) |
> | What is open, who owns it, and whether it blocks | [`docs/reference/governance-estate-position.json`](../reference/governance-estate-position.json) |
>
> This document is kept because it records how the estate was measured and what the figures
> meant at the time. Every count in it is a reading of an earlier commit. Read it as history.

---

> **This document carries no commands.** The steps for portal and endpoint commissioning live in
> [`EXECUTION_RUNBOOK.md`](EXECUTION_RUNBOOK.md), which is the only document that carries them.
> This document is a supporting record. If you are here to execute, go there.
>
> The command-line commissioning path is
> [`CLEAR-THE-LAST-BLOCKER.md`](CLEAR-THE-LAST-BLOCKER.md) — on a phone,
> [`CLEAR-THE-LAST-BLOCKER-TERMUX.md`](CLEAR-THE-LAST-BLOCKER-TERMUX.md).

**For** an independent audit and implementation agent engaged to commission the DGO Digital
Operations estate for production operations.

**Baseline** the HEAD of `claude/system-remediation-gaps-ahpmsy` — the branch, not a commit.
(`a547300` was its head when this was written; the branch has moved since, so read the branch.)

**Measurement environment** Linux x86_64, Node v22.22.2, npm 10.9.7, 5 September 2026.

Every figure in this document names the command that produced it. Where a command and this
document disagree, the command governs.

---

## 1. Baseline

```
$ git log --oneline -1 origin/claude/system-remediation-gaps-ahpmsy
a547300 Merge c0sisf and the commissioning audit into the ahpmsy baseline
```

1,695 tracked files.

`claude/ecm-docs-branch-audit-c0sisf` and `claude/ecm-docs-commissioning-audit-5ffkz3` are
**merged into this baseline**. They were divergent forks of `0e42f8c`, not successive states, so
the merge chose between them. See `AGENT_COMMISSIONING_DIRECTIVE.md` §1 for the three collisions
and their resolutions.

Measured after the merge: `npm run test:node` exit 0 across 79 stages, `npm run readiness`
10 passed 0 failed, `npm run commission` NOT CLEARED on the same 2 configuration blockers,
`npm run tenant:validate` returning a verdict for the first time.

`COMMISSIONING_WALKTHROUGH.md` and `OPERATIONAL_PARAMETERS_AUDIT.md` each carry a consolidation
note stating that their counts describe a 679-file snapshot of `main` at `63d79ee`. Their
findings apply to this tree; their counts do not.

---

## 2. Required outcome

The estate reaches production operations when all four conditions hold:

| # | Condition | Verified by |
|---|---|---|
| O-1 | Both runtimes are configured against live endpoints | `npm run commission` reports no blockers |
| O-2 | No trigger token held in this repository is live in the tenant | **MET** — 0 of 43 disclosed signatures appear in the post-rotation `endpoint-register.json` (ITEM-22, RESOLVED) |
| O-3 | The authorisation posture is decided and implemented | posture declared by the agency; server-side enforcement present in the flows (G-04) |
| O-4 | Every register item is `RESOLVED` or carries a risk-acceptance record | `npm run readiness`; P-17 authorization record |

O-1 is repository-adjacent and needs operator-supplied values. O-2, O-3 and O-4 require
authority held outside this repository, recorded in §4.

---

## 3. Measured state of the baseline

Four gates run end to end:

| Gate | Command | Result |
|---|---|---|
| Verification suite | `npm run test:node` | exit 0 — 79 stages green |
| Readiness register | `npm run readiness` | 10 passed, 0 failed — 47 items, all citations resolve |
| Rotation worklist | `npm run rotation:worksheet` | writes clean — 39 workflows, 53 signatures, 28 files |
| Notification gate | `npm run tenant:validate` | returns a verdict — `ready: false`, 61 blocked, 0 errors |
| Commissioning gate | `npm run commission` | NOT CLEARED — 2 blockers |

`npm run commission`, in full:

```
  ⛔ BLOCKERS — 2
     Internal runtime: not configured   (config/config.local.js does not exist)
     Public portal:    not configured   (document-portal/config.local.js does not exist)
  ⚠️  WARNINGS — 2
     43 signed trigger URL(s) are committed to this repository, across 28 tracked file(s)
     pilot posture: authentication is inert and enforcement is advisory
  📋 MANUALS — 4     ✅ PASSES — 3
```

The gate's closing statement: *"Nothing here is a code defect. Every blocker is a commissioning
step that has to happen in your tenant, not in this repository."*

### Register position

`docs/deployment/PRODUCTION_READINESS_REGISTER.json`, 47 items, validated by `npm run readiness`.
19 are RESOLVED and 1 ACCEPTED, leaving **27 open**; `OPEN_ITEMS.md` narrates 22 of those, and
the register is authoritative:

| Status | Count | Definition (register's own vocabulary) |
|---|---|---|
| RESOLVED | 19 | resolution criteria met, evidence named |
| APPLIED_UNVERIFIED | 7 | executed against the tenant; observation outstanding |
| BLOCKED | 7 | waiting on a named dependency or an accountable party |
| DECISION_REQUIRED | 6 | no technical blocker; waiting on a decision |
| SPECIFIED_NOT_APPLIED | 3 | complete, test-passing artifact; not applied to the tenant |
| EVIDENCE_INCOMPLETE | 2 | cannot be built from information this repository holds |
| READY | 2 | repository side verified; execution is outside it |
| ACCEPTED | 1 | known, reasoned, deliberately unchanged |

The register declares four gaps in itself:

- No target dates exist anywhere in the estate. All `targetDate` fields are `ESTABLISHED_NONE`.
- Owners are recorded as roles. No individual is named.
- No item has been validated against the live tenant. Every status describes the repository.
- Two flow ids have no export here, so their contents are unstated.

---

## 4. Work breakdown by executing party

| Class | Executed by | Items |
|---|---|---|
| A — repository | the agent | §6.1, §6.2, ITEM-22 title reconciliation, gate maintenance, `config.local.js` staging |
| B — tenant apply | operator, on artifacts the agent prepares | CFG-1, CFG-2, MANUAL-2, MANUAL-3, ITEM-43, ITEM-48, ITEM-50, ITEM-51, and the verification half of ITEM-3, 4, 6, 11, 12, 17, 23, 30, 42, 44, 56 |
| C — decision or authority | named parties below | the table following |

### Class C — items the agent records and refers, and does not close

| Item | Subject | Accountable party |
|---|---|---|
| ITEM-7 | Seven third-party API keys live and unrotated | operator |
| G-04 | No server-side enforcement running | agency (posture); Power Automate (implementation) |
| MANUAL-4 | Personal data of ~785 individuals in scope | agency |
| MANUAL-1 | Routing table unapproved | agency |
| ITEM-41 | Content approval hides 12,079 of 15,936 rows from readers | agency |
| ITEM-37 | Sanctioned crossing absent from the live flow | agency |
| ITEM-52 | Read endpoints email record payloads to a shared mailbox | agency; platform technical owner |
| ITEM-57 | Archived and live design systems unreconciled | agency; design owner |
| ITEM-9 | 27 of 58 flows have no stated purpose | estate owner |

ITEM-22 is **RESOLVED**. Rotation was performed and reconciled against the tenant endpoint
register: 0 of the 43 disclosed signatures appear in it. The corpus is kept verbatim under D5 as
the record of the pre-rotation estate, and the signatures remain in git history — they are
burned, not removed.

---

## 5. Sequence

| Step | Action | Precondition |
|---|---|---|
| 1 | Reproduce §3 from the branch head, or report the differences | none |
| 2 | Close §6.2 (§6.1 is already fixed) | none |
| 3 | Compile one decision record per Class C item: question, evidence, options, consequence, accountable party | step 1 |
| 5 | Close CFG-1 and CFG-2: `npm run setup -- --values …`, then `npm run check:config`, `npm run check:config:portal`, `npm run verify:endpoints` | operator-supplied endpoint values |
| 6 | Run `npm run test:smoke` against the deployed hostname (MANUAL-3) | a deployed build |
| 7 | Convert the 11 `APPLIED_UNVERIFIED` items to `RESOLVED` by observation, one evidence file each | tenant access |
| 8 | Compile the production authorization record, with one risk-acceptance record per unresolved row (P-17) | steps 3–7 |

Steps 1–3 have no external dependency. Steps 5–8 do.

---

## 6. Findings from this audit

Both were produced by the estate's own tooling against `65bf118`. Both pass the existing gates.

### 6.1 The notification instrument's completion gate — FIXED

`npm run tenant:validate -- --strict` is named by `PENDING_WORK_REGISTER.md` as the gate on
P-01…P-17. It had never run once: the script arrived whole in `0f7bd87` from the governance
repository, importing `NotificationMatrix`, a name no commit on any branch has ever exported.
Three further faults lay behind it — the evidence path read from the repository root rather than
`docs/deployment/notification-instrument/`, a severity filter on `'critical'` where the
vocabulary is `'CRITICAL'`, and a field read as `state` where the config names it `status`.

All four are corrected and `tenant:validate` is wired. It returns `ready: false`, 61 blocked,
0 errors, 38 required. See `AGENT_COMMISSIONING_DIRECTIVE.md` §7.1.

It survived because nothing covered it: no npm script invoked it, no test imported it, and
`npm run readiness` validates only the commands cited by `PRODUCTION_READINESS_REGISTER.json`.

### 6.2 Three figures are in circulation for the disclosed-signature count

```
$ npm run commission | grep "signed trigger"
     43 signed trigger URL(s) are committed to this repository

$ npm run rotation | grep "disclosed signature"
  workflows with a disclosed signature : 39 (53 signatures, 28 files)
```

43 and 53, over the same 28 files. `README.md` §1 states that the two commands agree at 43.
ITEM-22's title, `COMMISSIONING_WALKTHROUGH.md` and `OPERATIONAL_PARAMETERS_AUDIT.md` state 55.
`npm run test:rotation` passes, as it checks that the worksheet regenerates rather than that it
agrees with the gate.

**Effect** The count that determines the rotation worklist is unsettled. One figure must be
established by measurement before ITEM-22 is executed.

---

## 7. Working rules

| # | Rule |
|---|---|
| R-1 | Every claim added to the estate names the command that produced it and that command's output. |
| R-2 | No endpoint, signature, host, mailbox, recurrence, retry count, expiry, owner name or date is supplied by the agent. Absent values are recorded as absent and referred to the party that holds them. |
| R-3 | A status advances only when the item's own `resolutionCriteria` are met with evidence named. `APPLIED_UNVERIFIED` is an open status. |
| R-4 | Class C items are recorded and referred, not closed. |
| R-5 | `npm run test:node` and `npm run readiness` are green on every commit. |
| R-6 | File deletion, history rewriting and repository visibility changes are not recorded as reducing credential exposure. |
| R-7 | Corrections are made forward with a dated note. `capturedState`, audit supersession chains and consolidation notes are not overwritten. |
| R-8 | Where two gates report different values for one quantity, the discrepancy is resolved by measurement before either value is acted on. |
| R-9 | Posture is set by `npm run commission -- --posture <development\|pilot\|enforced>`. Development wiring uses published signatures, which the gate refuses in pilot and enforced. |
| R-10 | No credential, signature, host or personal datum appears in a commit message, pull request or published page. |

---

## 8. Acceptance criteria

The engagement is complete when each of the following is true, with evidence named:

- [ ] §3 reproduced from `65bf118`, or the differences reported.
- [ ] §6.1 closed: `tenant:validate` exists, runs, and returns a verdict.
- [ ] §6.2 closed: one disclosed-signature figure, established by measurement, consistent across
      `npm run commission`, `npm run rotation`, `README.md` and ITEM-22.
- [ ] `npm run test:node` (75 stages) and `npm run readiness` green on the final commit.
- [ ] A decision record exists for every Class C item, addressed to its accountable party.
- [ ] No status advanced without resolution criteria met and evidence named.
- [ ] No value supplied by the agent under R-2.
- [ ] Every item still open names the party that must act and the condition that closes it.

### Out of scope

A declaration that the platform is live. O-2 is met. O-3 and O-4 remain, requiring a posture
decision by the agency and enforcement implemented in Power Automate, neither executable from
this repository.

---

## 9. Reference

| Document | Contents |
|---|---|
| [`COMMISSIONING.md`](./COMMISSIONING.md) | Commissioning path, steps 0–6; posture definitions |
| [`PRODUCTION_READINESS_REGISTER.json`](./PRODUCTION_READINESS_REGISTER.json) | 47 items with evidence; validated by `npm run readiness` |
| [`sharepoint/OPEN_ITEMS.md`](./sharepoint/OPEN_ITEMS.md) | The 22 open items in narrative form |
| [`notification-instrument/tenant-execution/PENDING_WORK_REGISTER.md`](./notification-instrument/tenant-execution/PENDING_WORK_REGISTER.md) | P-01…P-17; completion gate not runnable, §6.1 |
| [`INDEPENDENT_REVIEW_BRIEF.md`](./INDEPENDENT_REVIEW_BRIEF.md) | Independence criteria; disclosed provenance |
| [`../audits/OPERATIONAL_READINESS_AUDIT.md`](../audits/OPERATIONAL_READINESS_AUDIT.md) | Current position; supersedes `STATUS_REPORT.md` |
| [`../architecture/AUTHENTICATION_CONTRACT.md`](../architecture/AUTHENTICATION_CONTRACT.md) | G-04; obligations owed by the flows |
| [`COMMISSIONING_WALKTHROUGH.md`](../../COMMISSIONING_WALKTHROUGH.md) | Standing exposure finding; counts describe `63d79ee` |
