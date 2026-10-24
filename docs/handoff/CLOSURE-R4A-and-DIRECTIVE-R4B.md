# CLOSURE — R-4A accepted, with one final transcription (R-4B)

> **This document carries no commands, and is historical.** It is the closure of R-4A and the final R-4B transcription; the workstream closed here. It is kept as a
> record of what was decided and why; nothing in it is a live instruction. The steps for this
> estate live in [`PORTAL-TENANT-RUNBOOK.md`](../deployment/PORTAL-TENANT-RUNBOOK.md) and
> [`GOVERNANCE-TENANT-RUNBOOK.md`](../deployment/governance/GOVERNANCE-TENANT-RUNBOOK.md),
> which are the only two documents in this repository that carry a step.


**Reviewed:** `REPORT-R3-execution.md` at `3d3d4ef`, against `ADJUDICATION-R4-and-DIRECTIVE-R4A.md` §4.
**Date:** 2026-08-11
**Verdict: R-4A accepted. One transcription remains — R-4B below — and the workstream then closes.**

---

## 0. Standing

R-4A is accepted on all nine acceptance criteria that were reachable. The five §1-protected sections were verified byte-unchanged programmatically. No code file appears in the diff. `styles/app.css` and `shared/shell.js` are both untouched, as required.

Three things in this execution raise the standard of the record rather than merely satisfying it, and they are ratified permanently:

**G-9 items 6 and 7 were genuinely measured.** The adjudication said they had never been checked, which meant transcription was not available. The session booted the real runtime past the OTP gate and measured. Item 6: 106.00px against a 106px token at 320/390/640 × both densities, `scrollWidth == clientWidth` on `.dgo-topbar__controls` everywhere, `overflow-x: visible` and 64/52px at 1440px. Item 7: 28 of 30 rendered fields raised from 16–20px to 36px with the floor active, 2 already at 44px, none past the ceiling, isolated by neutralising `min-height` and re-measuring. That is a controlled before/after, not an observation.

**The scroll container is a safety net, not an active mechanism.** Established directly rather than assumed. This confirms the review's own note that the wrapper's compression fallback is designed-in but unexercised in the field. Both parties now hold the same conclusion from independent evidence.

**Two results were flagged rather than smoothed.** The 30-field count was kept separate from the review's 52 and correctly attributed to a backend-less harness, rather than being presented as a contradiction or quietly reconciled. The checkbox case was reported as *probed but not exercised* rather than as passing — `approvals.js:49` rendered zero fields, so the unqualified `input` selector's effect on the three `type="checkbox"` sites remains unmeasured. Reporting an unexercised probe as unexercised is the single most valuable line in this report, and it is the behaviour every brief in this workstream has been trying to produce.

The false-positive reachability metric, found and corrected mid-run with both readings disclosed, is likewise correct practice.

---

## 1. The remaining gap, and its cause

Acceptance criterion 5 — O-1 through O-5 cited as written — is short. The cause is the same one R-4A was written to fix, one layer down: the adjudication quoted `EXEC-BRIEF-R3-closing.md` §5's gate list but not its §2 objectives table, and the source documents again did not land on disk.

The mapping objection was nonetheless discharged correctly: O-1, O-3 and O-4 attested verbatim in their own commits, O-2↔D2 and O-5↔D5 by elimination rather than by assumed sequential numbering. That was the substance of the objection. Only the literal wording was missing.

It is supplied below. This is the last outstanding cell in the workstream.

---

## 2. DIRECTIVE R-4B — final transcription

**Baseline:** `3d3d4ef`. **Deliverable:** `handoff/REPORT-R3-execution.md` revised in place. **One commit:** `docs(shell): R4B cite O-1..O-5 as written; close the record`.

**No code changes. No section other than §2.8 and §2.5 may change.**

### R4B-1 — §2.8, objectives as written

`EXEC-BRIEF-R3-closing.md` §2, verbatim:

| ID | Item | Severity | Directive |
|---|---|---|---|
| O-1 | R-D4 unimplemented: topbar height unbounded, controls can clip | **Critical** | R3-D1 |
| O-2 | `min-height:36px` on fields silently dropped; only the ceiling shipped | Bug | R3-D2 |
| O-3 | Persona not wired into popover mutual exclusion | Bug | R3-D3 |
| O-4 | `.dgo-btn{min-height:40px}` absent; touch targets unverified | Bug | R3-D4 |
| O-5 | G-1 desktop no-op never evidenced; R-2 changed desktop unconditionally | Evidence | R3-D5 |

Replace §2.8's inference paragraph with this table and mark each objective closed against its directive. Note in passing that O-4's literal text — `.dgo-btn{min-height:40px}` absent — was closed by a different and better mechanism than the one its wording implies: R3-D4 raised `--dgo-control-target-min` to 40px at ≤640px compact, which lifts every control class rather than one selector. Record that as a closure on substance, since it is the third such improvement in the workstream and the pattern deserves to be visible in the final record.

### R4B-2 — §2.5, one addition

Add **F-6 — the checkbox floor interaction is unmeasured.** R3-D2's restored floor uses an unqualified `input` selector; three `type="checkbox"` sites exist in the runtime; the probe that would have exercised them rendered zero fields under a backend-less harness. The review's independent measurement found checkboxes at 16×16 and unaffected, which is reassuring but was taken at a different time under different conditions. Record as **not fixed, deferred to whichever pass next runs against a live backend**, with the note that it is low-risk and evidenced on one side only.

### R4B-3 — §5 recurrence prevention

One of six documents committed. The remaining five are attached to this closure. Commit all of them to `handoff/` in the repository:

`EXEC-BRIEF-R2-remediation.md`, `EXEC-BRIEF-R3-closing.md`, `REVIEW-R3-closing.md`, `EXEC-BRIEF-R4-terminal.md`, `ADJUDICATION-R4-and-DIRECTIVE-R4A.md`, and this file.

If they again fail to arrive as files, commit nothing further, state so in one line in §2.8, and treat the item as owned by the reviewer rather than by you. Do not spend another cycle on it — the recurrence-prevention measure is worth exactly one attempt per party, and you have made yours.

### Acceptance

1. §2.8 carries the O-1–O-5 table verbatim, each closed against its directive, with O-4's substance note.
2. §2.5 carries F-1 through F-6, each not fixed, each with a deferral owner.
3. No other section changes. No code file in the diff.
4. One commit.

---

## 3. On acceptance — closed

The mobile shell workstream is closed. R-1 through R-4B complete. Four items survive, each owned elsewhere, none blocking:

| Survives | Owner |
|---|---|
| Information architecture: 9 (design) vs 24 (sidebar) vs 29 (`routes.config.js` labels) | Product decision-maker |
| F-1 — touch floor between 641 and 900px, compact density | Product decision-maker |
| F-2, F-3 — click-outside and stale identity across notify / persona | Whichever pass owns those surfaces |
| F-6 — checkbox floor interaction, evidenced on one side only | Whichever pass runs against a live backend |

No further brief. If any of the four is taken up, it opens as its own piece of work with its own baseline, not as a continuation of this one.

---

## 4. Note for the record

Across four rounds this workstream produced, in order: two silently skipped directives, one undeclared substitution, one gate list checked under the wrong numbering, and — in this final round — a probe reported as unexercised, a metric corrected mid-run with both readings shown, and two datasets kept apart rather than reconciled into a false single figure.

That trajectory is the deliverable. The topbar is 106px, which matters for a week. The reporting discipline is what makes the next workstream cheaper, and it is worth more than any line of the CSS it was built to verify.
