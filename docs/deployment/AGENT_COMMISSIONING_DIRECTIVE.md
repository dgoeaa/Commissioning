# Commissioning directive — authoritative

> ## RETIRED — the engagement it directed is closed
>
> **DO NOT COMMISSION FROM THIS DOCUMENT, AND DO NOT ENGAGE AN AGENT FROM IT.**
>
> This was the directive for an independent commissioning agent. No such agent was engaged; the commissioning work it directs was completed against this baseline, and the remaining tenant-side actions are specified step by step in the governance execution runbook.
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

**You are commissioning the NITDA DGO Digital Operations estate.** This document and the
repository you were given are your complete reference. Nothing else applies.

**Baseline** the HEAD of `digital-servant-commissioning`. **The branch is the baseline, not
a commit.** This document once pinned `a547300`; the branch moved 18 commits past it while the
pin stayed, so an agent reading it worked from a tree that no longer existed. Fetch the branch
and read what is there — `git rev-parse HEAD` is your baseline, and every count below is a
reading of some earlier commit unless a command in this repository reproduces it.

**Verification environment** Linux x86_64, Node v22.22.2, npm 10.9.7. Every figure below was
produced by running the named command against this baseline and observing the output.

---

## 1. Baseline authority

The baseline is the HEAD of `digital-servant-commissioning`. (`a547300` / 1,695 tracked
files was the reading when this was written; confirm the current one with `git ls-files | wc -l`
rather than trusting either number.)

`claude/ecm-docs-branch-audit-c0sisf` and `claude/ecm-docs-commissioning-audit-5ffkz3` have been
**merged into this baseline**. They were divergent forks of a common parent (`0e42f8c`), not
successive states, so the merge chose between them rather than fast-forwarding. Three choices
you must not silently reverse:

| Collision | Resolution |
|---|---|
| `tests/references.test.mjs` | c0sisf's version. It is the superset: it strips `<script>` bodies before running the CSS `url()` pattern **and** pins the archive's inherited breakage at 16. |
| `scripts/build-endpoint-workflow-ids.mjs` | ahpmsy's retired stub. The tenant register is the endpoint authority. |
| `rotation` | ahpmsy redefined it to `scripts/rotation-register.mjs` while `test:rotation` still checked the worksheet builder. Both are kept: `rotation` is the register, **`rotation:worksheet`** is the builder. |

`test:pendingplan` was moved out of the chain as `test:pendingplan:retired`. It asserts what
`--recover` would restore; `--recover` is retired on this baseline and refuses to run, so the
gate tests a path that cannot execute. The file is kept, not deleted. Do not re-add it to the
chain without restoring the recovery path first.

## 2. What you have, and what is withheld

You have a git repository of 1,433 files: the baseline working tree with
`docs/reference/foundational/` removed, as a single commit with no history.

**`docs/reference/foundational/` is withheld and will not be supplied.** 28 files under it carry
a signed trigger URL matching `sig=[A-Za-z0-9_-]{40,}` — all 28 under that one path, zero
elsewhere. **These signatures are superseded, not live.** The estate was rotated and reconciled
against `docs/reference/endpoint-register.json`; a scan of all 43 against that register returns
**0 matches**, so none authenticates an endpoint this platform calls. They are burned, and they
remain in git history where deletion reaches nothing.

It is withheld for the reason that still holds: it is ~20 MB describing the **pre-rotation
estate**. An agent reading it derives the wrong answer with confidence.

| Location | Files |
|---|---|
| `foundational/spas` | 14 |
| `foundational/flows/details` | 6 |
| `foundational/flows` | 3 |
| `foundational/canvas`, `lineage/…`, `flows/response-samples`, `flows/definitions/OTP_FLOWS/OTP_VERIFY`, `…/OTP_GENERATE` | 5 |

Scan of the repository you were given for the same pattern: **0 files**. History is a single
commit, so no signature is reachable by checkout.

