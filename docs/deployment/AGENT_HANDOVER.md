# Agent handover

> ## RETIRED — the engagement it prepared for is closed
>
> **DO NOT COMMISSION FROM THIS DOCUMENT, AND DO NOT ENGAGE AN AGENT FROM IT.**
>
> This described what to give an independent agent picking the estate up, and what to withhold. That agent was never engaged, and the audit and remediation it was to perform have since been carried out against this baseline.
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

What to give an agent picking this estate up, what to withhold, and the prompt to give it.

---

## First: do not export the branch

| | Files | Bytes | ~Tokens |
|---|---|---|---|
| Whole branch | ~1,060 | 62.5 MB | **~15.6M** |
| Everything minus bulk | ~500 | 6.3 MB | ~1.7M |

Neither fits. **Hand the agent a clone instead** — 33 MiB, and nothing here needs `npm install`:

```
git clone https://github.com/dgoeaa/ECM_DOCS_DEV.git && cd ECM_DOCS_DEV
git checkout claude/system-remediation-gaps-ahpmsy
```

Use the tiers below only if the harness genuinely cannot clone.

---

## Withhold: `docs/reference/foundational/` — 262 files, 19.9 MB

Every signature committed to this repository lives in 28 files under this one path and nowhere
else. Verified: `grep -lE "sig=[A-Za-z0-9_-]{40,}"` across all tracked files returns 28 hits, all
under it.

The estate has since been rotated, and none of those 43 signatures appears in the current
configuration — `npm run commission` reports zero reuse on both surfaces. They are superseded.
**That is a reason to stop treating them as live, not a reason to export them:** the check proves
only that none matches a *configured* endpoint, it says nothing about flows outside the 25, and
every one is in git history where deletion reaches nothing.

Withhold it for a second reason that has not changed: it is 19.9 MB describing a **previous
estate**. Reconciled against the register, all 25 keys pointed at different workflows. An agent
reading that corpus derives the wrong answer with confidence.

---

## Withhold: bulk with no decision value

| Path | Files | Size |
|---|---|---|
| `docs/reference/flow-contracts/` | 78 | 16.7 MB |
| `docs/process/` | 123 | 5.6 MB |
| `docs/reference/process-inventory.json` | 1 | 4.2 MB |
| `docs/deployment/sharepoint/evidence/` | 23 | 2.5 MB |
| `docs/reference/presentations/` | 2 | 1.4 MB |
| `assets/`, `styles/dgo-design-system/`, `document-portal/ds/` | 43 | 0.8 MB |
| `docs/forensic/`, `docs/audits/`, `docs/visual/` | 38 | 0.8 MB |

---

## Export — three tiers

### Tier 1 — orientation · ~70k tokens

Most tasks need nothing more.

```
README.md
package.json
config/endpoints.config.js
docs/reference/endpoint-register.json          ← the authority for every workflow id
docs/reference/endpoint-workflow-ids.json      ← derived from it; what the checks read
docs/STATUS_REPORT.md
docs/deployment/CLEAR-THE-LAST-BLOCKER.md
docs/deployment/CLEAR-THE-LAST-BLOCKER-TERMUX.md
docs/deployment/PORTAL-TENANT-RUNBOOK.md
docs/deployment/INDEPENDENT_REVIEW_BRIEF.md
docs/deployment/COMMISSIONING.md
docs/deployment/sharepoint/OPEN_ITEMS.md
docs/deployment/sharepoint/DECISIONS.md
docs/deployment/sharepoint/CLOSING_STATE.md
```

Both register files are credential-free by construction and asserted so by
`npm run test:endpointregister`.

### Tier 2 — +machine-readable state · ~90k more

```
config/                                          (all 35)
docs/deployment/sharepoint/portal-wiring.json
docs/reference/{internal-flow-register,internal-paste-targets,flow-trigger-auth}.json
docs/reference/portal-endpoint-workflow-ids.json
docs/deployment/sharepoint/{PORTAL_WIRING,FLOW_STANDARD,PORTAL_DATA_CONTRACT}.md
docs/deployment/{MINIMAL-PILOT,PACKAGING,LOCAL-DEV,OPERATOR_WALKTHROUGH}.md
```

`internal-flow-register.json`, `portal-endpoint-workflow-ids.json` and `flow-trigger-auth.json`
predate the register and disagree with it. Include them only for history, and say so.

