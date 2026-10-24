# Independent review: engagement brief

> **This document carries no commands.** It is a brief for an independent reviewer assessing the contract-key implementation. The steps for portal and endpoint
> commissioning live in [`PORTAL-TENANT-RUNBOOK.md`](PORTAL-TENANT-RUNBOOK.md); the steps
> for governance tenant remediation live in
> [`governance/GOVERNANCE-TENANT-RUNBOOK.md`](governance/GOVERNANCE-TENANT-RUNBOOK.md).
> Those two are the only documents in this repository that carry a step.


**Prepared for** NITDA DGO, to hand to an external reviewer.
**Status of this document** It is written by the same agent that built much of what is to be
reviewed. Read section 7 before you weigh anything else in it.

---

## 1. What is being asked for

An objective assessment of the DGO document estate — its correctness, its security posture, its
structure, and whether it can be operated — by a party with no involvement in building it and no
stake in the answer.

**A reviewer is independent for this purpose only if all of the following hold.**

- They took no part in building, specifying, or documenting the estate.
- They report to someone other than the person accountable for delivering it.
- They are paid for the assessment, not for a favourable one, and their engagement does not end
  early if the findings are unwelcome.
- They can see the primary artefacts themselves — the repositories, the tenant, the live
  endpoints — rather than assessing a summary written by the builder.

The last one is the one most often lost. A review of this document is not a review of the system.

---

## 2. What the system is, in one page

A document-management estate for NITDA's Directorate of Digital Government, in three parts.

**Power Automate flows.** Fourteen HTTP-triggered flows in the tenant, seven serving a public
document portal and seven serving an internal operator platform. Each is triggered by a signed URL
and reads or writes SharePoint lists. They are the entire business logic: there is no server.

**SharePoint.** Twelve lists on `nitdanigeria.sharepoint.com`, the largest holding 21,532 and
15,936 rows. These carry live correspondence records, staff assignments, a user directory, and a
role catalogue. Governance — who may do what — is table-driven from two of these lists.

**Two front ends.** A public document portal and an internal operator platform, both static
browser applications that call the flows directly with the signed URLs embedded in their
configuration. The internal platform is deployed at `https://activityweb.page.gd`.

**Two repositories.**

| Repository | Role | State |
|---|---|---|
| `dgoeaa/Commissioning` | Authoritative. Flow exports and contracts, generators that write tracked files, browser scripts an operator pastes into a SharePoint console, packaging tooling, runbooks, and a test chain of roughly 61 stages plus 150 browser tests. | 1,040 tracked files, 193 MB working tree |
| `dgoeaa/INTERNAL_PLATFORM` | The deployed operator front end. | 14 MB, 164 tracked files. No build by design — it is the site. A dependency-free verification suite and CI were added 2026-09-03; see item 6.9. |

The operator is not a developer. They work in Windows PowerShell, execute by copy and paste, and
have stated that the work must run without requiring them to ask follow-up questions.

---

## 3. Credential rotation: in progress, and not a gate on the review

**This is not a blocking prerequisite.** Rotation is under way and is being done flow by flow as
the estate is worked. The agency's position is that the review starts in parallel; it is not held
behind a completed rotation, and this section is here so a reviewer understands the credential
posture, not to stop them being given access.

What a reviewer does need to know is below. Do not treat the counts as a worklist to be audited —
rotation is tracked by the operator against the tenant, which is the only authoritative list.

A Power Automate signed trigger URL is a bearer credential. Anyone holding one can invoke that
flow — read records, create assignments, send mail — with no further authentication. There is no
per-caller identity behind it.

Measured across both repositories at the time of writing:

| | Count |
|---|---|
| Distinct signed trigger URLs, `ecm_docs_dev` | **43** across 39 workflows |
| Files carrying one, in `ecm_docs_dev` | 36 (28 of them **tracked in git**) |
| Files carrying one, in `INTERNAL_PLATFORM` | 1 — an archive, see below |
| Distinct signed trigger URLs, `INTERNAL_PLATFORM` | **not re-counted** — see the note below |
| Commits in the working branch's history | 116 |

These counts are indicative only. They read 58 until the counters were corrected on 2026-09-03;
the exposure did not change, only the arithmetic. Do not derive a worklist from them — the tenant
is the authoritative list, and rotation is tracked there.

