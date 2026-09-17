# Worksheet - visit 3: 03-status-registry-read

**Closes:** C4. STATUS carries no $filter today and never queries by reference or email; it reads an unfiltered top-N of Global Tracking Queue.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `Portal_ECM_DOCS_STATUS`  ·  internal name `e21e7b9f-58c3-45be-bd47-6754ce6a895f`
- `Portal_Status_Enquiry`  ·  internal name `badb65d8-f472-407e-8975-c29d77b855d7`

### Delete these actions

- **Get_items_Tasks against Global Tracking Queue** - Boundary. An anonymous endpoint must not read the internal task register.
- **Create_file and Update_file_properties** - STATUS is a read. These are inherited from the submission flow it was copied from.

## Step S - bring the flow onto the build standard

> Do the standard work FIRST, before the SharePoint actions in Step B. The variables and Scope_Global have to exist before an action can reference them, and moving actions into a scope afterwards is where things get dropped.

> D7 - the standard work rides along with each visit rather than waiting for a sixth pass. The flow is already open, and adding a catch scope to a flow whose actions you have just rewritten costs a fraction of coming back to it.

### `Portal_ECM_DOCS_STATUS`  -  44% by rule count before

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

**Add Scope_Flow_Data_Capture**  ·  `telemetry.capture`

Add a Scope named Scope_Flow_Data_Capture as a top-level peer of Scope_Global, with 'Configure run after' set to Succeeded, Failed, Skipped and Timed out - it must run whatever happened.

*Why:* The observability harness twenty-three flows already carry. Adding it is what makes this flow visible in the same way as the rest of the estate.

**Compose the versioned run record**  ·  `telemetry.record`

Inside Scope_Flow_Data_Capture, add a Compose named Compose_Flow_Run_Record.

Copy it from `Any conforming flow - Fetch_Tasks_POST is the cleanest. Copy Compose_Flow_Run_Record verbatim; it reads only workflow(), trigger(), the redaction composes and the standard variables, so it is portable between flows unchanged.` — character for character, not retyped.

*Why:* capture_version 2.0.0, with its draft-07 schema alongside. Copying rather than rewriting is the point - a second dialect of the record is worse than none.

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

### `Portal_Status_Enquiry`  -  0% by rule count before

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

**Add a catch scope**  ·  `scope.catch`

Add a Scope named Scope_<Purpose>_Catch as a peer of the work scope, then set its 'Configure run after' to Failed, Skipped and Timed out - all three, not just Failed.

| Action to add | Type | Value |
|---|---|---|
| `Set_variable_varStatusCode_Catch` | - | `500` |
| `Append_to_array_variable_varErrors_Catch` | - | `@{concat('Unhandled failure in ', workflow()?['name'], ' run ', workflow()?['run']?['name'])}` |

*Why:* An HTTP-triggered flow that faults without a catch returns a platform error page to the caller instead of the envelope. On a public endpoint that page is also an information disclosure.

**Answer through the standard envelope**  ·  `response.envelope`

Add a Compose named Compose__Standard_Response_Revised as the last action inside Scope_Global, before the Response.

Paste into **Inputs**:

```json
[object Object]
```

*Why:* core/contracts.js unwraps exactly this shape. A flow answering anything else has to be special-cased in the client, which is how one-off shapes accumulate.

**Return the envelope**  ·  `response.action`

Add a Response action as the last action inside Scope_Global.

Paste into **Inputs**:

```json
[object Object]
```

*Why:* A request-triggered flow that never responds leaves the caller waiting for its timeout.

**Add Scope_Flow_Data_Capture**  ·  `telemetry.capture`

Add a Scope named Scope_Flow_Data_Capture as a top-level peer of Scope_Global, with 'Configure run after' set to Succeeded, Failed, Skipped and Timed out - it must run whatever happened.

*Why:* The observability harness twenty-three flows already carry. Adding it is what makes this flow visible in the same way as the rest of the estate.

**Compose the versioned run record**  ·  `telemetry.record`

Inside Scope_Flow_Data_Capture, add a Compose named Compose_Flow_Run_Record.

Copy it from `Any conforming flow - Fetch_Tasks_POST is the cleanest. Copy Compose_Flow_Run_Record verbatim; it reads only workflow(), trigger(), the redaction composes and the standard variables, so it is portable between flows unchanged.` — character for character, not retyped.

*Why:* capture_version 2.0.0, with its draft-07 schema alongside. Copying rather than rewriting is the point - a second dialect of the record is worse than none.

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