**You must work from a git clone, not an unpacked archive.** Ten scripts and suites read
`git ls-files`: `tests/references.test.mjs`, `tests/check-secrets.mjs`,
`tests/commissioning.test.mjs`, `tests/visual-docs.test.mjs`, `tests/path-portability.test.mjs`,
`tests/package-portability.test.mjs`, `scripts/flow-inventory.mjs`,
`scripts/lib/endpoint-recovery.mjs`, `scripts/lib/published-signatures.mjs`,
`scripts/visual-docs-data.mjs`. Without `.git`, `npm run commission` reports a third blocker
(`secret ratchet FAILS`) that is the absence of git rather than a secret, and states
*"rotation could not be verified — this is not a git work tree … This is not a pass."*

`npm install` is **not required** for any gate except `npm run test:smoke`.

## 3. Credential rules — absolute

1. A `sig=` value is a bearer credential: 43 base64url characters, an HMAC-SHA256. Possession
   alone authorises invoking the flow. This applies to **current** signatures. The 43 in the
   withheld corpus are superseded and authorise nothing.
2. You do not have any current signature and **must not request one**. A human pastes signatures
   directly into `config.local.js`, which is git-ignored.
3. Never write a signature into any file other than `config.local.js`. Never into a commit, a
   comment, a log, an issue, a message, or a document.
4. Deleting a file, rewriting history, or making a repository private **revokes nothing**. Only
   regenerating the trigger in Power Automate does.
5. Never state that exposure has been reduced by any action other than rotation in Power
   Automate.

## 4. The system

Two independently bootable browser applications, zero build, no runtime dependencies, calling
Power Automate flows directly. **There is no backend between the page and the flows.**

| Application | Entry | Scale |
|---|---|---|
| DGO R11.6 Runtime | `index.html` | 29 routes |
| Document Portal | `document-portal/index.html` | PWA, public submission and tracking |

Correspondence arrives from four sources and moves through one lifecycle: intake → assignment →
work → review → dispatch → archive. Every mutating action is declared, owned, audited and
idempotent; an undeclared mutating action throws rather than executing.

Authentication is provisioned and **inert**. Caller identity is a client-asserted `userEmail`
from `localStorage`; RBAC is advisory. Editing one storage key escalates a viewer to
`systemAdmin`. Whatever gates who may load the interface does not sit between the page and the
flows: a flow called directly answers whoever calls it.

## 5. Verified state of the baseline

98 verification-shaped npm scripts were run individually against the complete baseline, with no
`npm install`:

| Gate | Command | Result |
|---|---|---|
| Verification suite | `npm run test:node` | **exit 0 — all 79 stages green** |
| Readiness register | `npm run readiness` | **10 passed, 0 failed** — 47 items |
| Notification gate | `npm run tenant:validate` | runs and returns a verdict: `ready: false`, 61 blocked, 0 errors, 38 required |
| Rotation worklist | `npm run rotation:worksheet` | 39 workflows, 53 signatures, 28 files; 25 endpoint keys |
| Commissioning gate | `npm run commission` | **NOT CLEARED — 2 blockers** |

`npm run commission`: 2 blockers (internal runtime not configured; public portal not configured),
2 warnings (43 signed trigger URLs across 28 files; pilot posture inert authentication), 4 manual
obligations, 3 passes. Its closing statement: *"Nothing here is a code defect. Every blocker is a
commissioning step that has to happen in your tenant, not in this repository."*

Seven gates fail on the complete baseline, each verified and each expected:

| Gate | Cause |
|---|---|
| `commission` | The 2 configuration blockers above. By design until values are supplied. |
| `check:config`, `check:config:portal` | `config.local.js` does not exist. By design. |
| `check:package`, `check:package:portal` | `dist/` has not been built. By design. |
| `check:values` | Requires an argument: `npm run check:values -- <file>`. Correct behaviour. |
| `test:wiring` | `--strict` exits 1 on 6 boundary crossings. The same run reports 58/58 operations and 7/7 endpoints wired, and `npm run wiring` without `--strict` exits 0. Registered as **ITEM-36, RESOLVED** — a decision was taken. Do not "fix" it. |

## 6. Expected failures in the repository you were given

Withholding `docs/reference/foundational/` causes **8 further gates to fail**. All eight were
confirmed to pass on the complete baseline. They are consequences of withholding, not defects.
**Do not remediate them. Do not report them as findings.**

