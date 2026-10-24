# Remediation — five flow visits, in order

Every artifact here is a set of actions to paste into a live flow. Each states what it closes,
which flows it applies to, what to leave alone, and how to verify it worked.

**`npm run test:remediation` checks all five before you paste any of them**: every action
targets a list the field specification records, under the site that GUID belongs to; every
column written and every column filtered on exists; each artifact covers the operations
[`../portal-wiring.json`](../portal-wiring.json) requires of its endpoint; nothing writes
outside the portal estate; nothing carries a credential.

That check is the point. A paste that names a column which was never provisioned fails in
production, against a tenant no `git revert` can roll back — which is the same class of mistake
this whole exercise began with.

---

| Visit | Artifact | Flows | Closes |
|---|---|---|---|
| 0 | [`00-fetch-activities-case-label.json`](./00-fetch-activities-case-label.json) | `Universal Dynamic_Multi-Actions_Executor` | One Switch label. `FETCH_ACTIVITIES` currently falls to the default scope on every call. |
| 1 | [`01-otp-estate-split.json`](./01-otp-estate-split.json) | `Portal_Verify`, `Portal_Verify_Confirm` | An anonymous endpoint writing the internal operations site. **Do this one first.** |
| 2 | [`02-submission-registry-write.json`](./02-submission-registry-write.json) | `Portal_UBMISSION_ECM_DOCS`, `SUBMISSION_ECM_DOCS_PORTAL` | C2. Lights up the intake feed, which is empty by construction until it does. |
| 3 | [`03-status-registry-read.json`](./03-status-registry-read.json) | `Portal_ECM_DOCS_STATUS`, `Portal_Status_Enquiry` | C4. A citizen can read a status at all. |
| 4 | [`04-intake-writeback.json`](./04-intake-writeback.json) | `ECM_DOCS_INTAKE` | C7. The status can change. |
| 5 | [`05-upload-and-support.json`](./05-upload-and-support.json) | the three upload flows, `Portal_ECM_DOCS_SUPPORT` | C3 and C5. |

Visit 0 is a single rename and independent of the rest — do it whenever. Visit 1 is first
because it closes an exposure rather than completing a feature. Visits 2 and 3 come before 4
because a write-back has nothing to write to until the registry has rows, and nothing to show
until a citizen can read them.

---

## Start here

**[`EXECUTION.md`](./EXECUTION.md)** — the complete task list, every command with real values,
and the return leg after each visit. **[`WORKSHEET-01.md`](./WORKSHEET-01.md)** through
**`WORKSHEET-05.md`** are what you keep open in the designer: every action, the operation to
pick, the designer's own field labels, and the exact value to paste into each.

## How to execute one

1. Open the flow in Power Automate, **Edit**, then **⋯ → Peek code** to confirm the action
   names in the artifact's `path` fields still match.
2. Apply the changes. `actions` keyed by name are **substitutions** — replace that action's
   parameters. `newActionsRequired` are **additions**, each with the branch it belongs on in
   its `why`.
3. Add anything under `composeFirst` at the top of the scope; the rate-limit and reference
   actions depend on those Compose outputs.
4. Save, then re-export the flow into `docs/reference/flow-contracts/deployed/`:
   ```
   ./scripts/export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -WorkflowId <internal name>
   ./scripts/redact-signed-urls.ps1
   ```
5. Confirm the move:
   ```
   node scripts/flow-list-sweep.mjs --write
   npm run wiring
   ```

`npm run wiring` reads `0/43` operations and `25` boundary crossings today. Each visit moves
both. The target is `43/43` and `0`, at which point `npm run test:wiring` passes and the estate
is wired as specified.

---

## What none of these do

**They move no existing record.** D6 — the submissions already filed in `NITDA_Central_Registry`
stay exactly where they are. Visits 2 and 5 keep the `Create_file` into that library untouched;
only the metadata gains a home in the registry list.

**They do not touch the internal estate.** Every write in every artifact lands on one of the
twelve portal lists — checked, not asserted. The three reads of `Global Tracking Queue` that
visits 3 and 5 remove are removals, not redirections.

**They do not change what a citizen already holds.** Legacy references were never persisted and
no deployed flow looks them up, so nothing that works today stops working. New references are
minted from `Portal Sequence Counters` at a width the legacy form never used, so the two
generations stay distinguishable while the migration waits.
