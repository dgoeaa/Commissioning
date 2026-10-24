# Commissioning for live usage

**This estate is being commissioned, not developed.** The code works and has for some time;
what stands between it and production is configuration held in a tenant, and decisions held by
people. Both are named below, and neither can be discharged from this repository.

> **This document carries no commands.** It explains *what commissioning means and what stands
> in its way*. The command-line sequence is
> [`CLEAR-THE-LAST-BLOCKER.md`](CLEAR-THE-LAST-BLOCKER.md) (Termux:
> [`CLEAR-THE-LAST-BLOCKER-TERMUX.md`](CLEAR-THE-LAST-BLOCKER-TERMUX.md)); the console steps are
> [`EXECUTION_RUNBOOK.md`](EXECUTION_RUNBOOK.md). If you are here to execute, go there.

```bash
npm run values:template ~/dgo-values.txt       # all 25 keys, every URL bar its signature
npm run values:sign -- ~/dgo-values.txt KEY    # paste one flow's signature (repeat per flow)
npm run check:values -- ~/dgo-values.txt       # all 25 filled? prints no URLs
npm run setup -- --values ~/dgo-values.txt --force
npm run commission                             # what still stands, and who can discharge it
npm run verify:endpoints                       # prove it against the live flows
npm start                                      # http://localhost:8080
```

**Where you stand, measured rather than asserted:**

| | |
|---|---|
| Register | [`PRODUCTION_READINESS_REGISTER.json`](./PRODUCTION_READINESS_REGISTER.json) — 48 items, **24 closed**, 24 open |
| What is open | 7 applied-unverified · 6 blocked · 4 decisions for the agency · 3 specified-not-applied · 2 evidence-incomplete · 2 ready |
| Automated blockers | 2 — both runtimes unconfigured (`CFG-1`, `CFG-2`). Nothing here is a code defect. |
| What to do next | [`ACTION_PLAN.md`](./ACTION_PLAN.md), generated from the register and ordered by what unblocks the most |
| What to read | [`COMMISSIONING_SURFACE.md`](./COMMISSIONING_SURFACE.md) — the files the open items cite, and the rule for everything else |
| What is done | [`CLOSED.md`](./CLOSED.md) — every discharged item, its evidence and its date |

Run `npm run readiness` for the register's own tally, and `npm run commission` for the gate's.
Where a document and a command disagree, the command governs.

> **`npm run setup -- --recover` is retired and exits 2.** The corpus it reads describes the
> pre-rotation estate: all 25 endpoint keys now point at different workflows, so a configuration
> built from it looks complete and answers 401 on every call. The **development posture is not**
> retired — it is wired from `endpoint-register.json` instead, which carries a complete trigger
> URL for every one of the 25. It is graded at the same bar as pilot, because the same
> configuration reaching it should not clear more easily under a different name; what it declares
> is that nothing is enforced and this configuration must never face the public.

---

## Why it wasn't running

Three of the commands this repository documented did not exist.

