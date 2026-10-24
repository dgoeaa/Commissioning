# `docs/` — index

Everything this repository writes down, other than the four markdown files at its
root ([`README.md`](../README.md), [`CONTRIBUTING.md`](../CONTRIBUTING.md),
[`PLATFORM_DOCUMENTATION.md`](../PLATFORM_DOCUMENTATION.md), `LICENSE`).

Three kinds of document live here, and they are not interchangeable.

| | Kind | Read it as | Where |
|---|---|---|---|
| **Specification** | What the system must do | Binding. Change the code to match, or change this and say why | `architecture/`, `reference/flow-contracts/` |
| **Procedure** | What you must do | Binding while you are doing it | `deployment/`, `cutover/` |
| **Record** | What was true on a date | Historical. Never edit to make it agree with the present | `audits/`, `forensic/`, `handoff/` |

## Specifications

- [`architecture/TARGET_ARCHITECTURE.md`](./architecture/TARGET_ARCHITECTURE.md) — where the platform is going
- [`architecture/AUTHENTICATION_CONTRACT.md`](./architecture/AUTHENTICATION_CONTRACT.md) — the activation spec, and the seven server-side obligations that belong to the Power Automate flows. This is the open half of **G-04**
- [`architecture/AUTH_RBAC_GUIDE.md`](./architecture/AUTH_RBAC_GUIDE.md) — the consolidated auth/RBAC guide for both apps: what's configured where, the role/permission/route matrix, identity resolution in both postures, the document-portal's separate (role-free) verification model, and the combined enablement runbook
- [`architecture/ADMIN_MONITORING_MANAGEMENT_SPEC.md`](./architecture/ADMIN_MONITORING_MANAGEMENT_SPEC.md) — **the DGO Control Console.** Requirements and specification for a *standalone* administrative, monitoring and management application — a platform of the system in its own right, able to administer any one of the estate's platforms or all of them together: the internal runtime, the document portal, the flow and data estate, and the release toolchain. Sixteen components with their features, functions and **126 executable actions**; a target model with four deployment topologies; 14 dashboards; 48 metrics given as formulas; 43 alert rules with escalation chains; a telemetry data model; and eight backend obligations. States the boundary with the in-runtime Admin Suite rather than competing with it, and measures the present rather than describing it — monitoring that is device-local, 54 monitoring records carrying no threshold or alerting, and 16 of 39 notification obligations provisioned
- [`reference/README.md`](./reference/README.md) — what `flow-contracts/` is and how to cite it
- [`reference/flow-contracts/INTERNAL_PLATFORM_FLOWS.md`](./reference/flow-contracts/INTERNAL_PLATFORM_FLOWS.md) — every internal-platform endpoint's request/response wire shape, traced to the exact client call site, including every operation variant `DYNAMIC_ACTIONS` and `SUBSIDIARY_ACTIONS` carry and where the two disagree on which field is the discriminator
- [`reference/flow-contracts/DOCUMENT_PORTAL_FLOWS.md`](./reference/flow-contracts/DOCUMENT_PORTAL_FLOWS.md) — the sole reference for all six `document-portal/` flows: trigger schema, exact request payload, every response variant, and every branch the client code takes on each — including which returned fields (`SUPPORT`'s `caseRef`, `SUBMISSION`'s `verification` retry path) the shipping UI never actually reads. Two companion forms of the identical content: [`DOCUMENT_PORTAL_FLOWS.json`](./reference/flow-contracts/DOCUMENT_PORTAL_FLOWS.json) (machine-readable) and [`DOCUMENT_PORTAL_FLOWS.html`](./reference/flow-contracts/DOCUMENT_PORTAL_FLOWS.html) (browsable, printable)
- [`reference/provisioning/`](./reference/provisioning/README.md) — the provisioned state: what every flow and endpoint on both platforms is **actually configured with**, read out of the packages and printed as they carry it. Connections, trigger method and authentication posture, full request schema, every response status code, header and body, every variable and its initial value, error-handling edges, and the configured inputs of all 4,187 actions, verbatim. Start at [`ENDPOINT_REGISTER.md`](./reference/provisioning/ENDPOINT_REGISTER.md) for the endpoints. Generated — `npm run provisioning` — and held to the packages by `tests/provisioning-reference.test.mjs`

## Procedures

