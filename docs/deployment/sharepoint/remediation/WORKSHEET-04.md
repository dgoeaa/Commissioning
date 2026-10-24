# Worksheet - visit 4: 04-intake-writeback

**Closes:** C7. No flow anywhere patches Portal Registry, so a citizen can only ever be shown what SUBMISSION wrote. Six of the seven governed status values are unreachable.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `ECM_DOCS_INTAKE`  ·  internal name `df7ddff1-9275-4f23-acf6-e169525f4e2f`

## Step S - bring the flow onto the build standard

> Do the standard work FIRST, before the SharePoint actions in Step B. The variables and Scope_Global have to exist before an action can reference them, and moving actions into a scope afterwards is where things get dropped.

> D7 - the standard work rides along with each visit rather than waiting for a sixth pass. The flow is already open, and adding a catch scope to a flow whose actions you have just rewritten costs a fraction of coming back to it.

### `ECM_DOCS_INTAKE`  -  33% by rule count before

**Initialise the standard variable set**  ·  `vars.core`

Three Initialize variable actions at the very top of the flow, before Scope_Global.

| Action to add | Type | Value |
|---|---|---|
| `Initialize_variable_varStatusCode` | Integer | `200` |
| `Initialize_variable_varData` | Object | `{}` |
| `Initialize_variable_varErrors` | Array | `[]` |

*Why:* One response envelope can only serve every flow if every flow reports its outcome the same way.

**Initialise the timing variables**  ·  `vars.timing`

Four more Initialize variable actions, alongside the core set.

| Action to add | Type | Value |
|---|---|---|
| `Initialize_variable_varRequestId` | String | `@guid()` |
| `Initialize_variable_varReceivedAtUtc` | String | `@utcNow()` |
| `Initialize_variable_varStartTicks` | Integer | `@ticks(utcNow())` |
| `Initialize_variable_varCompletedAtUtc` | String | `` |
| `Initialize_variable_varDurationMs` | Integer | `0` |

Then add a Scope named `Scope_Finalize_Response_State`. Inside Scope_Global, after the work and before the envelope.

| Action inside it | Value |
|---|---|
| `Set_variable_varCompletedAtUtc` | `@utcNow()` |
| `Set_variable_varDurationMs` | `@div(sub(ticks(utcNow()), variables('varStartTicks')), 10000)` |

*Why:* The envelope and the run record both report timing. Computing it once is what keeps them agreeing.

**Wrap the work in Scope_Global**  ·  `scope.global`

Add a Scope named Scope_Global and move every existing action except the Initialize variable actions inside it.

*Why:* One place to attach a catch. Without it the failure path has to be repeated on every branch, which is why the flows missing this are the same flows missing a catch.

**Answer through the standard envelope**  ·  `response.envelope`

Add a Compose named Compose__Standard_Response_Revised as the last action inside Scope_Global, before the Response.

Paste into **Inputs**:

```json
[object Object]
```

*Why:* core/contracts.js unwraps exactly this shape. A flow answering anything else has to be special-cased in the client, which is how one-off shapes accumulate.

**Redact headers before capture**  ·  `redaction.headers`

Inside Scope_Flow_Data_Capture, add a Compose named Compose_Redacted_Headers, running after Compose_Redacted_Queries.

Paste into **Inputs**:

```json
@setProperty(
  setProperty(
    setProperty(
      setProperty(
        coalesce(triggerOutputs()?['headers'], json('{}')),
        'Authorization',
        '***REDACTED***'
      ),
      'Cookie',
      '***REDACTED***'
    ),
    'x-api-key',
    '***REDACTED***'
  ),
  'Ocp-Apim-Subscription-Key',
  '***REDACTED***'
)
```

Then open `Compose_Flow_Run_Record` and add one key under `request`:

| Key | Value |
|---|---|
| `headers_redacted` | `@coalesce(outputs('Compose_Redacted_Headers'), json('{}'))` |

> Same: an unconsumed Compose redacts nothing. Compose_Flow_Run_Record must also be moved to run after Compose_Redacted_Headers, or it composes before the value exists.

*Why:* Without it the observability harness becomes the leak.

**Redact the query string before capture**  ·  `redaction.queries`