Because they are tracked, they are in git history. Deleting the files does not withdraw them: a
clone carries the history, and any reviewer who receives the repository receives every credential
it has ever contained. There are also API keys pending rotation.

**One of these is worse than the rest, a text search does not find it, and it is still there.**
A 6.3 MB archive, `Platform frontend review.zip`, is tracked **at the root of
`INTERNAL_PLATFORM`** — the repository that *is* the deployed static site, so a file at its root
is a file on the public internet. It carries three complete trigger URLs with intact signatures,
inside `_ds/…/_ds_bundle.js`; grep over the tracked files finds nothing, because the signatures
are inside an archive.

**This brief previously said the file "has since been removed from the branch and a `.gitignore`
added". Both halves were false.** Measured on a fresh clone of the default branch on 2026-09-03:
the archive is tracked at `HEAD`, and the repository has no `.gitignore` at all. The claim was
recorded without being checked against the branch it described, and it is the second time in this
brief that a status was asserted rather than measured — see section 7. Treat those three
signatures as compromised and regenerate them first. Whether the host actually served the archive
has not been established; it is a single request to settle, and worth settling. Removing the file
now would still revoke nothing — it remains in history and in every clone — but it would stop the
deployed site serving it, which is not nothing.

Any scanner used on this estate must read archive members. The estate's own ratchet does, and had
never been pointed at this repository.

**The rotation itself, as it is being worked:**

1. Regenerate each flow's trigger URL in Power Automate, and the API keys.
2. Update the configuration files and redeploy.
3. Confirm the old URL is dead — call it and expect a refusal.

Repository access is not held behind completion of that list.

If the review must start before rotation is complete, give the reviewer a copy with history
removed and credentials stripped, and tell them that is what they have — a reviewer who does not
know the artefact was sanitised will mis-assess the credential-handling posture, which is one of
the things most in need of assessment.

Handling the tenant data is a separate decision. Roughly 36 MB of the repository is tenant export
evidence containing real correspondence and staff email addresses. Whether that may leave NITDA's
control, and under what instrument, is a data-protection question for the agency and its Data
Protection Officer under the Nigeria Data Protection Act — not a technical one, and not one this
document can settle.

---

## 4. What to give the reviewer

- Read access to both repositories, including history.
- Read access to the SharePoint site and the twelve lists, and to the Power Automate environment.
  A review that cannot see the tenant can assess the code but not the estate.
- This brief, including section 6 and section 7.
- The runbooks under `docs/deployment/`, presented as **claims to be tested**, not as
  documentation to be followed.
- A named contact who can answer questions and who is not the person who built it.

Do **not** give them, in the first pass, the findings of any prior review — including the internal
agent reviews described in section 7. Let them form a view first, then compare. A reviewer handed
a prior findings list will tend to verify that list rather than search independently.

---

## 5. Scope of work

The questions worth paying for, in priority order.

**5.1 Endpoint authorisation.** Every flow is reachable by anyone holding its URL. Assess what an
attacker with one URL can do: read whose records, write what, impersonate whom. Specifically:
does any flow take the caller's identity, role, or permissions from the request body rather than
from the platform? Are HTTP methods restricted? Is there request-schema validation? What does a
flow do with a malformed or hostile payload?

**5.2 Whether the governance model actually governs.** Permissions are driven from two SharePoint
lists. Determine whether those checks can be bypassed — by calling a flow directly, by supplying a
different email, by racing a check against a write, or by reaching a list the flows do not guard.

**5.3 Data exposure.** Does any endpoint, page, response, log, or generated artefact hand personal
data to a party not entitled to it? Assess against the Nigeria Data Protection Act, not only
against general practice.

**5.4 Whether the verification means anything.** The estate carries a large test suite and a body
of evidence files asserting that things were checked. Assess whether those tests would fail if the
defects they name were reintroduced. **Prove it by mutation** — reintroduce a defect, run the
test, confirm it goes red. A guard that greps for a comment rather than a condition is worse than
no guard, because it manufactures confidence. This is the single highest-value item in this list.

**5.5 Operability.** Take the runbooks and walk them as the actual operator would, on Windows.
Find every step where they would stop and have to ask a question. Judge against a non-developer,
not against yourself.

**5.6 Hosting posture.** The internal operator platform, which reads and writes government
records, is served from a free third-party host (`activityweb.page.gd`, InfinityFree). Assess
whether that is acceptable for a government system: transport security, availability, tenancy,
jurisdiction, and what the host can see or alter.