`test:refs` (3 broken links into the withheld path) · `test:flowmap` · `test:provisioning` ·
`test:commissioning` · `test:packaging` · `rotation:worksheet` · `test:rotation` · `test:node`
(aborts at its stage 2, `test:refs`).

Totals from the delivered repository: **81 PASS, 15 FAIL, 1 requires dependencies**, of 98.

**`npm run test:node` is a `&&` chain of 79 stages and `test:refs` is stage 2.** A failure there
leaves **77 stages unrun**. Never treat a `test:node` failure as a suite result. Run the stages
individually and evaluate each.

**The rotation worklist is already generated and committed**, so you have it without the
credentials: `docs/deployment/rotation/ROTATION.md`, `rotation-worksheet.json`,
`values.template.txt`. Verified signature-free. Only *regenerating* it needs `foundational/`.
`npm run rotation` (the register) is a different tool and passes.

## 7. Defects

7.1 is **fixed on this baseline** and recorded so the repair is not undone. 7.2 stands.

### 7.1 The notification instrument's completion gate — FIXED, do not regress

`PENDING_WORK_REGISTER.md` states production is ready when
`npm run tenant:validate -- --strict` returns `ready: true`. That command had **never run once**
in this repository. The script arrived whole in commit `0f7bd87` from the governance repository
and carried four faults, all now corrected:

| Fault | Was | Now |
|---|---|---|
| Import | `NotificationMatrix` — a name no commit on any branch has ever exported | `RequiredNotifications`, whose length is 38, exactly the count the script had hard-coded |
| Evidence path | `deployment/tenant-execution` from the repository root — no such directory | `docs/deployment/notification-instrument/tenant-execution` |
| Severity filter | `x.severity === 'critical'` — the vocabulary is uppercase, so the critical set was always empty | `x.severity === 'CRITICAL'` (10 rows) |
| Status field | `x.state !== 'PROVISIONED'` — the field is named `status`, so `state` was always `undefined` | `x.status !== 'PROVISIONED'` |

`tenant:validate` is now wired in `package.json`. Verified: it returns `ready: false`, 61 blocked,
0 errors, and `--strict` exits 1. The blocked list is the real tenant backlog — agency decisions
not APPROVED, tenant inventory not captured, connections unverified, 38 requirements with no
tenant result, rollback not rehearsed, authorisation not approved.

**It survived because nothing covered it**: no npm script invoked it, no test imported it, and
`npm run readiness` validates only the commands cited by `PRODUCTION_READINESS_REGISTER.json`,
while `PENDING_WORK_REGISTER.md` is a different register outside that coverage. If you add a
register, add its citation check too.

### 7.2 Three figures are in circulation for the disclosed-signature count

```
$ npm run commission | grep "signed trigger"
     43 signed trigger URL(s) are committed to this repository

$ npm run rotation | grep "disclosed signature"
  workflows with a disclosed signature : 39 (53 signatures, 28 files)
```

**43 and 53, over the same 28 files.** `README.md` §1 asserts that these two commands "now agree
at 43". They do not. A third figure, **55**, is carried by ITEM-22's title in the readiness
register, by `COMMISSIONING_WALKTHROUGH.md` and by `OPERATIONAL_PARAMETERS_AUDIT.md`.
`npm run test:rotation` passes, because it checks the worksheet regenerates, not that it agrees
with the gate.

**Required:** establish one figure by measurement, then make `commission`, `rotation:worksheet`
and `README.md` §1 agree. Rotation has already been performed, so this is now a documentation
defect rather than a gate on a security action — but three figures for one measured quantity is
still a defect, and the corpus is the historical record of what was burned.

> Regenerating the worksheet requires `foundational/`, which you do not have. Determine the
> correct figure by reading the two counters' implementations —
> `scripts/lib/published-signatures.mjs`, `scripts/commission-check.mjs`,
> `scripts/build-rotation-worksheet.mjs` — and establish which counting rule is right. State the
> rule, correct the documents to one figure, and record that the physical recount must be run by
> a party holding `foundational/`.

## 8. The open inventory — 27 items

