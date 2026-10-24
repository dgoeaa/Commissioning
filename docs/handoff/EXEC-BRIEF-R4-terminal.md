# EXECUTION BRIEF R-4 — TERMINAL CLOSURE

> **This document carries no commands, and is historical.** It is round R-4 of the mobile-shell remediation workstream, closed 2026-08-11. It is kept as a
> record of what was decided and why; nothing in it is a live instruction. The steps for this
> estate live in [`PORTAL-TENANT-RUNBOOK.md`](../deployment/PORTAL-TENANT-RUNBOOK.md) and
> [`GOVERNANCE-TENANT-RUNBOOK.md`](../deployment/governance/GOVERNANCE-TENANT-RUNBOOK.md),
> which are the only two documents in this repository that carry a step.


**Target runtime:** `dgoeaa/ECM_DOCS_DEV`, branch `main`
**Baseline of record:** commit `36454da4e81b11237a5ceaba403bbc6dc67cf897` (R-3 HEAD, verified by review 2026-08-11)
**Predecessors:** `EXEC-DIRECTIVE-mobile-shell.md` (R-1), `EXEC-BRIEF-R2-remediation.md` (R-2), `EXEC-BRIEF-R3-closing.md` (R-3), `REVIEW-R3-closing.md`
**Scope:** two deliverables. One document, one comment. Nothing else.
**Authority:** terminal. This brief ends the mobile shell workstream. There is no R-5.

---

## 0. STANDING — what is closed and stays closed

R-3 (`36454da4`) is **ratified in full**. O-1 through O-5 are closed. Do not revert, re-open, re-measure or "improve" any of it:

| Ratified | Evidence of record |
|---|---|
| R3-D1 topbar bound | 106.0px at 320/390px × both densities, zero clipped controls, independently reproduced |
| R3-D2 field floor | `min-height:36px` restored; 52 fields across 7 routes, none outside 36–44px |
| R3-D3 popover exclusion | Twelve ordered pairs, `aria-expanded` read from the DOM |
| R3-D4 touch targets | `--dgo-control-target-min:40px` at ≤640px compact; minimum measured 40px |
| R3-D5 desktop delta | Diff proof over `7ef5e894..12dde148` + corroborating captures; zero delta |
| Rule 11 | Five unsquashed commits `a6e2288`, `bc96dca`, `4596105`, `d6b47d5`, `36454da` |
| G-3 boundary | 640×360 fully mobile, 641×360 fully desktop, integer viewports, no third state |

The R-3 substitution under D5 (diff proof in place of the literal capture matrix) is **accepted on the merits and closed**. The process failure attached to it — substituting without declaring the substitution — is not closed, and R4-D1 §2.6 is where it is discharged.

---

## 1. OPERATING RULES — binding

1. **Two artifacts only.** One new file, `handoff/REPORT-R3-execution.md`. One comment block in `shared/shell.js`. Nothing else may change.
2. **No behaviour change.** Not one declaration, not one statement, not one attribute. R4-D2 adds comment lines and nothing a parser would act on. If a diff of R4-D2 shows any non-comment token, the brief has failed.
3. **`styles/app.css` is frozen.** It does not appear in this brief's diff.
4. **F-1, F-2 and F-3 are findings, not work.** They are recorded in R4-D1 §2.5 and left unfixed. Fixing any of them fails this brief — see §3 for why each is deliberately deferred.
5. **No new measurement is required.** Every number this brief asks for already exists in the R-3 session. Transcribe it. If a number cannot be found, say so in the cell rather than re-deriving it under different conditions and presenting the two as one dataset.
6. **Two commits, in order, not squashed.** `docs(shell): R4-D1 R-3 execution report` and `docs(shell): R4-D2 document popover focus ordering`.
7. **No deferral.** Every §2 subsection produces content. "N/A", "see above", "as previously stated" and blank cells are failures. A subsection with genuinely nothing to report says so in a full sentence naming what was checked.

---

## 2. R4-D1 — the §6 execution report

**Objective.** The R-3 report exists today only as chat text. A workstream does not close against a transcript. Produce `handoff/REPORT-R3-execution.md` as the permanent artifact of record, complete enough that a reader who has never seen the conversation can audit R-3 without asking a question.

**Format.** Markdown. Section numbering below is mandatory and literal — a reviewer will index against it.

### 2.1 Header
Commit range `12dde148..36454da4`. The five commit shas with their one-line messages. Date of execution. Confirmation that exactly two files changed, named, and that the R-2 file exception stayed revoked with the three frozen files named individually.

### 2.2 Per-directive execution statement — *§6 item 11, first, not last*
Five rows. Each states plainly: **executed as written**, **executed with a declared substitution**, or **not executed**. No prose before this table. This is the section that exists because R-1's D-4 and R-2's R-D4 both vanished silently; it goes at the top so it cannot be buried.

### 2.3 The measured record
Four subsections, each a table, each cell a number or a named result:

- **2.3a — Topbar.** Enumerated `.dgo-topbar` children at `12dde148`. The 3.3 approach chosen and the specificity reason it was chosen. Heights at 320/390px × both densities. Longest label used, quoted exactly, with its source in `routes.config.js`. Token value and whether it changed. Every `calc()` consumer of `--dgo-shell-topbar-h`, enumerated by file and line, each with its resolved value — state explicitly that the token was unchanged and the enumeration is therefore confirmatory.
- **2.3b — Fields.** The restored declaration. 52 field measurements across 7 routes, or the per-route counts and the min/max if the full list is unwieldy. The F-7 search field at 390px, named and measured.
- **2.3c — Popover exclusion.** The twelve ordered pairs. Each cell: displaced surface, its `hidden` state, its `aria-expanded` value. Four-by-four grid with the diagonal struck out.
- **2.3d — Touch targets.** Every control class rendered at 390px with its measured height, both densities. The minimum, named by selector. The layer-order reason `app.css` beats `tokens.enhanced.css` — stated once, precisely.