**5.7 Architecture.** Is the two-repository split coherent? Is there one source of truth for each
thing? What happens when the deployed front end drifts from the tooling that builds it — and would
anyone notice?

**5.8 Whether it has ever worked.** See section 6, item 1.

---

## 6. Known defects and open items, disclosed

A reviewer given a clean-looking package is being steered. Everything below is known to be open at
the time of writing. **The list is not a bound on what is wrong — it is what has been found so
far, and the point of the engagement is to find what has not.**

1. **The estate has never been executed end to end.** No flow has ever been invoked against the
   tenant in a real run. Every claim about behaviour is derived from reading definitions, not from
   observing a request. Treat all of it as untested.

2. **Only 8 of 18 internal endpoints are configured.** The internal platform cannot currently be
   built complete.

3. **Trigger posture: now read, and worse than the one flow that had been.** This item said one
   endpoint had been checked and thirteen had not. All 27 contract keys have now been read
   directly from the exported definitions — `npm run triggerauth` records the result in
   `docs/reference/flow-trigger-auth.json`, per key, so a change is a diff.

   | | Keys |
   |---|---|
   | Answer **every HTTP verb** — no method declared | **4** — `GET_DOCS`, `FETCH_EMAIL_ATTACHMENTS`, `AI_DOC_ANALYSIS`, `AI_CHAT` |
   | Declare **no request schema** at all | **4** — `AI_EMAIL_ANALYSIS`, `SCAN_INTAKE`, `STATUS`, `UPLOAD` |
   | Declare a schema that **still accepts unknown fields** | **23** |
   | Resolve to **more than one definition** | **7** |
   | Read from a capture taken **before the flow was renamed** | **0** — resolved by the 2026-09-03 exports |
   | Could not be read at all | **0** — `SCAN_INTAKE` was the one, and is now deployed and read |

   Three things here matter more than the counts.

   - **A declared schema is not validation.** 23 of the 24 keys that declare one leave
     `additionalProperties` open, so the schema documents the expected body without constraining
     it. A reviewer should not read "has a request schema" as "validates its input" anywhere in
     this estate.
   - **Seven keys do not resolve to one flow.** `GET_DOCS` is attributed to six separate
     definitions, `AI_CHAT` to three, `REFERENCE_DATA` to three. For these the estate cannot say
     which flow the key actually reaches, so it cannot state their posture at all — the table
     above reports the latest attributed export, which is a guess dressed as a reading.
   - **Why nobody had read them.** `docs/reference/endpoint-workflow-ids.json` keys every endpoint
     by its 32-hex trigger workflow id, and **not one of the 60 exported definitions carries that
     id** — `full_resource_id` is null in all of them. Zero keys join that way. Any prior claim to
     have verified a trigger through that register verified nothing, because there was nothing to
     read through. The two joins that do work — the portal register's dashed internal name, and
     the internal register's attributed definition files — are what the audit now uses.

Five endpoints were re-exported from the tenant on 2026-09-03, so no key is now read from a
   pre-rename capture. `STATUS` gained its method restriction in that export.

4. **Signed trigger URLs and several API keys are in git history and are being rotated.**
   Rotation is under way flow by flow and does not gate the review — see section 3. Counts in this
   brief are indicative; the tenant is the authoritative list.

5. ~~**The secret scanner has a scope gap.**~~ **Closed 2026-09-03, and it was covering a
   fail-open.** `test:secrets` read `git ls-files`, and `dist/` is git-ignored, so build output —
   which `scripts/package.mjs` fills with real signed URLs on purpose — was never opened while
   the stage printed "No SAS signatures in the application tree". It now walks the build
   directories on disk, reads archive members inside them, and states on every run either what it
   found there or that no build output was present; the tracked-tree line says "tracked" so a
   green result is the size of what was read. Measured on a fresh `npm run package`: **40 distinct
   signatures across 6 files in `dist/`, every one of them already in the corpus** — no credential
   was hiding only in build output. They are reported, not failed, because the packager wiring
   them is the packager working.

   The scope gap was the disclosed half. Underneath it, `reusedSignatures()` — the gate that stops
   `npm run package` building a pilot package around a credential every reader of this repository
   already holds, and stops `npm run commission` clearing such a deployment — took the clean
   43-character signature out of a configured URL and looked it up in an index keyed on the
   greedy match. Where the corpus copy had prose attached, the lookup missed and the gate reported
   the credential unpublished. **It failed open on precisely the files most likely to carry prose:
   the operator's own labelled URL lists.** Demonstrated against a live example carrying 13 extra
   characters, then fixed by normalising both sides.