`docs/deployment/PRODUCTION_READINESS_REGISTER.json` holds 47 items: 19 RESOLVED, 1 ACCEPTED,
and **27 open**. ITEM-22, ITEM-17, ITEM-3, ITEM-4 and ITEM-42 were closed on 2026-09-08 against
the reconciled register — do not re-open them. (`docs/deployment/sharepoint/OPEN_ITEMS.md` narrates 22 of them; the register is
authoritative.) Validated by `npm run readiness`: 10 passed, 0 failed.

> **ITEM-22 is RESOLVED, not blocking.** Rotation was performed and reconciled against the
> tenant endpoint register; 0 of the 43 disclosed signatures appear in it. Earlier revisions of
> this directive stated that ITEM-22 gated every posture above development. That is withdrawn.
> Do not re-open it, and do not schedule rotation work against it.

### You may not close these. Record and refer them.

| Item | Status | Subject | Accountable party |
|---|---|---|---|
| ITEM-7 | BLOCKED | Seven third-party API keys live and unrotated | operator |
| ITEM-2 | BLOCKED | Tenant write path never executed | operator |
| CFG-1 | BLOCKED | Internal runtime not configured | operator |
| CFG-2 | BLOCKED | Public portal not configured | operator |
| G-04 | BLOCKED | No server-side enforcement running | agency (posture); Power Automate (implementation) |
| ITEM-9 | BLOCKED | 27 of 58 flows have no stated purpose | estate owner |
| MANUAL-3 | BLOCKED | Browser suite against the deployed build | operator |
| MANUAL-1 | DECISION_REQUIRED | Routing table unapproved | agency |
| MANUAL-4 | DECISION_REQUIRED | Personal data of ~785 individuals in scope | agency |
| ITEM-37 | DECISION_REQUIRED | Sanctioned crossing absent from the live flow | agency |
| ITEM-41 | DECISION_REQUIRED | Content approval hides 12,079 of 15,936 rows | agency |
| ITEM-52 | DECISION_REQUIRED | Read endpoints email payloads to a shared mailbox | agency; platform technical owner |
| ITEM-57 | DECISION_REQUIRED | Archived vs live design system authority | agency; design owner |

### Repository work exists here, but application is the operator's

| Item | Status | Subject | Resolution criteria |
|---|---|---|---|
| ITEM-48 | SPECIFIED_NOT_APPLIED | Portal promises four emails the estate does not send | `npm run notifications -- --check` derives PROVISIONED for RN-001, RN-005 |
| ITEM-50 | SPECIFIED_NOT_APPLIED | Codes, correspondence, reports go to a fixed mailbox | PROVISIONED for RN-006, RN-016, RN-021, RN-024, RN-037 |
| ITEM-51 | SPECIFIED_NOT_APPLIED | Officers never told of assignments or approvals | PROVISIONED for RN-009, RN-011, RN-012, RN-015, RN-017, RN-018, RN-019, RN-034, RN-036, RN-038 |
| ITEM-25 | EVIDENCE_INCOMPLETE | 15 of 19 DYNAMIC_ACTIONS answer 501 | `npm run designerpaste` builds the writes, no operation answers 501 |
| ITEM-40 | EVIDENCE_INCOMPLETE | 13 of 14 flow triggers unverified | all fourteen recorded POST with a request schema, from an export |
| MANUAL-2 | READY | Test records cleared before real correspondence | no test row remains; sequence start recorded |
| ITEM-43 | READY | Portal calls the defective OTP flow | OTP_VERIFY resolves to `c5e314c7-68b5-4bdc-8935-0954ef6a256d` |

### Applied to the tenant, observation outstanding — 11 items

`APPLIED_UNVERIFIED` is an **open** status. Each closes only on observation against the tenant.