### Tier 3 — +tooling · ~490k more

```
scripts/          (minus *.ps1)
tests/*.mjs       (node suites; *.spec.js needs a browser)
```

### Not a tier — application code

`core/ modules/ shared/ document-portal/js/` — ~266k tokens. Only if the task changes the UI.

---

## The prompt

Give this verbatim alongside whichever tier you exported.

> You are continuing the commissioning of the NITDA DGO document management estate: an internal
> operator platform and a public document portal, both static browser applications that call
> Power Automate flows directly. There is no backend between the page and the flows.
>
> **The authority for every endpoint is `docs/reference/endpoint-register.json`**, exported from
> the tenant and post-rotation. It names, for all 25 contract keys, the workflow each calls and
> that workflow's complete trigger URL with only the signature removed. Where it and any other
> artefact disagree, **the register is correct**. When it was first reconciled, all 25 keys in
> this repository pointed at different workflows — the older records describe a previous estate.
> `npm run reconcile` regenerates `docs/reference/endpoint-workflow-ids.json` from it;
> `npm run reconcile -- --check` fails on drift. Never hand-edit the derived file.
>
> **The reference corpus under `docs/reference/foundational/` and the flow definitions under
> `docs/reference/flow-contracts/` are deliberately withheld.** They carry the pre-rotation
> signatures and describe the superseded estate. Do not ask for them and do not treat their
> absence as a finding. Scripts that read them will fail on missing inputs; that is expected.
>
> **Commissioning, in full:**
>
> ```
> npm run reconcile
> npm run values:template ~/dgo-values.txt
> npm run values:sign -- ~/dgo-values.txt <KEY>   # once per key; reads the signature from stdin
> npm run check:values -- ~/dgo-values.txt
> npm run setup -- --values ~/dgo-values.txt --force
> npm run check:config && npm run check:config:portal
> npm run commission
> ```
>
> Target: `18/18` internal, `7/7` portal, `READY` on both config checks, and
> `No automated blocker for pilot usage.` This has been rehearsed end to end and reaches exactly
> that. `npm run recover` and `scripts/build-endpoint-workflow-ids.mjs` are **retired and refuse
> to run** — they wired revoked signatures on superseded workflows.
>
> **Credential rules, which are absolute.** A `sig=` value is a bearer credential: 43 characters,
> base64url of an HMAC-SHA256, no legitimate variation. Never write one into any file except
> `config.local.js` (git-ignored), never into a commit, a comment, an issue, or a message. You do
> not have the signatures and must not ask for them — a human pastes them. Deleting a file
> revokes nothing; only regenerating the trigger in Power Automate does.
>
> **How this codebase expects to be worked.** Every check derives its answer from an artefact
> rather than restating prose, and every fix is mutation-tested: break the fix deliberately and
> confirm the test goes red. `npm test` runs 65 Node suites; `npm run test:smoke` needs a browser
> and `DGO_CHROME_PATH` in a container. Do not add a check that asserts shape while the meaning
> goes unverified — that failure mode has recurred through this programme and is called out
> throughout the codebase comments.
>
> Read `docs/deployment/CLEAR-THE-LAST-BLOCKER.md` first, then
> `docs/deployment/INDEPENDENT_REVIEW_BRIEF.md` for what remains open.

---

## What remains after commissioning

Zero automated blockers. Five obligations no script can settle, listed by `npm run commission`:
the public channel's per-flow validation, the browser suite against the deployed hostname, the
routing table's approval, clearing test records, and the personal-data scope decision. Then §7–§11
of `PORTAL-TENANT-RUNBOOK.md` — deploy, verify against the deployed host, trigger hardening,
content approval, close-out.

---

## The Endpoint Console

`modules/endpoint-console.js`, route `#/endpoint-console`, **systemAdmin only**. The
administrative console for the whole endpoint estate. It is a workspace in the internal
platform, not a separate tool — no build step, no server, no dependency.

| Tab | What it does |
|---|---|
| **Findings** | Estate-level conditions nothing else reports, worst first |
| **Endpoints** | All 25 contract keys, both surfaces, filterable, with a per-key detail panel |
| **Flow estate** | All 51 tenant workflows — in use, live but unused, name collisions, no endpoint |
| **Live health** | Probes every configured **read-only** endpoint; never calls a write |
| **Configuration** | Per-device address overrides, validated before save, confirmed and audited |
| **Reference** | Where the facts come from, and the commands that change the estate |

