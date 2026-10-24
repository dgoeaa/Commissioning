# Worksheet - visit 5: 05-upload-and-support

**Closes:** C3 and C5.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `Portal_UPLOAD_ECM_DOCS`  ·  internal name `ae4b2a44-2388-42c7-baaf-86de3d6fa664`
- `UPLOAD_ECM_DOCS_PORTAL`  ·  internal name `9bd6724c-5a8f-4e74-9d3e-3c1eeaef2d06`
- `Portal_Upload_HTTP`  ·  internal name `39d65c5b-5539-43de-aec6-52bfcd31bcc1`
- `Portal_ECM_DOCS_SUPPORT`  ·  internal name `1b2c2e53-6c07-46a3-80b2-c43be1ef69db`

### Leave these actions exactly as they are

- **The Create_file into /NITDA_Central_Registry in the upload flows** - The one sanctioned write outside the portal estate. A library holds files, a list holds metadata.

### Delete these actions

- **Get_items against Global Tracking Queue in Portal_Upload_HTTP and Portal_ECM_DOCS_SUPPORT** - Boundary.

## Step S - bring the flow onto the build standard

> Do the standard work FIRST, before the SharePoint actions in Step B. The variables and Scope_Global have to exist before an action can reference them, and moving actions into a scope afterwards is where things get dropped.

> D7 - the standard work rides along with each visit rather than waiting for a sixth pass. The flow is already open, and adding a catch scope to a flow whose actions you have just rewritten costs a fraction of coming back to it.

### `Portal_UPLOAD_ECM_DOCS`  -  33% by rule count before

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

### `UPLOAD_ECM_DOCS_PORTAL`  -  33% by rule count before

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

### `Portal_Upload_HTTP`  -  44% by rule count before

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

### `Portal_ECM_DOCS_SUPPORT`  -  44% by rule count before

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
| `Compose_Bucket_Upload_Source` | `@concat('UPLOAD_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |
| `Compose_Bucket_Support` | `@concat('SUPPORT_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |
| `Compose_Case_Reference` | `@concat('NITDA-S-', toUpper(substring(replace(guid(),'-',''),0,6)))` |

> A name one character out resolves to nothing and the flow still saves.

## Step B - the SharePoint actions  (15 total)

`+ New step` -> `SharePoint` -> the operation named below. Pick **Site Address** and **List Name** from the dropdowns *by name*; the GUID is to confirm afterwards in Peek code.

### B1. `Get_Rate_Limit_Upload_Source` - **Get items**   *(new action)*

> Public endpoint, no limit today.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Upload_Source')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B2. `Update_Rate_Limit_Upload_Source` - **Update item**   *(new action)*

> Only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Upload_Source')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Upload_Source')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B3. `Create_Rate_Limit_Upload_Source` - **Create item**   *(new action)*

> Only when absent or the window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Upload_Source')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B4. `Get_Upload_Ticket` - **Get items**   *(new action)*

> Absent, already redeemed, or past ExpiresAtUtc all stop here.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Upload Tickets`  ·  GUID `d777f3cd-0696-426e-8096-ffc860e7c0d4`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{coalesce(triggerBody()?[''ticket''],'''')}' and Redeemed eq 0` |
| **Top Count  (Advanced parameters)** | `1` |

### B5. `Mark_Ticket_Expired` - **Update item**   *(new action)*

> Only on the expired branch. An expired ticket left Pending keeps matching the filter and is offered again.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Upload Tickets`  ·  GUID `d777f3cd-0696-426e-8096-ffc860e7c0d4`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['ID']` |
| **Status   [Status]** | `Expired` |

### B6. `Create_Attachment_Record` - **Create item**   *(new action)*

