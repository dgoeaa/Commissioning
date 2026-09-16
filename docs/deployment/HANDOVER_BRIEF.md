# Handover brief

> **GENERATED FILE — do not edit by hand.** Built by `scripts/build-handover-brief.mjs` from the
> master register, the external execution plan, the declared sources, the ownership register and
> `package.json`. `npm run brief -- --check` fails if it drifts from any of them.

**Status: a cover letter, not a runbook.** It owns no steps and restates none. The only commands in
it are the four in §8, which verify that what you received is intact and unbroken.

**Read this once, then open [`HOW-TO-USE-THIS-BUNDLE.md`](./HOW-TO-USE-THIS-BUNDLE.md) and work from
there.** This page is the cover letter for the export. It tells you what you are holding, what is
missing on purpose, what you must not change, and how to prove you have broken nothing. It carries
no steps. The steps live in the three runbooks the entry document names.

---

## 1. What you have been given

**A git repository**, not a folder of files. Every file that is tracked on one branch is in it, at
one commit. `EXPORT_MANIFEST.json` beside them states which commit, how many files, and a SHA-256
for each one — check that first if the transfer was long or lossy.

That it is a repository is load-bearing, not incidental. Twelve scripts in here ask git which files
are tracked, and `npm run test:node` reaches one of them at its second stage. **Keep the `.git`
directory, and do not unpack this inside another repository** — in the first case the gate stops
dead, and in the second some checks quietly answer for the wrong repository.

The history is shallow on purpose: deep enough for the readiness gate to reach the commit the
register is compiled against, and no deeper. `git log` will not show you the whole story, and is
not meant to.

4 kinds of thing are in there, and telling them apart matters more than anything else on this
page:

| Kind | What it means for you | Where it lives |
|---|---|---|
| **Specification** | Binding. Change the code to match, or change this and say why | `docs/architecture/`, `docs/reference/flow-contracts/` |
| **Procedure** | Binding while you are doing it | `docs/deployment/`, `docs/cutover/` |
| **Record** | Historical. Never edit to make it agree with the present | `docs/audits/`, `docs/forensic/`, `docs/handoff/` |
| **Harvest** | Untrusted. Prefer the contract over the sample | `docs/reference/foundational/` |

Put plainly:

- **A specification is a promise the system must keep.** If the code disagrees with it, that is a
  defect in one of them, and you say which.
- **A procedure is binding while you are executing it** and not before or after.
- **A record is what somebody found on a date.** It is never edited to agree with today. If a
  record is wrong now, that is not a correction to make — it is a finding to report.
- **A harvest is raw material that was captured, not written.** Prefer the contract to the sample,
  every time.

---

## 2. What is missing, on purpose

Nothing in this export will let you reach the tenant. That is deliberate, not an oversight, and
you should not ask for a shortcut around it.

| Missing | Why | What you do instead |
|---|---|---|
| `config/config.local.js` and `document-portal/config.local.js` | They hold signed Power Automate URLs. A signed URL is a credential: holding one is enough to invoke the flow. Both are git-ignored, so no commit can carry them | Create your own. The portal runbook §4 is the section that does it |
| A values file (`~/dgo-values.txt`) | Same reason. It is produced on the machine that will host the system, by a harvest step, and shredded after | Produce your own on your own host |
| Tenant credentials of any kind | They are not the repository's to give | Obtain them from the party who owns the tenant, with the accesses listed in §0 of the entry document |
| A filled-in escalation contact | Nobody in the repository knows who yours is | Fill §0 of `governance/EXECUTION-AGENT-BRIEF.md` before you start. **If the escalation recipient is blank, do not start** — an escalation with no recipient is a stop with no resumption |

---

## 3. Something in here looks like a credential. It is not.

You will find **43 signature-shaped strings across 28 files** under
`docs/reference/foundational/`, which holds 262 files in all. They look exactly like live
Power Automate credentials because that is what they once were.

They are dead. The estate was re-issued and every one of those triggers was rotated; the current
endpoints point at different workflows. They are kept as the record of what was built.

So: **do not try to use them, and do not report them as a leak.** Both are wasted effort. What is
worth taking from them is the rule they illustrate: deleting a file does not revoke a credential.
Only re-issuing the trigger does.

If you find a signature anywhere *outside* that directory, that is different, and it is a real
finding. `npm run test:secrets` is the check that draws exactly that line.

---

## 4. What you must never edit

**Every generated document — and there are 205 of them.** They are written by a script from a
register. Editing one does not change the system: it breaks the build, and your edit is gone the
next time anything regenerates.

**How to tell, for any file in front of you: look at the top.** Every one of the 205 says so in
its first few lines and names the script that writes it. Reading that banner is how the 205 were
counted, so the same test works on whichever file you happen to have open — there is no list to
consult and none is printed here.

