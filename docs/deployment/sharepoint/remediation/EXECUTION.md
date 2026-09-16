# Execution guide — everything to do, in order

> **The approach changed on 2026-08-20.** Hand-editing 123 actions across 11 flows is a
> ~20-hour path. See [`PLAN.md`](./PLAN.md) — the flows are patched as definition packages
> instead, which is about three and a half hours and verifies the whole remediation before
> the tenant is touched. The worksheets below stay valid as the fallback, and as the record
> of what each patch does.

Environment: `Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1`
Repository on your machine: `C:\ECM_DOCS_DEV`
Branch: `claude/sharepoint-lists-gap-bqo7j7`

---

## The complete task list

| # | Task | Where | Worksheet |
|---|---|---|---|
| 0 | Refresh the repo and confirm the baseline | PowerShell | — |
| 1 | **Visit 1** — OTP estate split, attempt cap, rate limits, outbox receipt | Power Automate designer | [`WORKSHEET-01.md`](./WORKSHEET-01.md) |
| 2 | Re-export the two flows, redact, sweep, send | PowerShell | — |
| 3 | **Visit 2** — SUBMISSION writes the registry | designer | [`WORKSHEET-02.md`](./WORKSHEET-02.md) |
| 4 | Re-export, redact, sweep, send | PowerShell | — |
| 5 | **Visit 3** — STATUS reads the registry | designer | [`WORKSHEET-03.md`](./WORKSHEET-03.md) |
| 6 | Re-export, redact, sweep, send | PowerShell | — |
| 7 | **Visit 4** — the intake write-back branch | designer + one code edit | [`WORKSHEET-04.md`](./WORKSHEET-04.md) |
| 8 | Re-export, redact, sweep, send | PowerShell | — |
| 9 | **Visit 5** — UPLOAD and SUPPORT | designer | [`WORKSHEET-05.md`](./WORKSHEET-05.md) |
| 10 | Re-export, redact, sweep, send | PowerShell | — |
| 11 | **Visit 0** — one Switch label rename | designer | [`WORKSHEET-00.md`](./WORKSHEET-00.md) |
| 12 | Rotate the seven leaked API keys | provider consoles | see below |
| 13 | Send the twenty workflow ids from `config.local.js` | your machine | see below |

Tasks 1, 3, 5, 7, 9 are designer work. Everything else is a command or a paste.

**You never need to send a whole flow by hand.** Task 2, 4, 6, 8, 10 are the same three
commands each time, with one id changed.

---

## Task 0 — baseline, once

Open **Windows PowerShell** (not PowerShell 7). Then:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
```
```powershell
cd C:\ECM_DOCS_DEV
```
```powershell
git fetch origin claude/sharepoint-lists-gap-bqo7j7
```
```powershell
git checkout claude/sharepoint-lists-gap-bqo7j7
```
```powershell
git pull origin claude/sharepoint-lists-gap-bqo7j7
```
```powershell
node scripts/verify-portal-wiring.mjs
```

Expect the last line to read:

```
  0/59 required operations in place, 0/7 endpoints fully wired.