**What it made visible for the first time.** A URL that is present, HTTPS, correctly signed and
pointing at the wrong workflow passes every check that existed before the tenant register. It
does not fail — it succeeds against the wrong flow. The console compares each key's resolved
workflow id against the register and reports the difference.

**Three gaps it closes**, each measured rather than assumed:

- System Health counted `EndpointKeys` — 19 entries. The estate has 25 keys; the 7 portal keys
  were in neither the count nor any view.
- `SCAN_INTAKE` has a URL slot but no contract-table entry, so it is excluded from that count
  entirely: the check can read a complete green while registry scanning is dead.
- 14 workflows carry a contract-key name while serving no key, 8 of them still answering on a
  live endpoint. Wiring by name gives a working URL that calls a retired flow.

**Data source.** `config/endpoint-atlas.data.js`, generated by `npm run reconcile` from the
register. Generated rather than fetched because the platform has no build step and is sometimes
opened from `file://`, where fetching a sibling JSON is blocked. `npm run reconcile -- --check`
fails if it drifts.

**It never renders a signature.** Every address goes through `EndpointRegistry.redact()`, and the
export is redacted by construction. Asserted on the rendered DOM by
`tests/endpoint-console.spec.js` and on the serialised export by
`tests/endpoint-console.test.mjs` — 21 Node assertions and 2 browser tests, mutation-verified.

**Scope of a change made in it.** An override applies to that browser on that device. The estate
is configured by `npm run setup -- --values <file> --force` and shipped by `npm run package`.
The Configuration tab says so where the controls are.

---

## The standalone console — `tools/admin-console.html`

**One file, 122 KB. No server, no build, no npm, no network, no platform.** Opens by
double-click, from a USB stick, from `file://`, offline, on a phone. Rebuild with
`npm run console`; `npm run console -- --check` fails on drift.

**It commissions. It does not merely report.** Take the signatures, generate both
`config.local.js` files, done — no checkout, no Node, no terminal.

### Ten tabs

| | |
|---|---|
| **Overview** | Readiness gate with every blocker and its fix, or three ways in when nothing is loaded |
| **Commission** | One row per **workflow** — 20 rows, not 25 — paste a signature or a whole URL, live validation, progress bar, direct link to each flow in Power Automate |
| **Endpoints** | All 25 keys, sortable on every column, filter by surface and state, search, per-key detail and per-key probe |
| **Flow estate** | All 51 tenant workflows, five filters, click through to full workflow detail |
| **Findings** | Six estate conditions, worst first, each expanding to the affected items |
| **Health** | Read-only probe by default; **write probes on explicit opt-in with confirmation**; CSV |
| **Rotation** | Plan by flow with the shared-key groups made explicit, tick-off tracker, CSV |
| **Compare** | Diff two deployments — different workflow, different signature, only-in-one |
| **Export** | Both config files · values file · redacted JSON · CSV · print/PDF |
| **Reference** | Provenance, and an explicit list of what it can and cannot do |

Deep-linkable (`#commission`), keyboard-navigable, light/dark, responsive, print stylesheet.

### The config files it generates are real

Byte-compatible with `npm run setup`, including the `Object.assign` merge semantics the platform
depends on. Proven end to end: 20 flows signed through the UI → readiness cleared → downloaded
`config.local.js` → **`npm run check:config` reports `READY. Every key is present, well-formed,
and points at the flow it should.`**

### What it will not do, and why

| | |
|---|---|
| Store anything | No `localStorage`, cookie or IndexedDB. A signature dies with the tab — this file gets opened on machines nobody controls. |
| Display a signature | Everything through `redact()`. Embedded URLs stop at `sig=`. |
| Reach a server that could change an estate | The only outbound calls are the probes you ask for. It hands you files; you place them. |
| Silently correct a wrong paste | Paste another flow's URL and it keeps that workflow id and reports **WRONG FLOW** — hiding it is how the estate got here. |

### One analysis, not two

`core/endpoint-atlas.js` is embedded verbatim, imports stripped, data injected. The UI lives in
`scripts/lib/admin-console-ui.js`. The builder refuses to write a file that carries a signature
**or that does not parse**.

**12 Node assertions, 7 browser tests** — the browser ones drive the real file from `file://`
with non-`file:` requests aborted.