Three of them are the ones you are most likely to reach for, because they read like a plan:

- `docs/deployment/EXECUTION_RUNBOOK.md` — 48 **Steps** blocks, one per open item, in dependency order, generated from `PRODUCTION_READINESS_REGISTER.json`
- `docs/deployment/ACTION_PLAN.md` — 24 **Do** blocks, one per open item, with its closing condition, generated from `PRODUCTION_READINESS_REGISTER.json`
- `docs/deployment/EXTERNAL_EXECUTION.md` — 58 **Do** blocks, one per open item, grouped by who holds the access and ordered inside each group by the dependency graph the sources state, generated from `MASTER_REGISTER.json`

**To change what a step says, change the register it is generated from, then regenerate.**
A document may render steps it does not own, provided every step is generated from a declared source and a --check fails on drift. Two renderings of one JSON are one truth; two hand-written copies are two.

Two documents are the opposite case and it is worth knowing the difference:
`PORTAL-TENANT-RUNBOOK.md` and `NOTIFICATION-TENANT-RUNBOOK.md` are written by hand and they **own**
their steps — no register sits behind them. You still do not edit them while executing them, but
if you find a step that is wrong, those two are where the correction belongs.

**Every record.** `docs/audits/` and the directories named `evidence` are what was true on a date.
They are not edited, ever — not to fix a typo, not to reflect a later correction. A record that
has been overtaken is superseded by a new document that says so, and the old one stays as it was.

---

## 5. What is authoritative when two things disagree

In order, highest first:

1. **A command.** Where a document and a command disagree, the command governs. This estate has
   been wrong in prose and right in code often enough that the rule is worth stating plainly.
2. **The registers.** `PRODUCTION_READINESS_REGISTER.json` is the record of what is open. The
   other 4 counted sources are declared in `OUTSTANDING_SOURCES.json`.
3. **The generated documents**, which are those registers rendered for reading.
4. **Everything else**, which is context.

Three documents in this export brief a reader who no longer exists and carry a banner saying
**DO NOT COMMISSION FROM THIS DOCUMENT**: `AGENT_HANDOVER.md`, `COMMISSIONING_AGENT_BRIEF.md` and
`AGENT_COMMISSIONING_DIRECTIVE.md`. They are kept because deleting a superseded document loses the
record that it existed. Do not work from them.

---

## 6. How much is left

**58 items are open. 58 are closed.** The open ones come from 5 separate sources, which is
why no single register answers the question on its own and why `MASTER_REGISTER.json` exists.

| Source | Where it lives |
|---|---|
| `readiness` | `docs/deployment/PRODUCTION_READINESS_REGISTER.json` |
| `governance` | `docs/reference/governance-estate-position.json` |
| `pending-work` | `docs/deployment/notification-instrument/tenant-execution/PENDING_WORK_REGISTER.md` |
| `notification-audit` | `docs/audits/NOTIFICATION_ESTATE_FULL_SCOPE_ASSESSMENT_2026-09-09.md` |
| `flow-truth-review` | `docs/audits/FLOW_TRUTH_PERSISTENCE_REVIEW.md` |

**Not one of the 58 can be finished inside the repository.** Every one needs a tenant, a
decision, or a person with an access this export cannot contain. They are grouped by who holds
that access:

| Track | What it is | Steps | Who can do it |
|---|---|---:|---|
| **live-call** | Prove a write reaches the tenant | 4 | operator |
| **operator** | The rest of the operator’s tenant work | 9 | operator |
| **governance** | Governance lists and the flow registry | 9 | tenant administrator, with the platform technical owner |
| **decisions** | Decisions only the agency can take | 8 | the agency |
| **platform** | Platform technical owner | 8 | platform technical owner |
| **notification** | The notification workstream | 20 | operational owner, and whoever owns the workstream |

14 of them gate commissioning — until they close, `npm run commission` reports NOT CLEARED:
`ITEM-2`, `G-04`, `ITEM-23`, `ITEM-30`, `ITEM-12`, `ITEM-11`, `ITEM-6`, `MANUAL-2`, `MANUAL-3`, `ITEM-37`, `ITEM-41`, `ITEM-43`, `ITEM-44`, `ITEM-56`.

The full text of each step, with its actions, its inputs and what closes it, is in
[`EXTERNAL_EXECUTION.md`](./EXTERNAL_EXECUTION.md). Read that after the entry document, not
instead of it.

---

## 7. The 8 values you must bring back

Most steps close on evidence you produce and keep. These 8 are different: they produce a value
the repository needs written into it, and until that happens the repository goes on describing a
state that is no longer true.

The right-hand column is quoted from the register, so a cross-reference in it — "the registry
stand-up below", for instance — points into [`EXTERNAL_EXECUTION.md`](./EXTERNAL_EXECUTION.md),
where that step is written out in full.