`README.md` told you to run `npm install && npm run go`. `.devcontainer/devcontainer.json`
ran `npm install && npm run setup` on every Codespace create. Neither script was in
`package.json` — they were written on a branch (PR #5, "One-command setup and Codespaces
support") that was closed rather than merged, and only the documentation half was carried
forward. So:

- every Codespace failed its `postCreateCommand`,
- every reader following the README hit `npm error Missing script: "go"`,
- and `npm run serve:portal` was equally absent.

All three now exist and are covered by `tests/commissioning.test.mjs`, which asserts that
every `npm run` referenced by the README or the devcontainer resolves — so this
particular failure cannot return silently.

---

## What is in this repository, and what is not

This is the boundary that governs everything below.

| | Where it lives | Who can do it |
|---|---|---|
| Runtime, portal, routing, RBAC surface, themes | this repository | done |
| Endpoint wiring, auth activation, readiness gate | this repository | `npm run setup`, `npm run commission` |
| **Flow token validation, role derivation, per-action authorisation, rate limiting, reference minting, upload ticketing** | **Power Automate** | **only you** |
| SAS signature rotation | Power Automate | only you |
| SharePoint lists and columns | your tenant | only you |
| Hosting the front end, and gating who may load it | your infrastructure, outside this repository | only you |
| ~~Identity-provider tenant and client IDs~~ | **not required** — no identity provider is depended on | — |

The middle row is gap **G-04**, and it is the one that matters most. An authenticating
proxy used to discharge it; that proxy has been removed. Every obligation it carried now
belongs to the individual flow, because the browser calls each flow directly with no
intermediary. **No amount of work in this repository can close G-04.** The gate is honest
about this: it reports the server half as unverifiable, never as done, no matter how
completely the client half is configured.

---

## The path

### 0 · See where you are

```bash
npm install
npm run setup          # scaffolds both config files; demo mode, transmits nothing
npm run commission     # tells you what stands between here and live
```

`npm run setup` with no values is not a failure — it is the correct state for a fresh
clone or a Codespace. The platform boots and runs locally with nothing transmitted.

### 1 · Decide the posture

Three postures. Development and pilot are wired identically and graded identically; what differs
is the declaration each makes about enforcement. Enforced is a different product. Choose before
you build flows, because the flows differ.

**Development** — wired to the same live estate, from the tenant's own register:

```bash
npm run values:template ~/dgo-values.txt   # all 25 keys, URLs complete bar the signature
npm run values:sign -- ~/dgo-values.txt <KEY>   # once per flow
npm run check:values -- ~/dgo-values.txt
npm run setup -- --values ~/dgo-values.txt --force
npm run commission -- --posture development
npm run verify:endpoints     # prove the wiring against the live flows
```

This covers **all 25 endpoint keys** — 18 internal and 7 portal, served by 20 distinct
workflows — because `docs/reference/endpoint-register.json` carries a complete trigger URL for
every one of them, signature removed. Nothing is left unwirable.

**This supersedes the "17 of 24" position this section used to state, and the "22 of 24" before
that. Both were readings of `docs/reference/foundational/`, a corpus that describes a previous
estate: when the register was first reconciled against it, all 25 keys pointed at different
workflows. `npm run recover`, which read that corpus, is retired and exits 2.** Neither count
was a count of this estate, and neither limitation is real:

- `SCAN_INTAKE` was described here as unbuilt. It is built — `IP_SCAN_INTAKE`, a raw-bytes
  **PUT** trigger, exported at `docs/reference/flow-contracts/deployed/`, with a trigger URL in
  the register.
- portal `UPLOAD` was described here as built but unreachable, on the reading that its trigger
  declared `POST` while the portal `PUT`s. `CG_Upload_Endpoint`'s exported definition declares
  **PUT**, matching the portal. Its trigger URL is in the register.

Both facts are asserted by `tests/endpoint-register.test.mjs` against the deployed definitions,
so this paragraph cannot drift back without a suite going red. `npm run keyimpl` reports the
implementation position for every key from those definitions rather than from this page — it
currently reports 0 keys with no flow and 0 implemented but unreachable.

The point is to stop rebuilding throwaway flows every development cycle. Configuration is
exercised against flows that already exist, so a wrong action name or a response shape the
client cannot read surfaces here — not in production, against a fresh estate nobody has
ever called. Production then gets one estate, built once, from a configuration already
proven.

> The signatures this wires are **published** — committed to this repository, held by
> anyone who can read it. `npm run commission` accepts them in the development posture and
> **refuses them in pilot and enforced**, so this wiring cannot reach production by
> accident. Never point it at real correspondence or expose it publicly.

**Pilot** — whatever gates who may *load* the interface is set up outside this repository.
Authentication stays inert: caller identity is a client-asserted `userEmail` from
`localStorage`, and RBAC is advisory, so editing one storage key escalates a viewer to
`systemAdmin`. That gate does not sit between the page and the flows, so a flow called
directly answers whoever calls it.

> Fit for an internal pilot on correspondence you accept being readable by anyone holding
> a URL. **Not fit for the personal data of ~785 individuals** (finding R-01) — the pilot
> posture does not protect it.

**Enforced** — `auth.enabled: true` with `OTP_GENERATE` and `OTP_VERIFY` wired, roles read
from the verified proof, **and each flow verifying that proof itself**. The client half is
here and ready. The server half is the row you cannot delegate.

```bash
npm run commission -- --posture development
npm run commission -- --posture pilot
npm run commission -- --posture enforced
```

`enforced` no longer asks for anything you have to go and get. No identity provider is
depended on: there is no tenant to register, no client id to obtain and no administrator's
approval on the path.
What it asks for is two endpoints, and they arrive in the package with every other URL — so
activation is a flag rather than a procurement. What does not change is that **every
authentication and authorisation decision belongs to the flow**. The gate reports it as a
standing manual obligation in every posture, because no check in this repository can
verify a Power Automate flow.

### 1a · Prove the wiring against the live flows

```bash
npm run verify:endpoints                    # read-only probes
npm run verify:endpoints -- --include-writes
npm run verify:endpoints -- --only FETCH_ALL,GET_DOCS
npm run verify:endpoints -- --json report.json
```

Calls each configured flow for real and reports status, latency, and whether the response
carries the keys the client reads. Write endpoints are skipped unless you ask for them —
about two thirds of the surface mutates a real register — and every write probe is tagged
`__DGO_PROBE__` with a run id so the rows can be found and deleted afterwards.

Three outcomes, kept distinct on purpose:

| | Meaning |
|---|---|
| **answered** | 2xx, or a 4xx the flow itself produced. A flow that refuses a thin probe payload is a flow that validates its input. |
| **unauthorised / stale / flow error** | Reached Power Automate; the signature is revoked, the URL is stale, or the flow is erroring. |
| **never reached** | A transport failure, or a non-JSON body — which means a proxy or egress filter answered, not the tenant. **This verifies nothing about your configuration.** |

That last row matters. A Power Automate manual trigger answers JSON or nothing, so a
non-JSON body is proof the call never arrived. If your network blocks
`*.environment.api.powerplatform.com`, every probe lands there and the run tells you about
your network, not your endpoints. Run it from a machine whose egress policy allows the
host.

The finding worth looking for is the middle case that still says *answered*: the flow is
live but its response does not carry what the client reads. `SUBMISSION` is the known one —
the documented portal flow answers `{ trackingId, referenceId, … }` while the portal
expects `{ referenceId, uploads: [ticket, …] }`. That is exactly the class of defect this
step exists to surface while it is still cheap to fix.

### 1b · Provision identity and roles

```bash
npm run seed:roles                                    # regenerate from config/rbac.config.js
./scripts/setup-sharepoint.ps1 -SiteUrl "…" -WhatIf   # report
./scripts/setup-sharepoint.ps1 -SiteUrl "…"           # 10 lists · 97 fields · 10 seed rows
```

The provisioner now creates seed items as well as lists and fields. It previously created
neither the six `DGO_RoleCatalogue` rows nor the bootstrap directory entry, so the role
catalogue provisioned empty every time.

`DGO_RoleCatalogue` is seeded from `docs/reference/role-catalogue-seed.json`, generated
from `config/rbac.config.js` rather than from the workbook. The workbook predates decision
D6(b) and scan-intake, and grants three roles fewer routes than the platform actually does
— executive 9 against 12, director 11 against 15, operator 13 against 16. `npm run test:roles`
runs in CI and fails if the two drift again.

Then extend `FETCH_ALL` to return a `users` collection from `DGO_UserDirectory`. That one
change makes role assignment real for reading: the packaged bootstrap administrator stops
applying and every caller's role comes from the register.

> **Until it does, every browser is a System Administrator.** `core/state.js` seeds a
> `systemAdmin` profile with `accessScope: ['all']` so a fresh clone can boot and render all
> 25 routes. That is correct for development and unacceptable anywhere else.

Full request and response contracts, including the OTP identity pair and what each governed
flow must verify: **[`docs/reference/flow-contracts/IDENTITY.md`](../reference/flow-contracts/IDENTITY.md)**.

### 2 · Rotate every exposed signature

**59 signed Power Automate trigger URLs are committed to this repository**, across 39
tracked files — largely the reference corpus under `docs/reference/foundational/`, which
documents the deployed flow estate verbatim by explicit decision (D5).

A SAS-signed URL is a bearer credential: possession alone authorises invoking the flow.
Anyone who can read this repository holds all 59 right now.

**Deleting a file revokes nothing. Rewriting history revokes nothing. Only regenerating
the signature in Power Automate revokes anything.**

`docs/deployment/MINIMAL-PILOT.md` §3a takes the stronger route for the flows you are not
using: delete them outright. Deletion invalidates every signature a flow has ever had,
including older ones that regeneration leaves live.

The gate catches the failure mode that matters here. If you wire an endpoint whose
signature also appears anywhere in this repository, it was never rotated, and
`npm run commission` blocks go-live and names the file the signature was published in.
Nothing else in the repository performs that check.

### 3 · Build the flows

Follow `docs/deployment/MINIMAL-PILOT.md` — about 75 minutes, six endpoints rather than
twenty-four, because every governed write goes through `DYNAMIC_ACTIONS`.

Each flow you keep is the only place its own validation, rate limiting, reference minting
and upload verification can happen. For the public channel specifically: `SUBMISSION`
must mint the `NITDA-YYYY-<sequence>` reference itself (unpadded, monotonic, never
restarting within a year), rate-limit by source, and issue one single-use upload ticket
per attachment; `UPLOAD` must redeem that ticket once and verify the received bytes
against the declared size and SHA-256.

### 4 · Wire the endpoints

Collect the regenerated URLs into a values file outside the repository, then:

```bash
npm run setup -- --values ~/dgo-values.txt --force
```

Accepted keys are `DGO_ENDPOINT_<KEY>` for the runtime and `PF_ENDPOINT_<KEY>` for the
portal (the bare key works too). For the enforced posture, add:

```
DGO_AUTH_ENABLED=true
DGO_AUTH_TENANT_ID=...
DGO_AUTH_CLIENT_ID=...
DGO_AUTH_ROLE_SOURCE=claims
```

Both target files are git-ignored and the gate blocks go-live if either becomes tracked.
Delete `~/dgo-values.txt` when you are done — every line in it is a credential.

### 5 · Deploy

Hosting the front end, and gating who may load it, are handled outside this repository.
Whatever you use to publish it needs to upload the working directory as-is, so both config
files must exist on disk first. Confirm the deployed hostname matches whatever your access
gate is configured against, or the internal interface is reachable without a sign-in.

### 6 · Verify, then declare

```bash
npm run commission     # must exit 0
npm test               # full suite
npm run test:smoke     # once more against the deployed hostname
```

Then the checks a script cannot make, from `MINIMAL-PILOT.md` §7: submit twice and
confirm the references are different and consecutive; confirm both land in SharePoint;
call `FETCH_ALL` anonymously with `curl` and understand what the status code tells you;
have one officer from each group sign in and check `#/diagnostics`; confirm two officers
on different machines see the same register.

Before real correspondence arrives, delete the test records and confirm the routing table
in `MINIMAL-PILOT.md` §8 — nobody has approved it yet.

---

## What the gate cannot tell you

`npm run commission` exiting 0 means no automated blocker stands. It does not mean the
platform is safe to run, and it is written not to imply that. Four obligations always
remain, and they always require a person:

1. **The flows enforce what they claim to.** Untestable from here. Verify each against an
   anonymous caller and an under-privileged caller before trusting any governance control.
2. **The routing table is approved.** `MINIMAL-PILOT.md` §8 decides which desk each kind
   of correspondence lands on.
3. **Test records are cleared** and the reference sequence does not continue from them.
4. **The data protection position is accepted** for the posture you chose. Finding R-01
   concerns the personal data of ~785 individuals; the repository being private closed the
   exposure, but live usage puts that data through a channel whose enforcement you have
   just selected.

---

## Reference

- `docs/deployment/MINIMAL-PILOT.md` — the short path
- `docs/deployment/FLOW-BUILD-WALKTHROUGH.md` — the full SharePoint/Power Automate walkthrough
- `docs/architecture/AUTHENTICATION_CONTRACT.md` — what the server half must do
- `docs/STATUS_REPORT.md` — the finding register
- `docs/audits/CAPABILITY_ASSESSMENT_R11.6.md` — the gap analysis behind G-03 and G-04
