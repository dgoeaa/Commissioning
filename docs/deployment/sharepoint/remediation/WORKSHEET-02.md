# Worksheet - visit 2: 02-submission-registry-write

**Closes:** C2. Nothing writes Portal Registry today, so the intake feed that reads it is empty by construction.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `Portal_UBMISSION_ECM_DOCS`  ·  internal name `270fb295-b1de-40e2-b36d-889a61a887a0`
- `SUBMISSION_ECM_DOCS_PORTAL`  ·  internal name `de9ef13b-ae4c-42b0-9afa-20e71a180759`

### Leave these actions exactly as they are

- **The Create_file into /NITDA_Central_Registry** - D6 - existing records stay, and the attachment bytes belong in a library. Only the metadata moves to the registry list.

## Step S - bring the flow onto the build standard

> Do the standard work FIRST, before the SharePoint actions in Step B. The variables and Scope_Global have to exist before an action can reference them, and moving actions into a scope afterwards is where things get dropped.

> D7 - the standard work rides along with each visit rather than waiting for a sixth pass. The flow is already open, and adding a catch scope to a flow whose actions you have just rewritten costs a fraction of coming back to it.

### `Portal_UBMISSION_ECM_DOCS`  -  44% by rule count before

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

### `SUBMISSION_ECM_DOCS_PORTAL`  -  44% by rule count before

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

## Step A - Compose actions

`+ New step` -> `Compose` -> **Data Operations / Compose**. Rename each (`...` -> Rename).

| Rename to | Inputs |
|---|---|
| `Compose_Bucket_Submission_Source` | `@concat('SUBMISSION_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |
| `Compose_Year` | `@formatDateTime(utcNow(),'yyyy')` |

> A name one character out resolves to nothing and the flow still saves.

## Step B - the SharePoint actions  (13 total)

`+ New step` -> `SharePoint` -> the operation named below. Pick **Site Address** and **List Name** from the dropdowns *by name*; the GUID is to confirm afterwards in Peek code.

### B1. `Get_Rate_Limit_Submission_Source` - **Get items**   *(new action)*

> Public endpoint with no rate limiting today. Bucket key is the source address.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Submission_Source')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B2. `Update_Rate_Limit_Submission_Source` - **Update item**   *(new action)*

> Run only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Submission_Source')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Submission_Source')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B3. `Create_Rate_Limit_Submission_Source` - **Create item**   *(new action)*

> Run only when the bucket is absent or its window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Submission_Source')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B4. `Get_Submission_Verification_Proof` - **Get items**   *(new action)*

> Reject when absent, consumed, or ExpiresAtUtc has passed.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Verification Proofs`  ·  GUID `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{coalesce(triggerBody()?[''proof''],'''')}' and Consumed eq 0` |
| **Top Count  (Advanced parameters)** | `1` |

### B5. `Consume_Submission_Proof` - **Update item**   *(new action)*

> Single use. Consume before the registry write so a replayed proof cannot create a second submission.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Verification Proofs`  ·  GUID `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Submission_Verification_Proof')?['body/value'])?['ID']` |
| **Consumed   [Consumed]** | `true` |

### B6. `Create_Submission_Record` - **Create item**   *(new action)*

> Title holds PENDING until the reference is minted. Status and StatusLabel carry the governed vocabulary - see config/status-vocabulary.config.js.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Registry`  ·  GUID `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667`

| Field in the designer | Exact value |
|---|---|
| **Title** | `PENDING` |
| **Subject   [Subject]** | `@coalesce(triggerBody()?['subject'],'')` |
| **Category   [Category]** | `@coalesce(triggerBody()?['category'],'')` |
| **Correspondence Type   [CorrespondenceType]** | `@coalesce(triggerBody()?['correspondenceType'],'')` |
| **Channel   [Channel]** | `Portal` |
| **Sender Name   [SenderName]** | `@coalesce(triggerBody()?['senderName'],'')` |
| **Sender Email   [SenderEmail]** | `@toLower(trim(coalesce(triggerBody()?['senderEmail'],'')))` |
| **Sender Phone   [SenderPhone]** | `@coalesce(triggerBody()?['senderPhone'],'')` |
| **Sender Organisation   [SenderOrganisation]** | `@coalesce(triggerBody()?['senderOrganisation'],'')` |
| **Sender Organisation Type   [SenderOrganisationType]** | `@coalesce(triggerBody()?['senderOrganisationType'],'')` |
| **Event Date   [EventDate]** | `@coalesce(triggerBody()?['eventDate'],'')` |
| **Description   [Description]** | `@coalesce(triggerBody()?['description'],'')` |
| **Attachment Count   [AttachmentCount]** | `@length(coalesce(triggerBody()?['attachments'],json('[]')))` |
| **Submitted At (UTC)   [SubmittedAtUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Status   [Status]** | `received` |
| **Status Label   [StatusLabel]** | `Received` |
| **Action Required   [ActionRequired]** | `false` |
| **Verified Submission   [VerifiedSubmission]** | `true` |
| **Source IP   [SourceIp]** | `@coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'')` |
| **Local ID   [LocalId]** | `@coalesce(triggerBody()?['localId'],'')` |

### B7. `Get_Sequence_Counter_By_Year` - **Get items**   *(new action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Sequence Counters`  ·  GUID `d95409a4-2b48-4d34-9f60-da5d27db862d`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Year eq '@{outputs('Compose_Year')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B8. `Create_Sequence_Counter` - **Create item**   *(new action)*