- [`deployment/COMMISSIONING.md`](./deployment/COMMISSIONING.md) — what stands between this repository and a live deployment. `npm run commission` checks it mechanically
- [`deployment/COMMISSIONING_SURFACE.md`](./deployment/COMMISSIONING_SURFACE.md) — **read this before reading anything else here.** Which files the open items actually cite, which trees are record rather than current state, and which commands are retired. Generated from the register; `npm run test:surface` fails on drift
- [`deployment/PACKAGING.md`](./deployment/PACKAGING.md) — `npm run package`: building the two artefacts that get handed over, with their endpoint URLs provisioned into them and a manifest hashing every byte. The build gate that refuses a package with a malformed or unrotated endpoint
- [`deployment/MINIMAL-PILOT.md`](./deployment/MINIMAL-PILOT.md) — the smallest real deployment. Its signature-rotation steps are discharged: `ITEM-22` rotated the estate and 0 of the disclosed 43 appear in the tenant endpoint register
- [`deployment/FLOW-BUILD-PLAN.md`](./deployment/FLOW-BUILD-PLAN.md) — building the flows that discharge the authentication contract
- [`deployment/LOCAL-DEV.md`](./deployment/LOCAL-DEV.md) — `npm run dev`: a local server that stands in for the flow estate, so you can exercise both apps end to end without a tenant. Development tooling, not a commissioning step
- [`reference/flow-contracts/REMEDIATION_PLAN.md`](./reference/flow-contracts/REMEDIATION_PLAN.md) — one dedicated entry per non-aligned row in `ALIGNMENT_REPORT.json`: owner (flow / decision / verification-gap / documentation), concrete steps, and how to verify the fix. Ordered by severity, with a tracking checklist
- [`cutover/`](./cutover/) — migration sequencing and [`ARCHIVE_DISPOSITION.md`](./cutover/ARCHIVE_DISPOSITION.md), the rule that governs what this repository keeps: **contracts are kept, recorded executions are not**

## Records

- [`audits/OPERATIONAL_READINESS_AUDIT.md`](./audits/OPERATIONAL_READINESS_AUDIT.md) — **the current audit.** Both platforms, every branch, and what stands between here and live operationalization
- [`STATUS_REPORT.md`](./STATUS_REPORT.md) — position and finding register, written at a date
- [`audits/INDEX.md`](./audits/INDEX.md) — the audit documents, their supersession chain, and the two findings that remain open
- [`handoff/INDEX.md`](./handoff/INDEX.md) — the mobile shell workstream R-1 → R-4, its ten briefs, reviews and adjudications. Written against a `main` lineage whose commits are **not in this history**; the five files it produced were ported in on 2026-09-08 and the ratchet it measured against runs as `npm run test:css`
- [`forensic/dd2e909/`](./forensic/) — a forensic snapshot of one commit. **Deliberately not rewritten** by later reorganisations; correcting its paths would falsify it
- [`visual/`](./visual/README.md) — generated architecture and status console, drift-tested by `npm run test:visual`. Where it and a written document disagree, it is right
- [`reference/flow-contracts/ALIGNMENT_REPORT.json`](./reference/flow-contracts/ALIGNMENT_REPORT.json) — machine-readable verdict, per endpoint, on whether the 2026-08-08 live-tenant probe transcripts agree with `INTERNAL_PLATFORM_FLOWS.md`. A record of that probe run, not a contract — re-probing supersedes it, it does not get hand-edited to match a later run
- [`reference/flow-contracts/flow-alignment-console.html`](./reference/flow-contracts/flow-alignment-console.html) — the same data, browsable: filter by app/verdict, search, and compare the documented contract against the live response side by side. Self-contained, no build step

## Policy

- [`policies/universal-filename-policy/`](./policies/universal-filename-policy/) — the policy deliverables. The policy itself is enforced by `tests/filename-policy.test.mjs`

## Two constraints on anything you add here

1. **Paths are length-limited.** `tests/package-portability.test.mjs` enforces the shortened, Windows-safe paths. If a path is too long, shorten it — do not restore the long form.
2. **No new signed URLs.** `tests/check-secrets.mjs` holds the count of files carrying live Power Automate SAS signatures at the baseline in `tests/secrets-baseline.txt`, which may only shrink. Adding one fails the build.