## Step A - Compose actions

`+ New step` -> `Compose` -> **Data Operations / Compose**. Rename each (`...` -> Rename).

| Rename to | Inputs |
|---|---|
| `Compose_Bucket_Status_Source` | `@concat('STATUS_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |
| `Compose_Bucket_Status_Reference` | `@concat('STATUS_REF:', coalesce(triggerBody()?['reference'],''))` |

> A name one character out resolves to nothing and the flow still saves.

## Step B - the SharePoint actions  (11 total)

`+ New step` -> `SharePoint` -> the operation named below. Pick **Site Address** and **List Name** from the dropdowns *by name*; the GUID is to confirm afterwards in Peek code.

### B1. `Get_Rate_Limit_Status_Source` - **Get items**   *(new action)*

> Stops a scraper walking the reference space.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Status_Source')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B2. `Update_Rate_Limit_Status_Source` - **Update item**   *(new action)*

> Run only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Status_Source')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Status_Source')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B3. `Create_Rate_Limit_Status_Source` - **Create item**   *(new action)*

> Run only when the bucket is absent or its window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Status_Source')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B4. `Get_Rate_Limit_Status_Reference` - **Get items**   *(new action)*

> A reference is guessable by construction - NITDA-<year>-<n>. This bucket stops someone hammering one they have guessed.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Status_Reference')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B5. `Update_Rate_Limit_Status_Reference` - **Update item**   *(new action)*

> Run only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Status_Reference')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Status_Reference')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B6. `Create_Rate_Limit_Status_Reference` - **Create item**   *(new action)*

> Run only when the bucket is absent or its window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Status_Reference')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B7. `Get_Verification_Proof` - **Get items**   *(new action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Verification Proofs`  ·  GUID `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{coalesce(triggerBody()?[''proof''],'''')}' and Consumed eq 0` |
| **Top Count  (Advanced parameters)** | `1` |

### B8. `Consume_Verification_Proof` - **Update item**   *(new action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Verification Proofs`  ·  GUID `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Verification_Proof')?['body/value'])?['ID']` |
| **Consumed   [Consumed]** | `true` |

### B9. `Get_Submission_By_Reference` - **Get items**   *(new action)*

> Both must match. The reference alone is guessable; the email is what binds the row to the caller. Answer a miss and a mismatch identically so the endpoint is not an oracle for which references exist.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Registry`  ·  GUID `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{coalesce(triggerBody()?[''reference''],'''')}' and SenderEmail eq '@{toLower(trim(coalesce(triggerBody()?[''email''],'''')))}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B10. `Get_Timeline_Events` - **Get items**   *(new action)*
- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Status Timeline`  ·  GUID `5b486a5e-0ce7-46d7-a159-d84c77f3d1fd`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `SubmissionRef eq '@{coalesce(triggerBody()?[''reference''],'''')}'` |
| **Order By  (Advanced parameters)** | `AtUtc asc` |
| **Top Count  (Advanced parameters)** | `100` |

### B11. `Create_Flow_Telemetry` - **Create item**   *(new action)*

> HOUSE STANDARD. Place inside Scope_Flow_Data_Capture, beside the existing Compose_Flow_Run_Record - not on the request path. The values are the standard variable set the skeleton already initialises; if this flow has no Scope_Flow_Data_Capture, add the scope first, because that is the conformance gap rather than this action.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Flow Telemetry`  ·  GUID `726c210d-09d5-45d9-952d-7a506b644b13`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@coalesce(workflow()?['tags']?['flowDisplayName'], workflow()?['name'])` |
| **Flow   [Flow]** | `@coalesce(workflow()?['tags']?['flowDisplayName'], workflow()?['name'])` |
| **Run ID   [RunId]** | `@workflow()?['run']?['name']` |
| **Started At (UTC)   [StartedAtUtc]** | `@variables('varReceivedAtUtc')` |
| **Completed At (UTC)   [CompletedAtUtc]** | `@variables('varCompletedAtUtc')` |
| **Outcome   [Outcome]** | `@if(less(variables('varStatusCode'),400),'Succeeded','Failed')` |
| **Duration (ms)   [DurationMs]** | `@variables('varDurationMs')` |
| **Error Message   [ErrorMessage]** | `@string(variables('varErrors'))` |

## Step D - verify

- npm run wiring   # STATUS moves from 0/7 to 7/7 and its two crossings clear
- Submit, then read the status back with the reference and email - the timeline must show the received event
- `node scripts/verify-flow-standard.mjs --portal` - this flow's conformance must rise
