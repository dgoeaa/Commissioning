# Worksheet - visit 1: 01-otp-estate-split

**Closes:** An anonymous public endpoint writing into the internal operations system of record.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `Portal_Verify`  ·  internal name `86897b2f-9770-4efa-8486-2642f24bb947`
- `Portal_Verify_Confirm`  ·  internal name `3b69aa71-ffed-4956-9d20-2aa3021a8da0`

### Do NOT change these flows

- **Web - OTP Generate** - Internal sign-in. OTP_Transactions is its correct home; separating the two estates is the whole point of this change.
- **Web - OTP Verify** - Same.

## Step S - bring the flow onto the build standard

> Do the standard work FIRST, before the SharePoint actions in Step B. The variables and Scope_Global have to exist before an action can reference them, and moving actions into a scope afterwards is where things get dropped.

> D7 - the standard work rides along with each visit rather than waiting for a sixth pass. The flow is already open, and adding a catch scope to a flow whose actions you have just rewritten costs a fraction of coming back to it.

### `Portal_Verify`  -  78% by rule count before

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

### `Portal_Verify_Confirm`  -  100% by rule count before

**Nothing to do here.** This flow already meets every rule in the build standard. Go straight to the next step.

## Step A - Compose actions

`+ New step` -> `Compose` -> **Data Operations / Compose**. Rename each (`...` -> Rename).

| Rename to | Inputs |
|---|---|
| `Compose_Bucket_Verify_Source` | `@concat('VERIFY_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |
| `Compose_Bucket_Verify_Confirm_Source` | `@concat('VERIFY_CONFIRM_IP:', coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'unknown'))` |

> A name one character out resolves to nothing and the flow still saves.

## Step B - the SharePoint actions  (20 total)

`+ New step` -> `SharePoint` -> the operation named below. Pick **Site Address** and **List Name** from the dropdowns *by name*; the GUID is to confirm afterwards in Peek code.

### B1. `Portal_Verify / Create_item_OTP_Record` - **Create item**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **Email   [Email]** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **OTP Code   [OTP_Code]** | `@variables('varRandomOTP')` |
| **Expires At   [Expires_At]** | `@outputs('Compose_OTP_Expiry')` |
| **Attempts   [Attempts]** | `0` |
| **Consumed   [Consumed]** | `false` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Source IP   [SourceIp]** | `@coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'')` |

### B2. `Portal_Verify / Get_items` - **Get items**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Email eq '@{toLower(trim(coalesce(triggerBody()?['identifier'],'')))}' and Consumed eq 0` |
| **Order By  (Advanced parameters)** | `Created desc` |
| **Top Count  (Advanced parameters)** | `1` |

### B3. `Portal_Verify / Update_item` - **Update item**   *(replace parameters on the existing action)*

> The deployed expression is first(outputs('Get_items')?['body/value']?['ID']), which indexes the ID of the array rather than taking the ID of the first item. Corrected here.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_items')?['body/value'])?['ID']` |
| **Consumed   [Consumed]** | `true` |

### B4. `Portal_Verify_Confirm / Get_items_OTP_Verify` - **Get items**   *(replace parameters on the existing action)*

> The deployed filter matches on OTP_Code alone, so a code is accepted for whichever address minted it last rather than for the address presenting it. Filtering by Email and comparing the code inside the flow binds the two.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Email eq '@{toLower(trim(coalesce(triggerBody()?['identifier'],'')))}' and Consumed eq 0` |
| **Order By  (Advanced parameters)** | `Created desc` |
| **Top Count  (Advanced parameters)** | `1` |

### B5. `Portal_Verify_Confirm / Get_item_OTP_Record` - **Get item**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_items_OTP_Verify')?['body/value'])?['ID']` |

### B6. `Portal_Verify_Confirm / Update_item` - **Update item**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@outputs('Get_item_OTP_Record')?['body/ID']` |
| **Consumed   [Consumed]** | `true` |

### B7. `Portal_Verify_Confirm / Create_item_OTP_Record` - **Create item**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **Email   [Email]** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **OTP Code   [OTP_Code]** | `@variables('varRandomOTP')` |
| **Expires At   [Expires_At]** | `@outputs('Compose_OTP_Expiry')` |
| **Attempts   [Attempts]** | `0` |
| **Consumed   [Consumed]** | `false` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Source IP   [SourceIp]** | `@coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'')` |

### B8. `Portal_Verify_Confirm / Create_item_OTP_Record_1` - **Create item**   *(replace parameters on the existing action)*
- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@toLower(trim(coalesce(outputs('Compose_Verify_Identifier'),'')))` |
| **Email   [Email]** | `@toLower(trim(coalesce(outputs('Compose_Verify_Identifier'),'')))` |
| **OTP Code   [OTP_Code]** | `@outputs('Compose_Random_OTP')` |
| **Expires At   [Expires_At]** | `@outputs('Compose_OTP_Expiry')` |
| **Attempts   [Attempts]** | `0` |
| **Consumed   [Consumed]** | `false` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Source IP   [SourceIp]** | `@coalesce(triggerOutputs()?['headers']?['X-Forwarded-For'],'')` |

### B9. `Increment_Attempts` - **Update item**   *(new action)*

> Without a counter there is no cap, and a six-digit code with no cap is guessable by a script in under a minute. Consume the code once Attempts reaches 5.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@outputs('Get_item_OTP_Record')?['body/ID']` |
| **Attempts   [Attempts]** | `@add(coalesce(outputs('Get_item_OTP_Record')?['body/Attempts'],0),1)` |