6. **Content approval.** It was on for the two largest lists, which meant every row the flows
   created was invisible to readers while the write reported success — 14,882 hidden rows on one
   list, 12,079 on the other. It has since been turned off for `DGO DIGITAL OPS`. It remains on
   for `Global Tracking Queue`, which four internal flows write to.

7. **Portal endpoint mapping was wrong, and the way it was wrong crossed the trust boundary.**
   `scripts/lib/endpoint-recovery.mjs` mapped five portal keys onto workflow ids. Four were ids of
   **internal** flows:

   | Portal key | Was wired to | Which is |
   |---|---|---|
   | `VERIFY` | `314aaf27…` | the internal `OTP_GENERATE` flow |
   | `VERIFY_CONFIRM` | `43879c51…` | the internal `OTP_VERIFY` flow |
   | `STATUS` | `85c556f1…` | the internal subsidiary-actions flow, via its `TRACK` route |
   | `SUPPORT` | `85c556f1…` | the same internal flow again |
   | `SUBMISSION` | `1ff7714c…` | a legacy base64 submission flow, not `CG_Submission_Endpoint` |

   **All three of those internal flows carry `triggerAuthenticationType: All`** — measured, see
   item 3 — so they accept anonymous callers. The portal is invoked by anonymous strangers with
   no session; that premise is what the entire trust boundary rests on. A portal package built
   from this mapping would not merely have mislabelled endpoints, it would hand every visitor of
   the public portal a working URL into the internal operations estate. It was recorded in the
   source as a "routed, not dedicated" caveat, which reads as a limitation of convenience rather
   than as a boundary crossing.

   **The correct mapping does not exist to be substituted.** Checked directly against the corpus
   index: not one of the seven flows that serve the portal — `CG_Submission_Endpoint`,
   `CG_Upload_Endpoint`, `CG_Support_Endpoint`, `CG_Verification_Endpoint`,
   `CG_Verification_Confirmation_Endpoint`, `CG_Status_Check_Endpoint`, `CG_Writeback_Endpoint` —
   has a trigger URL anywhere in `docs/reference/`. The four whose workflow ids were captured from
   live run records were tested against the index by id; no URL for any of them.

   So the portal table is now empty and all six portal keys are recorded as unrecoverable with the
   reason. **A portal package therefore builds unwired**, and each key reports itself unconfigured
   at the point of use. That is a portal that cannot submit, which is the right failure: the
   alternative was a portal wired into the internal estate. Restoring portal wiring needs the
   `CG_*` trigger URLs from the tenant — they cannot come from this repository.

