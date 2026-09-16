# Reference corpus

Two trees here hold overlapping copies of the same flow definitions and trigger
schemas. That overlap is deliberate, and it keeps being reported as a defect, so
it is stated here once:

| Tree | Status | What it is |
|---|---|---|
| `flow-contracts/` | **Contract of record** | The curated, deduplicated set a rebuild is written against. Extracted from `ECM_DOCS_DEV.zip` and verified secret-free (`docs/cutover/ARCHIVE_DISPOSITION.md`). If a definition here and one under `foundational/` ever disagree, this one is correct. |
| `foundational/` | Raw harvest | The deployed estate as it was exported, verbatim, names and all. It is evidence of what exists in the tenant, not a statement of what should. Keep it verbatim: `scripts/lib/endpoint-recovery.mjs` reads signed trigger URLs back out of it to resolve endpoints by workflow id. |

Neither is derived from the other by a script. Deduplicating them into one tree
would lose something in both directions — the curated set would gain names that
only make sense as export artefacts, and the harvest would stop being a faithful
record of the tenant.

## Generated from those trees

| Document | Answers |
|---|---|
| [`FLOW_CATALOGUE.md`](./FLOW_CATALOGUE.md) | What each flow *is* — trigger, request properties, lists touched, conformance score, action tree. One page per flow, at a glance. |
| [`provisioning/`](./provisioning/README.md) | What each flow and endpoint is *configured with* — connections, trigger method and authentication posture, every response status code, header and body, every variable and its initial value, every action's configured inputs, verbatim. Built by `npm run provisioning`; `tests/provisioning-reference.test.mjs` proves each printed value is the value its package carries. |

Both are generated and both fail `npm test` when they drift from the definitions. Do not edit
either by hand.

## What is authoritative for what

| Question | Answer from |
|---|---|
| What must a rebuilt flow accept and return? | `flow-contracts/` |
| What does the deployed flow estate actually contain? | `foundational/` |
| What is a deployed flow actually configured with, value by value? | [`provisioning/`](./provisioning/README.md) |
| Which endpoints exist on each platform, and what does each send? | [`provisioning/ENDPOINT_REGISTER.md`](./provisioning/ENDPOINT_REGISTER.md) |
| Which endpoint key maps to which deployed workflow? | `scripts/lib/endpoint-recovery.mjs` |
| What did the platform promise to do? | `platform-architecture-pack/`, `business_requirements_functional_requirements_hybrid.txt` |
| What is provisioned in SharePoint? | `sharepoint-provisioning-spec.json` |
| What HTTP flow governance is *specified* but not yet built? | `http-flow-registry-spec.json`, extracted from `http-flow-registry-workbook.xlsx` |

`flow_run_record_schema.json` sits in `flow-contracts/` as the single canonical
copy of the run-record shape. It was previously present ten times, byte-identical,
scattered across `foundational/`.

## What is not kept

Recorded executions. `docs/cutover/ARCHIVE_DISPOSITION.md` settled the principle
when `ECM_DOCS_DEV.zip` was disposed of — **contracts are kept, recorded
executions are not** — and it is applied throughout: every `*__flow_run_record.json`
and every `record.json` has been removed, while every definition, every trigger
schema, and one response sample per flow remain.

The reasoning, and the per-directory detail, is in
[`foundational/flows/run-records/README.md`](./foundational/flows/run-records/README.md).

## The one extraction kept beside its source

`http-flow-registry-spec.json` is generated from `http-flow-registry-workbook.xlsx` by
`npm run httpflowregistry`, and `npm test` fails if the two disagree. The workbook is committed
for that reason: `sharepoint-provisioning-spec.json` is a verbatim transcription whose source is
gone, and it has since needed a correction note bolted onto `role-catalogue-seed.json` because
nothing could re-derive it. Edit the workbook and rebuild; never edit the JSON.

The workbook is design-time. Every execution-evidence value in it says what the provisioning
flow intends, not what a run achieved, and none of its seven lists is in the 2026-08-18 capture.
`tests/http-flow-registry.test.mjs` holds that distinction and reports it.

## Constraints on editing this tree

1. **Paths are length-constrained.** `tests/package-portability.test.mjs` enforces
   the shortened, Windows-safe paths so the repository ZIP extracts under the
   260-character `MAX_PATH` limit. Rename rather than restore a long path, and run
   `npm run test:portability` after any move.
2. **No signed URL may enter a new file.** `tests/check-secrets.mjs` and
   `tests/secret-exposure.test.mjs` gate this. The signatures already present in
   `foundational/` are a known, documented exposure pending rotation
   (`docs/deployment/MINIMAL-PILOT.md` §3a); they are not a licence to add more.
