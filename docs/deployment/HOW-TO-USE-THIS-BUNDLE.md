# How to use this bundle

> **GENERATED FILE — do not edit by hand.** Built by `scripts/build-bundle-guide.mjs` from the
> ownership register, the closure disposition, the governance position, and the section headings of
> the runbooks themselves. `npm run bundleguide -- --check` fails if it drifts from any of them.

**This is the only entry document.** It says which documents carry steps, what you do with them,
in what order, and what you hand back. Nothing else in this bundle is a starting point — if a file
is not named here, it is context, evidence, or an input a step will send you to.

*One thing comes before it, and only if you are outside the organisation that built this:*
[`HANDOVER_BRIEF.md`](./HANDOVER_BRIEF.md) *is the cover letter for an exported copy — what you
hold, what is deliberately missing, what you must never edit. It carries no steps. Read it once,
then come back here.*

---

## 0. Who is doing this, and what they need

This bundle assumes **one operator with a browser and a terminal**, or **an agent paired with a
human who pastes into the browser and returns the console output**. Either works. Nothing here
needs PowerShell, PnP, or an Entra app registration.

**Before anything else, fill §0 of [`governance/EXECUTION-AGENT-BRIEF.md`](./governance/EXECUTION-AGENT-BRIEF.md).**
Seven inputs cannot be derived from any artefact in this bundle. **If §0.4 — the escalation
recipient — is blank, do not start.** An escalation with no recipient is a stop with no resumption.

Access required, all of it before §1 of anything:

| Access | Proves out by |
|---|---|
| SharePoint Site Owner on the governance site | Site contents loads |
| Power Automate maker in the environment | A flow opens for editing |
| Power Automate **run history** in that environment | Any flow → Run history |
| A clone of the repository, or an export of it from `npm run export` — **with its `.git` directory** | `npm run commission` runs and reports 2 blockers, not 3 |
| node. Not `npm ci`: the gate needs no dependencies | `npm run test:node` runs |

---

## 1. The order, and why it is that order

```
    fill §0 of the brief
            │
            ├── A. Portal runbook §0 → §4  ──┐   (prerequisites, then both
            │                                │    surfaces configured)
            │                                ├─ A and B are independent
            └── B. Governance runbook      ──┘   and run in parallel
                   Steps 1 → 7
                        │
                        ├── C. Notification runbook §1 → §4   (needs A at §4)
                        │
                        ├── D. Portal runbook §5 → §11        (needs A and B)
                        │
                        └── E. The 18 items in ACTION_PLAN.md
```

**Portal §0 is five prerequisites** — repository write access, a connectivity dry run, the role
catalogue seed, the writeback flow, and recording the workflow ids. Nothing else works until 0.3
has loaded the role catalogue: every internal flow resolves its caller against it.

**A and B are independent and run in parallel.** C cannot start until the portal runbook reaches
§4, because notification carriers send through a connection §4 configures. D depends on both. E is
last because most of its items close conditions the earlier work creates.

---

## 2. What each of the 3 step-carrying documents is for

### `PORTAL-TENANT-RUNBOOK.md` — Portal and endpoint commissioning

10 console scripts. Run it front to back; the sections are ordered by dependency, not by topic.

| Section | What it does |
|---|---|
| `§0` | Prerequisites — five steps that were filed under rationale |
| `§1` | Repository lineage — decide once, then never again |
| `§2` | SharePoint estate |
| `§3` | Rotate all 39 trigger URLs |
| `§4` | Configure both surfaces |
| `§5` | Commissioning gate |
| `§6` | First live invocation — this is item 6.1 |
| `§7` | Deploy both front ends — item 6.10 |
| `§8` | Verify against the deployed host |
| `§9` | Trigger hardening — item 6.3 |
| `§10` | Content approval — item 6.6 |
| `§11` | Close-out |

**How a console step works, every time:** open the named file from `scripts/`, select all, copy,
paste into the browser console on the site the section names, press Enter. Scripts that write are
dry-run by default — read the table, then set `DRY_RUN = false` at the top of the pasted text and
paste again. **Paste a third time unmodified**; a script that reports work on the third run did not
do what it claimed on the second.

### `governance/GOVERNANCE-TENANT-RUNBOOK.md` — Governance tenant remediation

11 console scripts. **Steps 2, 2.7 and 3a–3c are already complete against the tenant** — re-running
them is safe and reports "present, 0 created", which is how you confirm you are where the runbook
thinks you are.

| Step | What it does |
|---|---|
| `Step 1` | Back up, before anything |
| `Step 2` | Provision the ten governance lists on the authoritative site |
| `Step 3` | Retire the 17 duplicate list instances |
| `Step 4` | Apply the flow corrections |
| `Step 5` | Provision the registry lists the corrected flows need, then validate |
| `Step 6` | Adopt `WorkflowId` as the permanent join |
| `Step 7` | Measure the out-of-band flow-truth provisioning (GOV-11) |

**Step 3d — the delete — is gated and must stay gated** until Step 4 identifies who wrote to the
duplicate site on 2026-08-31, or the 14-day substitute control in the brief is satisfied and
recorded.

### `NOTIFICATION-TENANT-RUNBOOK.md` — Notification remediation

No console scripts; every step is a Power Automate or SharePoint action.

| Section | What it does |
|---|---|
| `§1` | Baseline and connections |
| `§2` | Release 0 containment — do this first |
| `§3` | Event carriers and the scheduled processor |
| `§4` | Cutover, rollback and hypercare |

**§2 is the one to do first and not batch with the rest.** It stops verification codes going to a
fixed mailbox instead of the person who asked for one — a credential delivered to the wrong
recipient, reported as sent.