8. ~~**Three contract keys have no implementation.**~~ **Closed 2026-09-04. Every contract key
   has a flow in the tenant, and every one of them can be called.**

   `npm run keyimpl`, derived from the tenant's own exports: **0 keys with no flow, 0 identified
   but not currently exported, 0 implemented but unreachable, 0 disclosure errors.** The
   machine-checked line below reads `none`.

   `SCAN_INTAKE` was the last genuinely unbuilt flow in the estate. It was written here as
   `DGO_SCAN_INTAKE.designer-paste.json`, pasted into the tenant as `IP_SCAN_INTAKE`
   (`5504d7f9-cc96-470c-be79-217582faf415`, 86 actions), and its trigger corrected to `PUT` /
   `Tenant`. `UPLOAD`'s trigger was corrected from `POST` to `PUT`; its `All` was already right,
   because unlike `SCAN_INTAKE` its caller is an anonymous citizen and its protection is the
   single-use ticket rather than the door.

   **Two things a reviewer should still test rather than take from this item.** Neither flow has
   ever been invoked — see item 1, which is unchanged: everything here is read from definitions,
   not from observing a request. And `SCAN_INTAKE` does not verify the SHA-256 it is sent (Power
   Automate cannot compute one over a request body), so the declared digest is a custody aid, not
   an integrity check; `UPLOAD` and `SCAN_INTAKE` also declare no request schema, which item 3
   counts.

   **The history of this item is retained, because section 7 is the point of this brief:** No exported definition reads the `X-DGO-Filename` / `X-DGO-Sha256` / `X-DGO-Size`
   headers its client sends, and no register names a workflow for it, so it remains unimplemented
   *in the deployed estate* and the machine-checked line below still names it. What changed on
   2026-09-03 is that it is no longer unwritten: `DGO_SCAN_INTAKE.designer-paste.json` is a
   complete flow — tenant-authenticated trigger, membership gate against `DGO_UserDirectory`,
   rate limit per authenticated principal, metadata and 25 MB size validation, D6 reference
   minting from the shared sequence counter under an optimistic lock, `CreateFile` into
   `/NITDA_Central_Registry`, an audit row, and the flat response body the client actually reads.
   It passes the estate's paste-schema, forensic and variable checks.

   Two properties of it a reviewer should test rather than take on trust. **It does not verify the
   SHA-256** — Power Automate cannot compute one over a request body, so the client's declared
   digest is stored and echoed as a custody aid, and describing it as verification is forbidden by
   Appendix B and enforced by `tests/standing-claims.test.mjs`. **Its authorisation is membership,
   not permission** — the role catalogue carries no `registry:deposit`, and minting one would deny
   every role until the tenant's role rows are updated, so the gate is tenant authentication plus
   an active directory row. Tightening it to a named permission is a one-line change once those
   rows exist.

   **This item previously named `UPLOAD` and `WRITEBACK` as well, and both were wrong.** Each has
   a complete deployed flow — `CG_Upload_Endpoint` and `CG_Writeback_Endpoint` — and this
   repository already said so in three places the claim was written past: `npm run wiring`
   reported them wired 7/7 and 10/10 against those flows, `portal-endpoint-workflow-ids.json`
   carries a workflow id for each read out of their own run records, and the paste-state evidence
   of 2026-09-01 records the packages pasted into both. The error came from reading
   `endpoint-recovery.mjs`'s `UNAVAILABLE` table as a statement about what exists. It is not: it
   names the keys for which no *trigger URL* can be recovered from `docs/reference/`, it lists two
   keys rather than three, and a key can be absent from it and still unbuilt, or present in it and
   fully deployed. A reviewer told an endpoint is unbuilt does not go and read it, so understating
   the estate steers a review as effectively as overstating it. `npm run keyimpl` derives this
   item from the definitions now, and `npm run test:keyimpl` fails if this list and the definitions
   ever disagree again.

   Two states this item used to collapse are worth separating, because they need different work:

   - **`UPLOAD` is built and still cannot be called, for one remaining reason.**
     `CG_Upload_Endpoint` (workflow `df82e331…`) performs the whole ticket redemption — rate
     limit, ticket lookup filtered on `Redeemed`, size match, file create, attachment record,
     ticket redeem. Its `triggerAuthenticationType` was `Tenant`, which refused the portal's
     anonymous caller outright; **the 2026-09-03 export shows it is now `All`, so that half is
     fixed.** What remains is that the trigger declares `POST` while the contract's caller sends
     `PUT`, and it declares no request schema. The remedy is a trigger setting, not a flow to
     build.
   - ~~Four keys are identified but not currently exported.~~ **Closed 2026-09-03.**
     `SUBMISSION`, `SUPPORT`, `VERIFY`, `STATUS` and `UPLOAD` were re-exported from the tenant.
     All seven portal endpoints now have a current definition, and `npm run wiring` moves from
     24/59 required operations and 3/7 endpoints wired to **58/59 and 6/7** — `SUBMISSION` is one
     `Portal Registry` update short. Nothing was fixed to achieve that; the operations were
     always in place and the repository could not see them. With `SUBMISSION`'s stale
     `Portal Registry` update requirement removed — nothing performs it and the create writes the
     complete row — the portal reads **58/58 and 7/7**.

   The line below is the claim this item makes, in the form the check reads. It is deliberately
   separate from the prose around it: a guard that parses paragraphs is a guard that argues with
   its own wording, and the paragraphs above name `UPLOAD` and `WRITEBACK` repeatedly while saying
   the opposite of what a naive scan would conclude from finding them. Section 7 records a guard
   in this estate that checked the wording of a message rather than the condition behind it and
   passed with the condition disabled; this one reads the definitions. `npm run test:keyimpl`
   re-derives this list from the exported definitions and fails if the two disagree — in either
   direction.

       keyimpl:unimplemented = none