ITEM-3 (`npm run wiring` reads 15/49 operations, 2/6 endpoints, crossings 12) · ITEM-4 (chosen
route applied and reflected in wiring) · ITEM-6 (a citizen's status can change) · ITEM-11
(unknown reference returns 404; wrong-email pairing returns a materially identical 404) ·
ITEM-12 (a submission with an attachment produces a row in Portal Attachments) · ITEM-17
(`npm run wiring` reads 59/59 required operations) · ITEM-23 (index pass reports 5 already
indexed; assignment and flag writes return 200) · ITEM-30 (a telemetry row carries a run
record) · ITEM-42 (sitemap validates; robots.txt names it absolutely) · ITEM-44 (one request
reaches a matched Switch case; one code issued through the platform verifies through it) ·
ITEM-56 (a live OTP verify call returns `Access-Control-Allow-Origin` equal to the portal's
origin).

### The register's four declared gaps

Reproduce them; do not close them.

- No target dates exist anywhere in this estate. Every `targetDate` is `ESTABLISHED_NONE`.
- Owners are roles, not people. No individual is named.
- No item has been validated against the live tenant. Every status describes the repository.
- Two flow ids — `5e13db77-c1e1-4ed4-b109-cb5d9d247b49` and
  `21d4bfd3-f595-46fa-81bb-c29dabc12e7a` — have no export here; their contents are unstated.

## 9. Commissioning procedure

Steps 1–3 have no external dependency. Steps 4 onward require credentials or authority you do
not hold; for each, prepare the artifact and refer the execution.

```bash
# 1 — establish state
npm run readiness                 # expect: 10 passed, 0 failed
npm run commission                # expect: NOT CLEARED, 2 blockers
npm run wiring                    # expect: 58/58 operations, 7/7 endpoints
# run test:node stages individually; do not rely on the chain
```

2. Repair §7.1. Add `tenant:validate`, fix the import and the path, confirm a verdict.
3. Repair §7.2. Establish one signature figure; reconcile all four locations.
4. Produce one decision record per §8 Class-C item: question, evidence, options, consequence,
   accountable party. This is a deliverable, not a note.
6. On operator-supplied values only:
   `npm run setup -- --values <file>`, then `npm run check:config`,
   `npm run check:config:portal`, `npm run verify:endpoints`.
7. On a deployed build only: `npm run test:smoke` against the deployed hostname (MANUAL-3).
8. Convert the 11 `APPLIED_UNVERIFIED` items by observation, one evidence file each.
9. Compile the production authorisation record with one risk-acceptance record per unresolved
   row (P-17).

## 10. Working rules

1. Every claim you record names the command that produced it and that command's output.
2. Supply no value you were not given: no endpoint, signature, host, mailbox, recurrence, retry
   count, expiry, owner name or date. Record absent values as absent and name who holds them.
3. Advance a status only when the item's own `resolutionCriteria` are met with evidence named.
4. Never skip, disable, quarantine or weaken a test to reach green.
5. Mutation-test every fix: break it deliberately, confirm the test goes red, restore it.
6. Never add a check that asserts shape while meaning goes unverified.
7. Correct forward with a dated note. Do not overwrite `capturedState`, audit supersession
   chains, or the consolidation notes on the two root audit documents.
8. `COMMISSIONING_WALKTHROUGH.md` and `OPERATIONAL_PARAMETERS_AUDIT.md` each carry a
   consolidation note stating their counts describe a 679-file snapshot of `main` at `63d79ee`.
   Their findings apply; their counts do not.

## 11. Prohibitions

- Do not use, reference, or request any branch other than `digital-servant-commissioning`.
- Do not request `docs/reference/foundational/` or any signature.
- Do not remediate the 9 withholding-induced failures in §6, or the 7 expected failures in §5.
- Do not declare the platform live. That requires a posture decision by the agency on ~785
  individuals' personal data and enforcement implemented in Power Automate, neither of which is
  executable from this repository. Rotation is already done.

## 12. Acceptance criteria

- [ ] §5 reproduced, or every difference reported with its command output.
- [ ] §7.1 closed: `tenant:validate` exists, runs, returns a verdict.
- [ ] §7.2 closed: one signature figure, consistent across `commission`, `rotation`,
      `README.md` §1 and ITEM-22, with the counting rule stated.
- [ ] Every gate that passed in §5 still passes; the 9 in §6 remain untouched.
- [ ] A decision record exists for each of the 14 Class-C items in §8.
- [ ] No status advanced without resolution criteria met and evidence named.
- [ ] No value invented under rule 10.2.
- [ ] Every still-open item names the party that must act and the condition that closes it.