| Step | What has to come back |
|---|---|
| **ITEM-2** — The tenant write path has never been executed | The dry-run console output, recorded against the flow it was run on — the item’s own validation names exactly this. |
| **ITEM-23** — Five index targets unset on hot-path lists | The provisioner’s index pass report: it must read 5 already indexed. |
| **ITEM-40** — Four endpoint triggers answer every verb and five carry no request schema | An export of each endpoint trigger showing method POST and a request schema. |
| **ITEM-30** — Portal Flow Telemetry.RunRecordJson is not provisioned, so no run record is retained | A telemetry row carrying a run record. |
| **GOV-01** — Governance lists: one authoritative site, provisioned and verified; the registry lists remain | The seven list GUIDs the provisioner returns, into docs/reference/governance-list-registry.json — until they are recorded, the repository goes on describing those lists as unprovisioned. |
| **GOV-06** — The exported flow definitions and the tenant register cannot be joined | Nothing here: this closes when DGO_HTTPFlowRegistry carries FlowId and WorkflowId in one row, which is the registry stand-up below. |
| **GOV-02** — Every governance list existed two or three times; the 17 duplicates are now renamed, not yet deleted | Confirmation that the seventeen renamed duplicates are deleted, and from which site. |
| **ITEM-41** — Content approval is still ON for Global Tracking Queue — 12,079 of 15,936 rows are invisible to readers | The recorded decision, and if approval is to be off, a read-back confirming EnableModeration is false. |

Send them as text. Not a screenshot: a value that has to be retyped from an image gets retyped
wrong, and these are identifiers.

---

## 8. How to prove you have broken nothing

Run this before you change anything, and again after. Keep both outputs — the difference between
them is what you actually changed.

```bash
npm run test:node         # the gate: 140 stages, exit 0 when clean
npm run commission        # the commissioning verdict, computed from the record
npm run outstanding       # one total across the 5 declared sources
```

**You do not need `npm ci` for any of those three.** They need node and git and nothing else — no
install, no `node_modules`, no network. That is measured on this branch, not assumed. `npm ci` is
needed only for `npm run test:smoke`, the browser suite, which is not the gate.

`npm run test:node` is the one that matters. It is not a test suite in the usual sense — most of its
stages regenerate a document and fail if the result differs from the committed one. That makes it
the check that you have not silently edited something generated.

Three things it will report that are **not** your fault and are not regressions:

- **`CFG-1` and `CFG-2` are blockers in every clone, permanently.** The work is done and evidenced;
  the evidence is a git-ignored local config by design, so no command run here can ever confirm it.
  The register carries them as `DISCHARGED_UNTRACKABLE` and the gate says so where it reports them.
  **Those two, and only those two.** `npm run commission` should report exactly **2 blockers**. If it
  reports a third — a secret-ratchet failure in particular — you are not looking at a defect in this
  repository: you are running outside a git working tree, and the ratchet is failing to ask git for
  the file list. Restore the `.git` directory and run it again.
- **The browser suite (`npm run test:smoke`) does not pass clean, and is not the gate.** It needs a
  real browser, some of its assertions are not deterministic between runs, and its results depend on
  which browser build you have. Run it if you want the signal; do not treat a failure there as
  something you caused, and do not chase it. `npm run test:node` is the gate to hold green.

---

## 9. When to stop

Stop and escalate — do not work around, and do not improvise — on any of these:

- Any access you were told you would have is not actually there.
- Any operation returns **403**. That is permission, not procedure, and retrying will not fix it.
- A read-back reports `MISSING`, `RESERVED NAME` or `UNREADABLE`.
- A script that writes reports work on a **third**, unmodified run. It should report nothing to do.
  If it does not, it is not idempotent and something is being created twice.
- A row exists only in a list you were about to delete. Deleting it would destroy the only copy.
- Anything requires one of the agency decisions. **Those are not an executor's to make**, and there
  are 8 of them waiting.

---

## 10. What "finished" looks like

Not "all the steps were run". This:

1. `npm run commission` reports **CLEARED**.
2. `npm run test:node` still exits 0 — the same 140 stages, green.
3. The 8 carry-back values in §7 have been sent, and are in the repository.
4. For every step you executed, you have returned: the relay line the script printed, the outcome
   (`COMPLETE`, `PARTIAL`, `BLOCKED` or `NOT ATTEMPTED`), and any deviation from what the section
   said would happen, quoted exactly.

The fourth is the one that gets skipped. A step with no recorded outcome is indistinguishable from
a step that was never run, and the next person to look at this will have to do it again to find out.

---

Now open [`HOW-TO-USE-THIS-BUNDLE.md`](./HOW-TO-USE-THIS-BUNDLE.md).