> Only when the year has no counter yet.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Sequence Counters`  ·  GUID `d95409a4-2b48-4d34-9f60-da5d27db862d`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Year')` |
| **Year   [Year]** | `@outputs('Compose_Year')` |
| **Prefix   [Prefix]** | `NITDA` |
| **Current Sequence   [CurrentSequence]** | `0` |
| **Last Issued At   [LastIssuedAt]** | `@utcNow()` |
| **Lock Token   [LockToken]** | `@guid()` |
| **Modified By Flow Run   [ModifiedByFlowRun]** | `@workflow()?['run']?['name']` |

### B9. `Update_Sequence_Counter_Conditional` - **Update item**   *(new action)*

> The one place in the estate needing concurrency control: two submissions in the same second must not take the same number. Re-read the row after patching and retry if LockToken is not the value this run wrote.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Sequence Counters`  ·  GUID `d95409a4-2b48-4d34-9f60-da5d27db862d`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Sequence_Counter_By_Year')?['body/value'])?['ID']` |
| **Current Sequence   [CurrentSequence]** | `@add(coalesce(first(outputs('Get_Sequence_Counter_By_Year')?['body/value'])?['CurrentSequence'],0),1)` |
| **Last Issued At   [LastIssuedAt]** | `@utcNow()` |
| **Last Reference ID   [LastReferenceId]** | `@outputs('Compose_Reference')` |
| **Lock Token   [LockToken]** | `@guid()` |
| **Modified By Flow Run   [ModifiedByFlowRun]** | `@workflow()?['run']?['name']` |

### B10. `Set_Submission_Reference` - **Update item**   *(new action)*
- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Registry`  ·  GUID `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@outputs('Create_Submission_Record')?['body/ID']` |
| **Title** | `@outputs('Compose_Reference')` |
| **Reference ID   [ReferenceId]** | `@outputs('Compose_Reference')` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B11. `Create_Initial_Timeline_Event` - **Create item**   *(new action)*
- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Status Timeline`  ·  GUID `5b486a5e-0ce7-46d7-a159-d84c77f3d1fd`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Reference')` |
| **Submission Reference   [SubmissionRef]** | `@outputs('Compose_Reference')` |
| **At (UTC)   [AtUtc]** | `@utcNow()` |
| **Status   [Status]** | `received` |
| **Label   [Label]** | `Received` |
| **Actor   [Actor]** | `portal` |
| **Note   [Note]** | `Logged in the registry and queued for validation.` |

### B12. `Create_Upload_Ticket` - **Create item**   *(new action)*

> Inside Apply_to_each_Attachment over triggerBody()?['attachments']. One ticket per declared attachment; the ticket is the opaque Title, unrelated to file content or name.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Upload Tickets`  ·  GUID `d777f3cd-0696-426e-8096-ffc860e7c0d4`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@guid()` |
| **Submission Reference   [SubmissionRef]** | `@outputs('Compose_Reference')` |
| **Declared Name   [DeclaredName]** | `@items('Apply_to_each_Attachment')?['name']` |
| **Stored Name   [StoredName]** | `@items('Apply_to_each_Attachment')?['storedName']` |
| **Declared Size (bytes)   [DeclaredSizeBytes]** | `@coalesce(items('Apply_to_each_Attachment')?['size'],0)` |
| **Declared SHA-256   [DeclaredSha256]** | `@coalesce(items('Apply_to_each_Attachment')?['sha256'],'')` |
| **Expires At (UTC)   [ExpiresAtUtc]** | `@addHours(utcNow(),2)` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Redeemed   [Redeemed]** | `false` |
| **Status   [Status]** | `Pending` |

### B13. `Create_Flow_Telemetry` - **Create item**   *(new action)*

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

- npm run wiring   # SUBMISSION moves from 0/12 to 12/12 and its two crossings clear
- Submit once and confirm a Portal Registry row exists with Title = ReferenceId, one timeline row, and one ticket per attachment
- Call ECM_DOCS_INTAKE and confirm the row appears in the feed - that is C6 lighting up
- `node scripts/verify-flow-standard.mjs --portal` - this flow's conformance must rise