```

That is the number every visit moves. Write it down.

---

## Tasks 1, 3, 5, 7, 9 — the designer work

Open the worksheet for the visit. It names the flows, the actions, the exact designer field
labels and the exact value for each. Three rules that apply to all of them:

**Rename every action to the name in the worksheet.** `...` menu → **Rename**. Later actions
reference earlier ones by name; one character out and the reference silently resolves to
nothing and the flow still saves.

**Pick Site Address and List Name from the dropdowns, by name.** Never type the GUID. The
designer has to enumerate the list to show you the column boxes, and a custom value gives you a
single opaque field instead. The GUIDs in the worksheet are for confirming afterwards.

**Paste expressions into the expression box, not the dynamic-content box.** Anything starting
`@` is an expression. In the field, click **fx** (or the Expression tab) and paste there,
without the leading `@` if the box already supplies it — the designer shows `@{...}` around
what you type.

Save the flow when the visit's worksheet is complete. Do not test from the designer yet.

---

## Tasks 2, 4, 6, 8, 10 — the return leg

Same three commands every time. Only the `-WorkflowId` list changes.

### After visit 1

```powershell
cd C:\ECM_DOCS_DEV
```
```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId 86897b2f-9770-4efa-8486-2642f24bb947, 3b69aa71-ffed-4956-9d20-2aa3021a8da0
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
```
```powershell
node scripts/flow-list-sweep.mjs --write ; node scripts/verify-portal-wiring.mjs
```

Then zip **only the two files that changed** and attach them here:

```powershell
Compress-Archive -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Portal_Verify*.json -DestinationPath $HOME\Desktop\visit-01.zip -Force
```

### After visit 2

```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId 270fb295-b1de-40e2-b36d-889a61a887a0, de9ef13b-ae4c-42b0-9afa-20e71a180759
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
node scripts/flow-list-sweep.mjs --write ; node scripts/verify-portal-wiring.mjs
Compress-Archive -Path "C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\*SUBMISSION*.json","C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\*UBMISSION*.json" -DestinationPath $HOME\Desktop\visit-02.zip -Force
```

### After visit 3

```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId e21e7b9f-58c3-45be-bd47-6754ce6a895f, badb65d8-f472-407e-8975-c29d77b855d7
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
node scripts/flow-list-sweep.mjs --write ; node scripts/verify-portal-wiring.mjs
Compress-Archive -Path "C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Portal_ECM_DOCS_STATUS*.json","C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Portal_Status_Enquiry*.json" -DestinationPath $HOME\Desktop\visit-03.zip -Force
```

### After visit 4

```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId df7ddff1-9275-4f23-acf6-e169525f4e2f
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
node scripts/flow-list-sweep.mjs --write ; node scripts/verify-portal-wiring.mjs
Compress-Archive -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\ECM_DOCS_INTAKE*.json -DestinationPath $HOME\Desktop\visit-04.zip -Force
```

### After visit 5

```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId ae4b2a44-2388-42c7-baaf-86de3d6fa664, 9bd6724c-5a8f-4e74-9d3e-3c1eeaef2d06, 39d65c5b-5539-43de-aec6-52bfcd31bcc1, 1b2c2e53-6c07-46a3-80b2-c43be1ef69db
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
node scripts/flow-list-sweep.mjs --write ; node scripts/verify-portal-wiring.mjs
Compress-Archive -Path "C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\*UPLOAD*.json","C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Portal_Upload_HTTP*.json","C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Portal_ECM_DOCS_SUPPORT*.json" -DestinationPath $HOME\Desktop\visit-05.zip -Force
```

### After visit 0

```powershell
.\scripts\export-power-automate-flows.ps1 -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 -OutDir C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed -WorkflowId 1abbe547-9d7e-430e-bc2d-3ed59bc738b9
```
```powershell
.\scripts\redact-signed-urls.ps1 -Path C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed
Compress-Archive -Path "C:\ECM_DOCS_DEV\docs\reference\flow-contracts\deployed\Universal*.json" -DestinationPath $HOME\Desktop\visit-00.zip -Force
```

### What to expect from the last command each time

`verify-portal-wiring.mjs` prints the moved numbers. These are the targets:

| After visit | Operations | Boundary crossings | Portal conformance |
|---|---|---|---|
| 1 | 14/59 | 13 | both flows 100% |
| 2 | 27/59 | 11 | both submission flows 100% |
| 3 | 35/59 | 9 | both status flows 100% |
| 4 | 35/59 | 9 | `ECM_DOCS_INTAKE` 100% |
| 5 | 49/59 | 0 | **all 11 portal flows 100%** |

The denominator is 59, not 49, since [D11](../DECISIONS.md) put WRITEBACK in scope. These five
visits close 49 of them; WRITEBACK's ten are a sixth piece of work with its own flow, its own
endpoint key and a client that does not exist in this build.

Conformance is the third number, from `node scripts/verify-flow-standard.mjs --portal`. It
starts at a 44% portal median. Each visit does its standard work first — see **Step S** at the
top of that visit's worksheet — then its wiring.

Visit 4 does not move the operation count because C7's two operations sit on the bridge rather
than on a public endpoint; `npm run wiring` reports it in the bridge line instead.

Attach the visit zip here after each. That is all I need — I re-run the sweep on my side,
confirm the move matches the table, update the map and the register, and tell you if anything
landed differently from the worksheet.

---

## Task 12 — rotate the seven leaked keys

These are live at their providers and readable by anyone who can open the flow in the designer.
Redacting the repository copies changed nothing about that.

| Provider | Console | Flows holding it |
|---|---|---|
| Google | console.cloud.google.com → APIs & Services → Credentials | `DGSO INCOMING AI PROCESSING`, `Digital Hub Email AI Assist`, `Web - Email AI Assist`, `Web - Email To Task Processing` |
| OpenRouter | openrouter.ai/keys | `Instant OpenRouter AI Chat` |
| OpenAI | platform.openai.com/api-keys | `Web - Preprocess user message` |
| Hugging Face | huggingface.co/settings/tokens | `Persistent GPT AI Chat in App` |

### Order matters, and getting it wrong breaks seven flows

Revoking a key before the flow that uses it has been pointed at the replacement takes that flow
down. Do it in this order:

1. **Check for misuse first.** Each console shows usage or billing for the period. Look for
   spend or call volume that does not match four AI-assist flows in one agency. This is the
   step that tells you whether the exposure was ever acted on, and it is worth doing before
   anything is rotated, because revoking destroys the evidence trail on that key.
2. **Create the replacement key.** Harmless on its own — the old key keeps working, nothing
   breaks, and the new value is ready for the desktop session.
3. **Put the new value in a Power Automate environment variable** (or an Azure Key Vault
   reference) and point each flow's HTTP action at that, **not** back into the action body.
   A key pasted into an action is a key the next export carries out again.
4. **Only then revoke the old key.**

Steps 1 and 2 need nothing but a browser. Step 3 is desktop work.

### Assessing the urgency honestly

These keys were never pushed to a public repository — GitHub's push protection rejected the
commit that would have done it. The exposure is: anyone with designer access to those seven
flows can read them, plus the copies that sat in the export directory and one zip file. That is
a narrower blast radius than a public leak, which is why step 1 comes before step 4 rather than
the other way round. It is not a reason to leave them.

---

## Working without a machine

Tasks 1, 3, 5, 7, 9 and 11 are Power Automate designer work and need a desktop. The flows run
between 30 and 250 actions with expression editors and dynamic-content panels; the Power
Automate mobile app can run and monitor flows but cannot edit a definition, and the web designer
on a phone costs more mistakes than it saves.

What does not need a machine:

- **Task 12 steps 1 and 2** — check each provider console for misuse, create the replacement
  keys. Every console works in a mobile browser.
- **Reading and approving the worksheets.** They are plain Markdown in this repository and
  render on github.com in a phone browser.
- **Handing a visit to a colleague.** Each worksheet is self-contained: it names the flows by
  display name and internal id, the operation to pick for every action, the site and list to
  select, and the exact value for every field. Someone who has never seen this thread can work
  from `WORKSHEET-01.md` alone, and the return leg is three commands from `EXECUTION.md`.

Task 13 — the twenty workflow ids — needs the machine holding `config/config.local.js`, which is
git-ignored and never leaves it.

---

## Task 13 — the twenty workflow ids

On the machine that holds `config/config.local.js`:

```powershell
Select-String -Path C:\ECM_DOCS_DEV\config\config.local.js -Pattern '/workflows/([a-f0-9]{32})/' -AllMatches | ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
```

That prints ids only — no `sig` token, nothing that is a credential. Paste the list here with
the endpoint key beside each if you have it. It closes the last attribution ambiguities:
`GET_DOCS` had six candidates, `FETCH_ALL` three, `BULK_ASSIGNMENT` a conflict between two
sources, and five keys have no id recorded anywhere.

---

## If something goes wrong

| What you see | What to do |
|---|---|
| A field in the worksheet does not exist in the designer | The list picked is wrong. Check the GUID under `Peek code` against the worksheet. |
| The designer shows one opaque box instead of column fields | List Name was entered as a custom value. Re-pick it from the dropdown by name. |
| An expression shows as literal text at run time | It was pasted into the dynamic-content box. Use **fx** / the Expression tab. |
| `verify-portal-wiring.mjs` does not move after a visit | The export did not pick up the save, or the flow saved with the actions on a branch the sweep reads as unreachable. Send the zip anyway and say what you expected. |
| The export says a flow is not found | That flow is owned by someone else. Tell me which, and it goes to its owner or gets co-owned to you. |