### B10. `Consume_Expired_Challenge` - **Update item**   *(new action)*

> An expired code that stays unconsumed keeps matching the $filter and is returned again on the next attempt.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@outputs('Get_item_OTP_Record')?['body/ID']` |
| **Consumed   [Consumed]** | `true` |

### B11. `Get_Rate_Limit_Verify_Source` - **Get items**   *(new action)*

> D5 - rate limiting is done in the same visit rather than a later pass. VERIFY mails a code to any address supplied, so an unlimited caller is a mail relay.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Verify_Source')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B12. `Update_Rate_Limit_Verify_Source` - **Update item**   *(new action)*

> Only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Verify_Source')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Verify_Source')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B13. `Create_Rate_Limit_Verify_Source` - **Create item**   *(new action)*

> Only when absent or the window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Verify_Source')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B14. `Create_Outbox_Receipt_Verify` - **Create item**   *(new action)*

> D2 - after the mail action in Portal_Verify. Records that a code was sent, never the code itself.

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

### B15. `Get_Rate_Limit_Verify_Confirm_Source` - **Get items**   *(new action)*

> D5 - VERIFY_CONFIRM is where a code is guessed. The attempt cap protects one code; this bucket protects the address space.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Filter Query  (Advanced parameters)** | `Title eq '@{outputs('Compose_Bucket_Verify_Confirm_Source')}'` |
| **Top Count  (Advanced parameters)** | `1` |

### B16. `Update_Rate_Limit_Verify_Confirm_Source` - **Update item**   *(new action)*

> Only when the bucket exists and its window is current.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@first(outputs('Get_Rate_Limit_Verify_Confirm_Source')?['body/value'])?['ID']` |
| **Request Count   [RequestCount]** | `@add(coalesce(first(outputs('Get_Rate_Limit_Verify_Confirm_Source')?['body/value'])?['RequestCount'],0),1)` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |

### B17. `Create_Rate_Limit_Verify_Confirm_Source` - **Create item**   *(new action)*

> Only when absent or the window has rolled over.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Rate Limits`  ·  GUID `d6b97198-489c-4bd7-8647-1133c55efdf9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@outputs('Compose_Bucket_Verify_Confirm_Source')` |
| **Window Start (UTC)   [WindowStartUtc]** | `@utcNow()` |
| **Updated At (UTC)   [UpdatedAtUtc]** | `@utcNow()` |
| **Request Count   [RequestCount]** | `1` |

### B18. `Create_Verification_Proof` - **Create item**   *(new action)*

> In Portal_Verify_Confirm, on the branch where the presented code matches. THE DEPLOYED FLOW DOES NOT DO THIS - it flips a verified flag and returns, minting nothing. Without the proof, C1 never completes and SUBMISSION and STATUS have nothing to redeem, so the whole verification circle is decorative. Title is the opaque token returned to the caller: two concatenated guids with hyphens stripped.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal Verification Proofs`  ·  GUID `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9`

| Field in the designer | Exact value |
|---|---|
| **Title** | `@concat(replace(guid(),'-',''), replace(guid(),'-',''))` |
| **Email   [Email]** | `@toLower(trim(coalesce(triggerBody()?['identifier'],'')))` |
| **Purpose   [Purpose]** | `portal-verification` |
| **Expires At (UTC)   [ExpiresAtUtc]** | `@addMinutes(utcNow(),15)` |
| **Created At (UTC)   [CreatedAtUtc]** | `@utcNow()` |
| **Consumed   [Consumed]** | `false` |

### B19. `Consume_Challenge_Attempts_Exceeded` - **Update item**   *(new action)*

> On the branch where Attempts has reached 5. Consume rather than leave it matching the filter, or the cap is advisory.

- **Site Address** -> `Global_Digital_Documents_Centre`  ·  `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
- **List Name** -> `Portal OTP Codes`  ·  GUID `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56`

| Field in the designer | Exact value |
|---|---|
| **Id** | `@outputs('Get_item_OTP_Record')?['body/ID']` |
| **Consumed   [Consumed]** | `true` |

### B20. `Create_Flow_Telemetry` - **Create item**   *(new action)*

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

- node scripts/flow-list-sweep.mjs <the re-exported definition>   # its footprint should name Portal OTP Codes and not OTP_Transactions
- npm run wiring                                                  # VERIFY and VERIFY_CONFIRM crossings should fall from 12 to 0
- npm run wiring   # VERIFY moves from 0/7 to 7/7 and VERIFY_CONFIRM from 0/6 to 6/6; all twelve crossings on these two flows clear
- Mint a code end to end and confirm the row lands in Portal OTP Codes on GDDC, with Attempts 0 and Consumed false
- `node scripts/verify-flow-standard.mjs --portal` - this flow's conformance must rise