### 2.4 Gates G-1 through G-9
Nine subsections, individually numbered, each with its own result. G-9 breaks into its seven numbered watchlist items, each with its own line. No blanket statement covers more than one gate.

### 2.5 Findings — recorded, not fixed
F-1 through F-4 from `REVIEW-R3-closing.md`, restated in the implementer's own words with the evidence for each, and for each one an explicit line: **not fixed under rule 10, deferred to the owner named in §3 of R-4.** Add any defect found during R-3 outside the brief's scope, same treatment.

### 2.6 Declared substitutions
Every place R-3 did something other than what the brief said literally. R3-D5's capture set is the known one: state what the brief asked for, what was done instead, why it is a stronger claim, and — plainly — that it was not flagged as a substitution at the time and should have been. Any selector derived or substituted (`.dgo-topbar__controls`, `--dgo-control-target-min`) belongs here too, with its justification.

### 2.7 Exclusions honoured
The §4 non-negotiables of R-3, listed, each confirmed untouched. Including the two report-only upstream defects (dead `grid-template-columns` on `.kpis`; dead status tokens in `tokens.theme-hc.css`) — restated so they survive into whatever comes after this workstream.

### 2.8 Definition of done
A closing statement: O-1 through O-5 closed, five commits, nine gates, report complete. Followed by the one surviving open question, §3 below, named as belonging to someone else.

---

## 3. R4-D2 — document the focus ordering

**Objective.** F-4 is invisible, load-bearing, and now spans four surfaces. The next person to read `closePersonaPanel()` will see an unconditional `trigger.focus()` fire while another panel is opening, will read it as a bug, and will "fix" it into a real one.

**3.1** Add a comment block immediately above `openPersonaPanel()` in `shared/shell.js`. It must state, in this order:

1. That `closeNotifications()` and `closeMoreMenu()` each return focus to their own trigger **synchronously**, including when they are called as part of opening a different surface.
2. That the incoming panel's `requestAnimationFrame` focus runs on the next frame and therefore lands last, which is why no user-visible focus break occurs.
3. That this ordering is **required, not incidental** — removing the rAF, or making either close path conditional, moves focus to the wrong element.
4. That the same contract governs `openNotifications()`, `openMoreMenu()` and `showGuide()`.

**3.2** Comment only. No `if` guard, no reordering, no early return, no refactor into a shared helper. The behaviour ships exactly as it is today.

**3.3** Prose, not a bullet list, matching the register of the surrounding comments in that file.

**Deliverable.** The comment block, and a diff confirming zero executable change.

---

## 4. NON-NEGOTIABLE EXCLUSIONS

Considered and excluded. Touching any fails the brief.

- **F-1 — the 641–900px touch band.** `--dgo-control-target-min` remains 36px in compact between the mobile tier's ceiling and `NAV_DRAWER_MAX`. This is a **product decision**: whether the 40px floor follows the drawer to 900px is a question about which devices are treated as touch, not a defect. Record it, escalate it, do not resolve it.
- **F-2 — persona click-outside.** Deliberately matches the pre-existing notifications pattern. Adding it to persona alone makes three surfaces disagree three ways. If it is ever done it is done to notifications and persona together, in a pass that owns both.
- **F-3 — stale identity.** Pre-existing on the persona button; the panel inherits it from the same single `State.get()` read. Fixing the panel alone makes the button and the panel disagree. Belongs to a pass that owns `refreshIdentityAndNav()`.
- **F-4 — the focus ordering itself.** Documented by R4-D2, not changed.
- Everything excluded by R-3 §4, unchanged: information architecture, status vocabulary, priority scale, RBAC, `config/**`, sprite symbols, the frozen design system, the two upstream dead-CSS defects.
- **The 9-vs-24 information architecture disagreement.** The runtime shows 24 sidebar routes; the design file shows 9. Owned by the product decision-maker. It is not an engineering defect, it has never been in scope, and it does not block closure.

---

## 5. ACCEPTANCE CRITERIA

Binary. Each either holds or the brief has failed.

1. `handoff/REPORT-R3-execution.md` exists and contains §2.1 through §2.8, in order, with the mandated numbering.
2. §2.2 appears before any prose and carries five explicit execution statements.
3. Every table cell in §2.3 holds a number or a named result. Zero placeholders.
4. G-1 through G-9 each carry an individual result; G-9's seven watchlist items each carry their own line.
5. §2.6 declares the R3-D5 substitution in the terms §2.6 specifies, including that it was not flagged at the time.
6. F-1 through F-4 appear in §2.5, each marked not fixed, each with its deferral owner.
7. `shared/shell.js` gains one comment block above `openPersonaPanel()` covering all four points of §3.1.
8. The R4-D2 diff contains no executable change. Verify by running the file through a comment-stripping parse and diffing the result against `36454da4` — the two must be byte-identical.
9. `styles/app.css` does not appear in this brief's diff.
10. Two commits, unsquashed, with the messages given in rule 6.

---

## 6. DEFINITION OF DONE

Both artifacts land. All ten acceptance criteria hold.

At that point the mobile shell workstream is **closed** — not paused, not pending, not partial. R-1 through R-4 are complete and the record is self-contained in `handoff/`.

Three items survive closure, each explicitly owned elsewhere and none blocking:

| Survives | Owner |
|---|---|
| 9-vs-24 information architecture | Product decision-maker |
| F-1 touch floor between 641 and 900px | Product decision-maker |
| F-2, F-3 — consistency items across notify / persona / identity | Whichever future pass owns those surfaces |

Nothing else remains. Do not open a fifth brief to revisit anything above.