Inside Scope_Flow_Data_Capture, add a Compose named Compose_Redacted_Queries. Place it first in that scope, immediately after Get_Flow_Definition.

Paste into **Inputs**:

```json
@setProperty(
  setProperty(
    coalesce(triggerOutputs()?['queries'], json('{}')),
    'sig',
    '***REDACTED***'
  ),
  'code',
  '***REDACTED***'
)
```

Then open `Compose_Flow_Run_Record` and add one key under `request`:

| Key | Value |
|---|---|
| `queries_redacted` | `@coalesce(outputs('Compose_Redacted_Queries'), json('{}'))` |

> Adding the Compose without this leaves it inert: the run record captures no query string at all, and the conformance check still passes. The rule is about what reaches telemetry, not about an action existing.

*Why:* sig is the trigger credential and code is the one-time password. On the verification flows this is the difference between telemetry and a log of every OTP issued.

## Step A - restructure

- Wrap the existing Scope_Global_Intake_Feed in a Switch. Move nothing inside it.
- `+ New step` -> `Switch` -> **Control / Switch**. Set **On** to:

      @coalesce(triggerBody()?['action'], 'feed')

- Case `feed` - The existing Scope_Global_Intake_Feed, byte for byte. This is also the default, so every caller sending no action keeps the behaviour it has today.
- Case `writeback` - Scope_Writeback, below.

## Step B - the SharePoint actions  (3 total)

`+ New step` -> `SharePoint` -> the operation named below. Pick **Site Address** and **List Name** from the dropdowns *by name*; the GUID is to confirm afterwards in Peek code.

### B1. `Get_Registry_Row_By_Reference` - **Get items**   *(new action)*

> Missing reference is a 404, not a create. This branch never inserts into the registry - only the portal may do that.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Registry`  ·  GUID `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{coalesce(triggerBody()?[''reference''],'''')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B2. `Patch_Registry_Status` - **Update item**   *(new action)*

> Status must be one of the seven governed keys in config/status-vocabulary.config.js. Reject anything else rather than writing a word the portal cannot render.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Registry`  ·  GUID `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Registry_Row_By_Reference')?['body/value'])?['ID']` |
| **Status   [Status]** | `@triggerBody()?['status']` |
| **Status Label   [StatusLabel]** | `@triggerBody()?['statusLabel']` |
| **Action Required   [ActionRequired]** | `@coalesce(triggerBody()?['actionRequired'],false)` |
| **Acknowledged At (UTC)   [AcknowledgedAtUtc]** | `@triggerBody()?['acknowledgedAtUtc']` |
| **Closed At (UTC)   [ClosedAtUtc]** | `@triggerBody()?['closedAtUtc']` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B3. `Create_Timeline_Event` - **Create item**   *(new action)*

> The timeline is what the citizen actually reads. A status patched without an event is a change nobody can see.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Status Timeline`  ·  GUID `5b486a5e-0ce7-46d7-a159-d84c77f3d1fd`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@coalesce(triggerBody()?['reference'],'')` |
| **Submission Reference   [SubmissionRef]** | `@coalesce(triggerBody()?['reference'],'')` |
| **At (UTC)   [AtUtc]** | `@utcNow()` |
| **Status   [Status]** | `@triggerBody()?['status']` |
| **Label   [Label]** | `@triggerBody()?['statusLabel']` |
| **Actor   [Actor]** | `@coalesce(triggerBody()?['actor'],'registry')` |
| **Note   [Note]** | `@coalesce(triggerBody()?['note'],'')` |

## Step C - the one code change

In `config/endpoints.config.js`, inside `EndpointContracts`, add:

```js
PORTAL_STATUS_WRITEBACK: Object.freeze({ method:'POST', action:"writeback", write:true, sourceKey:"SCAN_INTAKE", url:EndpointUrls.SCAN_INTAKE }),
```

Same flow, same URL, different fixed action. No new endpoint to configure, rotate or publish.

## Step D - verify

- npm run wiring   # C7 appears with both operations and the boundary section stays clean
- Patch a submission to review and read it back through STATUS - the citizen must see the new status and a second timeline event
- Call ECM_DOCS_INTAKE with no action and confirm the feed is unchanged
- `node scripts/verify-flow-standard.mjs --portal` - this flow's conformance must rise