---

## 2a. Two documents render steps they do not own

- `EXECUTION_RUNBOOK.md` — 48 **Steps** blocks, one per open item, in dependency order, generated from `PRODUCTION_READINESS_REGISTER.json`
- `ACTION_PLAN.md` — 24 **Do** blocks, one per open item, with its closing condition, generated from `PRODUCTION_READINESS_REGISTER.json`
- `EXTERNAL_EXECUTION.md` — 58 **Do** blocks, one per open item, grouped by who holds the access and ordered inside each group by the dependency graph the sources state, generated from `MASTER_REGISTER.json`

They are one truth in two shapes, not two truths: both are generated from the same register and a
`--check` fails the build if either drifts. **Read them; never edit them.** To change a step,
change the register.

---

## 3. What every other directory is for

Paths are written from the repository root. This page sits in `docs/deployment/`.

| Directory | When you open it |
|---|---|
| `scripts/` | Every time a runbook names a `.browser.js` file — 21 of them are here. Never pick one off the directory listing: go to the runbook section that names it, which carries the mode, the site and the pass condition |
| `docs/deployment/internal/flows/designer-paste`<br>`docs/deployment/sharepoint/flows/designer-paste` | When a step says to paste a designer package. 56 files across the two, of which 33 are `*.variables.*` carriers. The carrier is pasted **before** the flow package, because the package reads declarations the carrier supplies |
| `docs/deployment/` | This directory. `ACTION_PLAN.md` for the 18 remaining items and their closing conditions; the registers they are generated from are the `.json` files beside it. `*-spec.json` is what a console script was generated from — read one to understand what a script will do, never to drive it by hand |
| `docs/deployment/notification-instrument/` | 47 files: the email templates, `docs/deployment/notification-instrument/notification-processor/processor-spec.json` when you reach §3, and in `docs/deployment/notification-instrument/tenant-execution/evidence/` the blank forms you fill and return |
| `docs/deployment/governance/` | `docs/deployment/governance/EXECUTION-AGENT-BRIEF.md` before you start. `docs/deployment/governance/GOVERNANCE-STATUS.md` to see what is already done. `docs/deployment/governance/WHAT-WAS-DONE.md` for repository-side work you do not need to repeat |
| the 4 directories named `evidence` | Read-only, and the record of what happened: `docs/deployment/internal/evidence/`, `docs/deployment/notification-instrument/tenant-execution/evidence/`, `docs/deployment/sharepoint/evidence/`, `evidence/`. **Never re-run a script you find in one** — re-running is the duplication case, not a repair |
| `docs/reference/foundational/` | Only when a contract sends you there. It is the raw harvest of a superseded estate, kept as evidence and classified untrusted. The signature-shaped strings in it are dead |

---

## 4. What you produce, and what you hand back

Nothing in this bundle is complete until the evidence exists. For each section you execute:

1. **The relay line.** Every writing script prints one line of JSON between two markers. Copy that
   line — not the table. A `console.table` copies as one unbroken string, and a whole-console paste
   also contains the script, whose source names every verdict the ledger can produce.
2. **The outcome**, one of `COMPLETE`, `PARTIAL`, `BLOCKED`, `NOT ATTEMPTED`.
3. **Any deviation** from the section's stated expectation, quoted exactly.

Files you create that are deliberately not in this bundle:

| File | Created by | Where it comes from |
|---|---|---|
| `config.local.js` (both surfaces) | you | Portal runbook §4 |
| `~/dgo-values.txt` | the harvest script | Portal runbook §3.2 |
| the Step 1 backup manifest | the backup script | Governance runbook Step 1 |
| `tenant-inventory.json`, `connection-verification.json` | you | The blank forms are tracked at `notification-instrument/tenant-execution/evidence/` — fill them and return them |

---

## 5. When to stop

Stop and escalate to §0.4's recipient — do not work around — on any of:

- Any access in §0 is unavailable.
- A read-back reports `MISSING`, `RESERVED NAME` or `UNREADABLE`.
- A third paste of a writing script creates anything.
- Any duplicate list's item count has **increased**.
- A row exists only in a duplicate — deleting would destroy the only copy.
- Any operation returns 403. That is permission, not procedure.
- Anything requires a decision on the 4 agency items. **Those are not an executor's to make.**

---

## 6. Two things that will look like failures and are not

**Flow 01 reporting a field-count variance.** `DGO_HTTPFlowRegistry` now specifies 36 columns and
the registry total is 102, not 101. Flow 01's `validation.expectedFields` and the seed
`ProvisioningSchemaExpectedFieldCount` both still say 101. Provision 102 without updating those two
and a correct run reports a variance against itself. Update both, or expect and discount it.

**A `ZZ_RETIRED_` list failing a call.** That is the point of the rename. Every deployed reference
to those lists is by title, so the prefix makes a stale caller fail visibly instead of silently
writing to a duplicate.

---

## 8. Why the step-carrying documents are not all in one directory

Because location was never the defect. Documents that carried steps without saying so, and
documents that said they carried none while carrying dozens — that was the defect, and it is
declared in `docs/reference/document-ownership.json` and enforced by a guard, neither of which cares
where a file sits. Moving the console runbooks would rewrite 70 file references with execution
imminent, and the notification instrument records a deliberate decision to keep its delivered
shape. What a single directory would have bought is somewhere to start. That is this page.

---

## 9. Checking your position at any time

```bash
npm run commission        # computes the gate from the record; no stored verdict to go stale
npm run test:node         # the full chain
```

The gate currently reports **NOT CLEARED**. 9 governance findings are open and 18 items remain
executable. Run it before and after every tenant session — the difference between the two runs is
what you actually changed.