9. **The deployed front end had no tests, no build, and no dependency manifest.** Addressed
   2026-09-03 on `dgoeaa/internal_platform` branch `claude/system-remediation-gaps-ahpmsy`, and
   what it found on the way is the part worth reading.

   There is still no build, and that is correct: the repository *is* the site, loaded as ES
   modules straight from the browser. What it lacked was any check that what is committed can
   load. `tests/verify.mjs` now asserts four things, zero dependencies, run by CI on every push:
   no tracked file carries a trigger signature (**archives are opened** — that is how three hid);
   every relative import resolves to a tracked file; every local reference in `index.html`
   resolves, with `config/config.local.js` the one asserted exception; and every JavaScript file
   parses as a module. Each is mutation-tested.

   **It is a floor, not a ceiling.** It establishes that the committed tree can load. It runs no
   part of the application and asserts no behaviour, so a green result there must not be read as
   "the platform works" — the assessment in section 5 is still entirely open.

   The archive named in section 3 was removed from that branch and a `.gitignore` added. Both had
   been recorded as done and neither was.

10. **The deployed platform currently serves no endpoint configuration at all** — a live check
    returned an empty endpoint set.

11. ~~**The single sanctioned crossing into the internal platform does not exist.**~~
    **Withdrawn 2026-09-03. The crossing exists; the finding was an artefact of one corrupted
    export.**

    `ECM_DOCS_INTAKE` is present at workflow `df7ddff1-9275-4f23-acf6-e169525f4e2f` and performs
    its `Portal Registry` read. `npm run wiring` measures the crossing in place.

    What went wrong is worth more than the finding was. One file —
    `CG_Upload_Endpoint__df7ddff1-…__full_definition.json`, captured 2026-08-24 — carried
    **CG_Upload_Endpoint's definition stamped with ECM_DOCS_INTAKE's workflow id**. Every reader
    that grouped exports by workflow identity therefore saw one workflow exported twice under two
    names, concluded correctly-from-the-evidence that it had been renamed and rebuilt in place as
    the UPLOAD endpoint, and reported the bridge as gone. That conclusion propagated into an open
    item, a decision review of D1 and D6, a security guard rewritten to fail, and this brief.

    A legacy export package taken from the tenant on 2026-09-03 settles it: `CG_Upload_Endpoint`
    is workflow `df82e331-b800-4a8d-996e-d2b2ca846c77`. The two definitions share 8 of 9
    top-level actions, so the corrupted file's *content* was genuinely CG_Upload_Endpoint's;
    `ECM_DOCS_INTAKE`'s definition shares none of them. Two flows, two ids, one bad stamp. The
    corrupted file is removed — the fresh export supersedes its content — and
    `portal-endpoint-workflow-ids.json` records `df82e331` for `UPLOAD`.

    **The lesson a reviewer should take is not "the tooling was wrong".** Grouping by workflow
    identity is the correct rule and is kept. What no check could survive was an export whose
    identity was itself wrong, and nothing cross-checked a display name against a workflow id
    from any second source. The five 2026-09-03 packages each carry the flow's own resource id
    from the tenant, which is that second source. **Ask how many other conclusions in this estate
    rest on a single uncorroborated artefact** — that question generalises, and this item is the
    worked example of it.

---

## 7. Provenance: who built this, and how often they were wrong

**Substantial parts of this estate — the generators, the browser scripts, the test suite, the
runbooks, and every file under `docs/deployment/sharepoint/evidence/` — were written by an AI
agent.** A reviewer needs to know that, because it changes where to look.

That agent's self-verification has been wrong repeatedly, in ways that were caught only because a
human operator pasted real output back and it disagreed with the claim — or, in the last case
below, because a later pass re-derived a claim from the artefacts instead of restating it.
Documented instances, the first four from a single working period:

- A script counted moderation states with a query that returns HTTP 500 on lists above SharePoint's
  5,000-item threshold. Every count came back as the string `unreadable (500)`; the total treated
  those strings as not-a-number and printed **"0 rows are currently NOT approved"** in green. Zero
  was the one answer that made an irreversible change look free. The true figure was 14,882.