> After the file write, so AttachmentLink is only ever populated on a successful store.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Attachments`  ·  GUID `ecf2ba9b-968f-4fbc-ac9c-7b5e36d5099e`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['Title']` |
| **Submission Reference   [SubmissionRef]** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['SubmissionRef']` |
| **Declared Name   [DeclaredName]** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['DeclaredName']` |
| **Stored Name   [StoredName]** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['StoredName']` |
| **Declared Size (bytes)   [DeclaredSizeBytes]** | `@coalesce(first(outputs('Get_Upload_Ticket')?['body/value'])?['DeclaredSizeBytes'],0)` |
| **Declared SHA-256   [DeclaredSha256]** | `@coalesce(first(outputs('Get_Upload_Ticket')?['body/value'])?['DeclaredSha256'],'')` |
| **Attachment Link   [AttachmentLink]** | `@outputs('Create_file')?['body/Path']` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Status   [Status]** | `Stored` |

### B7. `Update_Upload_Ticket_Redeemed` - **Update item**   *(new action)*

> Last. The read at the start and this update are what make the ticket single-use; skipping either turns it into a reusable upload credential.

- **Site Address** -> `NEDMS`  ·  `https://nitdanigeria.sharepoint.com/sites/NEDMS`
- **List Name** -> `Portal Upload Tickets`  ·  GUID `d777f3cd-0696-426e-8096-ffc860e7c0d4`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Upload_Ticket')?['body/value'])?['ID']` |
| **Redeemed   [Redeemed]** | `true` |
| **Status   [Status]** | `Stored` |

### B8. `Create_Flow_Telemetry` - **Create item**   *(new action)*

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

### B9. `Get_Rate_Limit_Support` - **Get items**   *(new action)*

> Public endpoint, no limit today.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Support')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B10. `Update_Rate_Limit_Support` - **Update item**   *(new action)*

> Only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Support')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Support')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B11. `Create_Rate_Limit_Support` - **Create item**   *(new action)*

> Only when absent or the window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Support')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B12. `Create_Support_Case` - **Create item**   *(new action)*

> Never touches the registry. A case is not correspondence, and letting a helpdesk message become a registered submission is how a registry stops meaning anything.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Support Cases`  ·  GUID `b984645b-8e3a-457f-a305-b95650fd3f23`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Case_Reference')` |
| **Name   [Name]** | `@coalesce(triggerBody()?['name'],'')` |
| **Email   [Email]** | `@toLower(trim(coalesce(triggerBody()?['email'],'')))` |
| **Topic   [Topic]** | `@coalesce(triggerBody()?['topic'],'')` |
| **About Reference   [AboutReference]** | `@coalesce(triggerBody()?['aboutReference'],'')` |
| **Message   [Message]** | `@coalesce(triggerBody()?['message'],'')` |
| **Status   [Status]** | `open` |
| **Submitted At (UTC)   [SubmittedAtUtc]** | `@utcNow()` |
| **Source IP   [SourceIp]** | `@coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'')` |

### B13. `Create_Outbox_Receipt_Support` - **Create item**   *(new action)*

> D2 - Outbox Receipts is the one of the three reserved lists that gets wired, because whether the citizen received the mail is a question nothing else answers.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Outbox Receipts`  ·  GUID `88a81ca1-319a-45f5-8409-f91a24538ffa`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Case_Reference')` |
| **Message Type   [MessageType]** | `support-acknowledgement` |
| **Recipient Email   [RecipientEmail]** | `@toLower(trim(coalesce(triggerBody()?['email'],'')))` |
| **Reference   [Reference]** | `@outputs('Compose_Case_Reference')` |
| **Sent At (UTC)   [SentAtUtc]** | `@utcNow()` |
| **Status   [Status]** | `sent` |
| **Attempts   [Attempts]** | `1` |
| **Last Error   [LastError]** | `` |

### B14. `Create_Flow_Telemetry` - **Create item**   *(new action)*

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

### B15. `Create_Outbox_Receipt_Verify` - **Create item**   *(new action)*

> Add to Portal_Verify at visit 1 if convenient, or here. Never record the code itself.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Outbox Receipts`  ·  GUID `88a81ca1-319a-45f5-8409-f91a24538ffa`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **Message Type   [MessageType]** | `verification-code` |
| **Recipient Email   [RecipientEmail]** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **Reference   [Reference]** | `` |
| **Sent At (UTC)   [SentAtUtc]** | `@utcNow()` |
| **Status   [Status]** | `sent` |
| **Attempts   [Attempts]** | `1` |
| **Last Error   [LastError]** | `` |

## Step D - verify

- npm run wiring   # UPLOAD 0/7 to 7/7, SUPPORT 0/5 to 5/5, all crossings clear
- Redeem a ticket twice - the second attempt must be refused
- Raise a case and confirm it never appears in Portal Registry
- `node scripts/verify-flow-standard.mjs --portal` - this flow's conformance must rise
