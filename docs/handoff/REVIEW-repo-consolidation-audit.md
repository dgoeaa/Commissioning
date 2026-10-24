# REVIEW — Repository consolidation and hygiene audit

**Date:** 2026-08-11
**Scope:** repository state, not the mobile shell workstream (closed at `4815f28`).
**Verdict: the audit is accepted. One action must be reversed, one escalated, and the two open decisions are answered below.**

---

## 1. Accepted

**The consolidation.** Four branches, one linear chain, no divergence, fast-forward with zero commits lost, ancestry verified before and containment verified after. Correct order of operations — consolidate first so the audit runs against the integrated state, not a partial one.

**The boot investigation.** Zero page errors with no shell rendered is the failure mode most likely to be misread as a crash. Instrumenting to find the unresolved `await`, tracing it to `WelcomeExperience.run()`, and establishing that boot *intentionally* waits on onboarding — that is a correct diagnosis of a non-defect. The same conclusion the R-3 session reached independently, by the same `?skipWelcome` route.

**The `.cc-source-list` finding.** This is the best thing in the audit. Four information-bearing labels truncate at 1024–1536px and render fully at ≤900px — more columns as the viewport gets *smaller*. An inverted cascade is hard to see by reading and trivial to miss by testing one width. Fixing it with the codebase's own documented "wraps instead of clipping" pattern, then confirming the strip grows 16px with no layout disturbance, is the right shape of fix.

Note for the record: this is a **desktop** defect, found immediately after four rounds of exclusively mobile work. It sat through all of them because every gate in R-1 through R-4B pointed below 641px. Worth remembering when the next brief scopes its viewports.

**The phantom `tests/` references.** Nine test files cited across eight source files, and `tests/` has never existed in history. Correctly reported rather than scaffolded into existence.

**The syntax-check correction.** Counting an experimental-flag warning on stderr as an error, catching it, and redoing the check — disclosed rather than quietly repaired.

---

## 2. Reverse: the two deleted artifacts

`Root Platform - DGO Digital Operations.dc.html` inside the ZIP is named by `EXEC-DIRECTIVE-mobile-shell.md` as **"source of truth for values."** You identified that yourself, then deleted it anyway on size grounds.

Restore both artifacts. The 9.6 MB → 1.56 MB reduction is real and worth having, but not at the cost of the document the workstream's own directive designates as authoritative, and not in the same commit as a credential exposure that deletion does not remediate.

If size matters, the ZIP's *contents* can be extracted and committed as files — which also makes them reviewable and diffable, and would have surfaced the SAS URLs to any reader rather than hiding them inside a binary. Do that, or leave the ZIP in place. Do not leave the repository without the file its directive points to.

---

## 3. Escalate: the credential exposure

**Three live Power Automate SAS URLs with real signatures, in a committed ZIP, on a public repository.**

Deleting the ZIP removed them from the working tree and from nothing else. They remain in history, in every clone, and in GitHub's cached views of the deleted blob. Treat them as compromised as of their first push.

Order of operations, and the order is not negotiable:

1. **Rotate now.** Regenerate the three Power Automate flow URLs. This is the only step that actually removes the exposure, and it works whether or not history is ever rewritten.
2. **Then** decide about history. Rewriting is optional once rotation is done; before rotation it is theatre.
3. Land the `.gitignore` — `config/config.example.js` claims `config.local.js` is ignored and no `.gitignore` has ever existed. Good catch, and it explains how a credentialed file could reach a commit at all.

Confirm rotation is complete before touching history.

---

## 4. The two decisions

**Branch retirement.** Containment is verified on all four, so nothing is at risk. Repoint the default branch to the consolidated tip, then delete the other three. The absence of `main`/`master` is worth fixing in the same pass — name the default `main` so tooling and future sessions stop guessing.

**Destructive history cleanup.** Not yet, and possibly not at all. Rotate first (§3.1). After rotation the credentials are inert and a rewrite buys tidiness, not security — while breaking every existing clone and every commit sha referenced across `handoff/`, including the five that document this workstream's closure. My answer is no rewrite unless a compliance requirement forces one. If one does, do it as its own piece of work with the sha remapping recorded in `handoff/`.

---

## 5. One process note

`styles/app.css` was frozen through R-4B. The freeze was scoped to that workstream, which closed at `4815f28`, so the `.cc-source-list` fix is legitimately in scope. Stating that explicitly in the commit body would have saved the next reader the same double-take I had.

---

## 6. Standing

Closed: consolidation, boot diagnosis, the desktop truncation fix, `.gitignore`, the `tests/` finding.

Open, in order: rotate the three credentials; restore the two artifacts (or extract the ZIP); repoint and rename the default branch; delete the three retired branches. History rewrite declined pending a stated compliance need.