- An acceptance test scored an authorisation refusal as a **pass**, called four flow actions that
  do not exist, and reported a clean result on a page where the configuration it was testing was
  not present at all.
- A regression guard was written that checked the wording of an error message rather than the
  condition that produced it, and passed with the condition disabled.
- `npm test` was reported as exiting 0 when the exit code read was that of a `tail` at the end of
  the pipeline, not of the test run. The suite was in fact failing.
- **This brief's own item 6.8 disclosed three contract keys as unimplemented. Two of them were
  deployed flows.** The claim was assembled by reading a table about *credential recovery* as a
  table about *what exists*, and it was contradicted at the time of writing by three artefacts in
  this repository — including a check, `npm run wiring`, that prints the correct answer when run.
  Nothing was verified before the claim was disclosed to an external party. It is listed here
  rather than quietly corrected because it is the same failure mode as the four above, pointed at
  the reviewer instead of at the operator: understating an estate steers a review as effectively
  as overstating it, and this one would have steered it away from the defect that item now
  carries.
- **A guard was fixed in one file and left broken in the other, and the one left broken was the
  security guard.** Resolving a flow by the display name its export happened to carry — rather
  than by workflow identity — made `verify-portal-wiring.mjs` certify a crossing off a superseded
  capture. That was found, fixed, and written up as open item 37. `audit-trigger-auth.mjs` had the
  identical defect on the identical flow, and it is the estate's only guard on its only asserted
  security constraint; nobody looked. It printed `✅ ECM_DOCS_INTAKE is POST and Tenant` for a flow
  that had been rebuilt into something else a week earlier. See item 6.11. The lesson is not about
  display names: it is that a defect found in one place was not searched for in the others.

The pattern is consistent and worth stating precisely: **the failures are not random errors, they
are false negatives — checks that reported success without establishing it.** Each was fixed and
guarded once found. What none of that establishes is how many remain. That is what an external
reviewer is for, and it is why section 5.4 matters more than its position might suggest.

Three further reviews were run by AI agents on the same account, covering evidence integrity,
security, and architecture. Their findings may be offered to you. Weigh them as a hint about where
to look, not as assurance: they are the same model as the builder, briefed by the builder, and
they inherit its blind spots by construction. **They do not discharge the need for this
engagement.**

---

## 8. What kind of reviewer

No single discipline covers this. In rough priority:

1. **An independent security assessor** with web and API penetration-testing capability, for
   sections 5.1, 5.2, 5.3 and 5.6. Look for a firm with recognised certification and a testing
   methodology it will show you. This is the engagement to fund first if only one is funded.
2. **A Microsoft Power Platform specialist**, for the flow logic, the connection and trigger
   posture, and the SharePoint threshold and moderation behaviour. A general web reviewer will
   miss the platform-specific failure modes, which is where several of the known defects live.
3. **A data-protection assessor** familiar with the Nigeria Data Protection Act, for section 5.3
   and for the question in section 3 about what may leave NITDA's control.
4. **NITDA's own internal audit function**, which is independent of the project team and already
   inside the data boundary — which removes the whole of section 3 as an obstacle. Consider this
   first, not last.

Ask each candidate two questions before engaging: *what would make you tell us this system is not
fit to deploy*, and *what will you need from us that we have not offered*. A reviewer with no
answer to the first is not going to give you one at the end either.

---

## 9. Acceptance criteria for the review itself

A review is complete when it delivers findings that are:

- **Located** — file and line, or endpoint and request.
- **Reproducible** — the command or request, and what came back. Not an assertion.
- **Classified** — confirmed by reproduction, or reasoned but unverified. Both are useful;
  conflating them is not.
- **Consequential** — what a person would wrongly do, or what an attacker would gain.
- **Bounded** — an explicit statement of what was *not* assessed, and why.

And a section on what was checked and found sound. A review that finds only faults has not
calibrated, and cannot be used to decide what to keep.

---

## 10. Sequencing

1. Decide the data-handling question with the DPO.
2. Engage the security assessor; give them tenant read access. Credential rotation (section 3)
   runs in parallel and does not gate this.
3. Run the review without prior findings in hand.
4. Compare their findings against section 6 — **including which of these eleven they did not find,
   which measures the review's coverage, and which they found that are not here, which measures
   how much was missed.**
5. Fix, then re-test against the reviewer's own reproductions rather than against ours.
