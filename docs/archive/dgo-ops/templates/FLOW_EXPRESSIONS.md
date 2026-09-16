# NITDA Email Flows — Copy-Paste Expression Pack

This file lists **every** Power Automate expression needed to drive the three
NITDA email templates:

* `templates/Single_Task_NITDA.html`
* `templates/EmailTask_NITDA.html`
* `templates/Bulk_NITDA.html`

Paste each block into the named action's input. All blocks assume the trigger
schema in §0. If your trigger publishes different field names, only §0 changes —
the rest read from the Compose outputs declared here.

---

## §0 — Trigger schema (HTTP / Dataverse / SharePoint trigger body)

```json
{
  "type": "object",
  "properties": {
    "NewActivityTask": {
      "type": "object",
      "properties": {
        "Variant":        { "type": "string" },
        "RefId":          { "type": "string" },
        "BatchId":        { "type": "string" },
        "Subject":        { "type": "string" },
        "Preheader":      { "type": "string" },
        "HeroTitle":      { "type": "string" },
        "BodyLede":       { "type": "string" },
        "Remarks":        { "type": "string" },
        "PriorityLevel":  { "type": "string" },
        "StatusText":     { "type": "string" },
        "Classification": { "type": "string" },
        "AckDue":         { "type": "string" },
        "AckUrl":         { "type": "string" },
        "RecordUrl":      { "type": "string" },
        "BatchPortalUrl": { "type": "string" },
        "Recipient": {
          "type": "object",
          "properties": {
            "Name":  { "type": "string" },
            "Title": { "type": "string" },
            "Email": { "type": "string" }
          }
        },
        "Document": {
          "type": "object",
          "properties": {
            "Type":                { "type": "string" },
            "PageCount":           { "type": "integer" },
            "FileSize":            { "type": "string" },
            "OriginatingOffice":   { "type": "string" },
            "ActionRequired":      { "type": "string" },
            "PriorityDescription": { "type": "string" }
          }
        },
        "Signatory": {
          "type": "object",
          "properties": {
            "Name":  { "type": "string" },
            "Title": { "type": "string" }
          }
        },
        "Escalation": {
          "type": "object",
          "properties": {
            "Name":  { "type": "string" },
            "Title": { "type": "string" },
            "Email": { "type": "string" }
          }
        },
        "Source": {
          "type": "object",
          "properties": {
            "SenderName":    { "type": "string" },
            "SenderEmail":   { "type": "string" },
            "SenderOrg":     { "type": "string" },
            "To":            { "type": "string" },
            "Cc":            { "type": "string" },
            "ReceivedAt":    { "type": "string" },
            "Importance":    { "type": "string" },
            "WordCount":     { "type": "integer" },
            "ReadingTime":   { "type": "string" },
            "ThreadExcerpt": { "type": "string" },
            "Inbox":         { "type": "string" },
            "RoutedBy":      { "type": "string" }
          }
        },
        "Attachments": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Name":      { "type": "string" },
              "SizeLabel": { "type": "string" },
              "Url":       { "type": "string" },
              "Ext":       { "type": "string" }
            }
          }
        },
        "BatchItems": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "RefId":   { "type": "string" },
              "Subject": { "type": "string" },
              "Url":     { "type": "string" }
            }
          }
        },
        "BatchCategory":    { "type": "string" },
        "BatchSource":      { "type": "string" },
        "BatchOldestDate":  { "type": "string" },
        "BatchSummary":     { "type": "string" },
        "BatchTotal":       { "type": "integer" },
        "BatchAcked":       { "type": "integer" },
        "BatchCountUrgent": { "type": "integer" },
        "BatchCountHigh":   { "type": "integer" },
        "BatchCountNormal": { "type": "integer" },
        "BatchCountLow":    { "type": "integer" }
      }
    }
  }
}
```

---

## §1 — Token Composes (run first)

### `Compose_Variant`
```
@{toLower(coalesce(triggerBody()?['NewActivityTask']?['Variant'], 'single'))}
```

### `Compose_PriorityToken`
```
@{if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['PriorityLevel'], 'Normal')), 'urgent'), json('{"color":"#B42318","text":"#912018","bg":"#FEE4E2","border":"#FDA29B","glyph":"&#9888;"}'), if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['PriorityLevel'], 'Normal')), 'high'), json('{"color":"#B54708","text":"#93370D","bg":"#FEF0C7","border":"#FEC84B","glyph":"&#9650;"}'), if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['PriorityLevel'], 'Normal')), 'low'), json('{"color":"#5F5C5D","text":"#5F5C5D","bg":"#F4F2F3","border":"#D6D4D5","glyph":"&#9679;"}'), json('{"color":"#17B255","text":"#119143","bg":"#E6EEEB","border":"#A2E0BB","glyph":"&#10003;"}'))))}
```

### `Compose_StatusToken`
```
@{if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['StatusText'], 'Pending Action')), 'acknowledged'), json('{"text":"#119143","bg":"#E6EEEB","border":"#A2E0BB","color":"#17B255"}'), if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['StatusText'], 'Pending Action')), 'in progress'), json('{"text":"#93370D","bg":"#FEF0C7","border":"#FEC84B","color":"#B54708"}'), if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['StatusText'], 'Pending Action')), 'overdue'), json('{"text":"#912018","bg":"#FEE4E2","border":"#FDA29B","color":"#B42318"}'), json('{"text":"#2A2829","bg":"#FAF9F9","border":"#D6D4D5","color":"#807D7E"}'))))}
```

### `Compose_ImportanceToken`
```
@{if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['Source']?['Importance'], 'Normal')), 'high'), json('{"text":"#912018","bg":"#FEE4E2","border":"#FDA29B","glyph":"&#9888;"}'), if(equals(toLower(coalesce(triggerBody()?['NewActivityTask']?['Source']?['Importance'], 'Normal')), 'low'), json('{"text":"#5F5C5D","bg":"#F4F2F3","border":"#E8E6E7","glyph":"&#9679;"}'), json('{"text":"#5F5C5D","bg":"#F4F2F3","border":"#E8E6E7","glyph":"&bull;"}')))}
```

### `Compose_ClassificationLabel`
```
@{toUpper(coalesce(triggerBody()?['NewActivityTask']?['Classification'], 'Restricted'))}
```

---

## §2 — Shared Composes (all three templates)

### `Compose_Subject`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Subject'], if(equals(outputs('Compose_Variant'), 'bulk'), 'Consolidated Dispatch', if(equals(outputs('Compose_Variant'), 'emailtask'), 'Email Task Assignment', 'Single Task Assignment')))}
```

### `Compose_Preheader`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Preheader'], if(equals(outputs('Compose_Variant'), 'bulk'), 'Consolidated dispatch — multiple items require acknowledgement.', if(equals(outputs('Compose_Variant'), 'emailtask'), 'An incoming email has been routed to you as an official task.', 'A new task has been assigned. Acknowledgement required.')))}
```

### `Compose_Hero_Title`
```
@{coalesce(triggerBody()?['NewActivityTask']?['HeroTitle'], if(equals(outputs('Compose_Variant'), 'bulk'), 'Bulk Document Directive', if(equals(outputs('Compose_Variant'), 'emailtask'), 'Incoming Email Routed as Task', 'Single Task Assignment')))}
```

### `Compose_Body_Lede`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BodyLede'], if(equals(outputs('Compose_Variant'), 'emailtask'), 'An incoming email has been routed to your office as an official task. The original sender, timestamp, excerpt, and attachments are preserved below for context.', 'The following assignment has been directed to your office for review. Please acknowledge receipt and proceed with the necessary action.'))}
```

### `Compose_Remarks`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Remarks'], if(equals(outputs('Compose_Variant'), 'bulk'), 'Please review and acknowledge the consolidated dispatch.', if(equals(outputs('Compose_Variant'), 'emailtask'), 'Please proceed with the necessary action as required.', 'No additional contextual remarks.')))}
```

### `Compose_Reference_Id`
```
@{coalesce(triggerBody()?['NewActivityTask']?['RefId'], if(equals(outputs('Compose_Variant'), 'emailtask'), 'TASK-UNSPECIFIED', 'REF-UNSPECIFIED'))}
```

### `Compose_Recipient_Name`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Recipient']?['Name'], 'Designated Officer')}
```

### `Compose_Recipient_Title`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Recipient']?['Title'], '')}
```

### `Compose_Acknowledge_Url`
```
@{coalesce(triggerBody()?['NewActivityTask']?['AckUrl'], '#')}
```

### `Compose_Record_Url`
```
@{coalesce(triggerBody()?['NewActivityTask']?['RecordUrl'], '#')}
```

### `Compose_AckDue`
```
@{coalesce(triggerBody()?['NewActivityTask']?['AckDue'], '—')}
```

### `Compose_Priority_Level`
```
@{coalesce(triggerBody()?['NewActivityTask']?['PriorityLevel'], 'Normal')}
```

### `Compose_Priority_Color`
```
@{outputs('Compose_PriorityToken')['color']}
```

### `Compose_Priority_Text`
```
@{outputs('Compose_PriorityToken')['text']}
```

### `Compose_Priority_Bg`
```
@{outputs('Compose_PriorityToken')['bg']}
```

### `Compose_Priority_Border`
```
@{outputs('Compose_PriorityToken')['border']}
```

### `Compose_Priority_Glyph`
```
@{outputs('Compose_PriorityToken')['glyph']}
```

### `Compose_Priority_Icon_SVG`
```
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" style="vertical-align:middle"><circle cx="5" cy="5" r="4" fill="@{outputs('Compose_PriorityToken')['color']}"/></svg>
```

### `Compose_Status_Text`
```
@{coalesce(triggerBody()?['NewActivityTask']?['StatusText'], 'Pending Action')}
```

### `Compose_Status_Color`
```
@{outputs('Compose_StatusToken')['color']}
```

### `Compose_Status_Bg`
```
@{outputs('Compose_StatusToken')['bg']}
```

### `Compose_Status_Border`
```
@{outputs('Compose_StatusToken')['border']}
```

### `Compose_Status_Hero_SVG`
```
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="26" fill="@{outputs('Compose_PriorityToken')['color']}" opacity="0.12"/><circle cx="28" cy="28" r="18" fill="@{outputs('Compose_PriorityToken')['color']}"/><text x="28" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue,Arial,sans-serif" font-size="18" font-weight="800">@{outputs('Compose_PriorityToken')['glyph']}</text></svg>
```

### `Compose_Header_Band_SVG`
*(leave empty — no value)*

### Organisation constants (paste as plain text into each Compose)

| Compose | Value |
|---|---|
| `Compose_Org_Name_Long` | `National Information Technology<br>Development Agency` |
| `Compose_Org_Office_Line` | `Office of the Director General / CEO` |
| `Compose_Org_Address_Line` | `Port Harcourt Crescent, Garki, Abuja.` |
| `Compose_Org_Portal_Url` | `https://nitda.gov.ng` |
| `Compose_Org_Support_Url` | `https://nitda.gov.ng/support` |
| `Compose_Org_Logo_Url` | `https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/942233_926692/NITDA%20LOGO%20png%20smallest_1.png` |

---

## §3 — Single Task — extra Composes

### `Compose_Doc_Classification`
```
@{outputs('Compose_ClassificationLabel')}
```

### `Compose_Doc_Type`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Document']?['Type'], 'Internal Memo')}
```

### `Compose_Doc_Page_Count`
```
@{coalesce(string(triggerBody()?['NewActivityTask']?['Document']?['PageCount']), '—')}
```

### `Compose_Doc_File_Size`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Document']?['FileSize'], '—')}
```

### `Compose_Doc_Originating_Office`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Document']?['OriginatingOffice'], '—')}
```

### `Compose_Action_Required`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Document']?['ActionRequired'], 'Review &amp; Acknowledge')}
```

### `Compose_Priority_Description`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Document']?['PriorityDescription'], 'Review and action the attached document.')}
```

### `Compose_Signatory_Name`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Signatory']?['Name'], '—')}
```

### `Compose_Signatory_Title`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Signatory']?['Title'], '—')}
```

### `Compose_Signatory_Initials`
```
@{if(empty(coalesce(triggerBody()?['NewActivityTask']?['Signatory']?['Name'], '')), 'SG', toUpper(concat(substring(coalesce(split(trim(triggerBody()?['NewActivityTask']?['Signatory']?['Name']), ' ')[0], ''), 0, 1), substring(coalesce(if(greater(length(split(trim(triggerBody()?['NewActivityTask']?['Signatory']?['Name']), ' ')), 1), last(split(trim(triggerBody()?['NewActivityTask']?['Signatory']?['Name']), ' ')), ''), ''), 0, 1))))}
```

### `Compose_Escalation_Name`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Escalation']?['Name'], '—')}
```

### `Compose_Escalation_Title`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Escalation']?['Title'], '—')}
```

### `Compose_Escalation_Email`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Escalation']?['Email'], '')}
```

### `Compose_Escalation_Initials`
```
@{if(empty(coalesce(triggerBody()?['NewActivityTask']?['Escalation']?['Name'], '')), 'ES', toUpper(concat(substring(coalesce(split(trim(triggerBody()?['NewActivityTask']?['Escalation']?['Name']), ' ')[0], ''), 0, 1), substring(coalesce(if(greater(length(split(trim(triggerBody()?['NewActivityTask']?['Escalation']?['Name']), ' ')), 1), last(split(trim(triggerBody()?['NewActivityTask']?['Escalation']?['Name']), ' ')), ''), ''), 0, 1))))}
```

---

## §4 — Email-as-Task — extra Composes + attachments variable

### `Compose_Source_Sender_Name`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['SenderName'], '—')}
```

### `Compose_Source_Sender_Email`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['SenderEmail'], '')}
```

### `Compose_Source_Sender_Org`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['SenderOrg'], '')}
```

### `Compose_Source_Sender_Initials`
```
@{if(empty(coalesce(triggerBody()?['NewActivityTask']?['Source']?['SenderName'], '')), 'NA', toUpper(concat(substring(coalesce(split(trim(triggerBody()?['NewActivityTask']?['Source']?['SenderName']), ' ')[0], ''), 0, 1), substring(coalesce(if(greater(length(split(trim(triggerBody()?['NewActivityTask']?['Source']?['SenderName']), ' ')), 1), last(split(trim(triggerBody()?['NewActivityTask']?['Source']?['SenderName']), ' ')), ''), ''), 0, 1))))}
```

### `Compose_Source_To`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['To'], '—')}
```

### `Compose_Source_Cc`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['Cc'], '')}
```

### `Compose_Source_Received_At`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['ReceivedAt'], '—')}
```

### `Compose_Source_Importance`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['Importance'], 'Normal')}
```

### `Compose_Importance_Text`
```
@{outputs('Compose_ImportanceToken')['text']}
```

### `Compose_Importance_Bg`
```
@{outputs('Compose_ImportanceToken')['bg']}
```

### `Compose_Importance_Border`
```
@{outputs('Compose_ImportanceToken')['border']}
```

### `Compose_Importance_Glyph`
```
@{outputs('Compose_ImportanceToken')['glyph']}
```

### `Compose_Source_Word_Count`
```
@{coalesce(string(triggerBody()?['NewActivityTask']?['Source']?['WordCount']), '~')}
```

### `Compose_Source_Reading_Time`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['ReadingTime'], if(greater(coalesce(triggerBody()?['NewActivityTask']?['Source']?['WordCount'], 0), 0), concat(string(max(1, div(coalesce(triggerBody()?['NewActivityTask']?['Source']?['WordCount'], 0), 220))), ' min'), '1 min'))}
```

### `Compose_Source_Thread_Excerpt`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['ThreadExcerpt'], '(no excerpt available)')}
```

### `Compose_Source_Inbox`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['Inbox'], 'official inbox')}
```

### `Compose_Routed_By`
```
@{coalesce(triggerBody()?['NewActivityTask']?['Source']?['RoutedBy'], 'Workflow Service')}
```

### `Compose_Source_Attachment_Count`
```
@{string(length(coalesce(triggerBody()?['NewActivityTask']?['Attachments'], json('[]'))))}
```

### Initialize variable — `varAttachmentRowsHTML`
* Name: `varAttachmentRowsHTML`
* Type: `String`
* Value: *(empty)*

### Select — `Select_AttachmentRows`
* From:
  ```
  @{coalesce(triggerBody()?['NewActivityTask']?['Attachments'], json('[]'))}
  ```
* Map (switch the Select control to **Text** mode, then paste):
  ```
  @{concat('<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-bottom:1px solid #E8E6E7; padding:8px 0;"><tr><td width="36" valign="middle" style="padding-right:10px;"><div style="width:30px; height:30px; border-radius:6px; background-color:#E6EEEB; color:#05583B; font-size:10px; font-weight:800; text-align:center; line-height:30px; font-family:''Helvetica Neue'',Arial,sans-serif;">', toUpper(coalesce(item()?['Ext'], 'FILE')), '</div></td><td valign="middle"><a href="', coalesce(item()?['Url'], '#'), '" style="font-size:13px; line-height:18px; color:#05583B; font-weight:800; text-decoration:none;">', coalesce(item()?['Name'], 'Attachment'), '</a><div style="font-size:11px; color:#807D7E; line-height:16px;">', coalesce(item()?['SizeLabel'], ''), '</div></td><td align="right" valign="middle"><a href="', coalesce(item()?['Url'], '#'), '" style="font-size:10px; font-weight:800; color:#05583B; text-transform:uppercase; letter-spacing:1px; border:1px solid #D6D4D5; padding:6px 10px; border-radius:999px; text-decoration:none;">Open</a></td></tr></table>')}
  ```

### Set variable — `Set_varAttachmentRowsHTML`
* Name: `varAttachmentRowsHTML`
* Value:
  ```
  @{join(body('Select_AttachmentRows'), '')}
  ```

---

## §5 — Bulk dispatch — extra Composes + task-rows variable

### `Compose_Batch_Id`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchId'], 'BATCH-UNSPECIFIED')}
```

### `Compose_Batch_Total`
```
@{string(coalesce(triggerBody()?['NewActivityTask']?['BatchTotal'], length(coalesce(triggerBody()?['NewActivityTask']?['BatchItems'], json('[]')))))}
```

### `Compose_Batch_Acked`
```
@{string(coalesce(triggerBody()?['NewActivityTask']?['BatchAcked'], 0))}
```

### `Compose_Batch_Progress_Pct`
```
@{string(if(greater(coalesce(triggerBody()?['NewActivityTask']?['BatchTotal'], length(coalesce(triggerBody()?['NewActivityTask']?['BatchItems'], json('[]')))), 0), div(mul(coalesce(triggerBody()?['NewActivityTask']?['BatchAcked'], 0), 100), coalesce(triggerBody()?['NewActivityTask']?['BatchTotal'], length(coalesce(triggerBody()?['NewActivityTask']?['BatchItems'], json('[]'))))), 0))}
```

### `Compose_Batch_Category`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchCategory'], 'General Correspondence')}
```

### `Compose_Batch_Source`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchSource'], 'Manual bundle')}
```

### `Compose_Batch_Oldest_Date`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchOldestDate'], '—')}
```

### `Compose_Batch_Summary`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchSummary'], 'The documents below have been grouped into a single official dispatch for your review and acknowledgement.')}
```

### `Compose_Batch_Portal_Url`
```
@{coalesce(triggerBody()?['NewActivityTask']?['BatchPortalUrl'], '#')}
```

### Initialize variable — `varTaskRowsHTML`
* Name: `varTaskRowsHTML`
* Type: `String`
* Value: *(empty)*

### Select — `Select_TaskRows`
* From:
  ```
  @{coalesce(triggerBody()?['NewActivityTask']?['BatchItems'], json('[]'))}
  ```
* Map (Text mode):
  ```
  @{concat('<tr><td style="font-family:''Courier New'',monospace; font-size:12px; font-weight:700; color:#05583B; word-break:break-all;">', coalesce(item()?['RefId'], '—'), '</td><td>', coalesce(item()?['Subject'], '—'), '</td><td align="right" style="text-align:right; white-space:nowrap;"><a href="', coalesce(item()?['Url'], '#'), '" style="display:inline-block; font-size:10px; font-weight:800; color:#FFFFFF; background-color:#05583B; text-transform:uppercase; letter-spacing:1px; padding:6px 12px; border-radius:999px; text-decoration:none;">Open &#8599;</a></td></tr>')}
  ```

### Set variable — `Set_varTaskRowsHTML`
* Name: `varTaskRowsHTML`
* Value:
  ```
  @{join(body('Select_TaskRows'), '')}
  ```

---

## §6 — Send the email (Office 365 Outlook → Send an email V2)

Wrap the send step in a **Switch** on `outputs('Compose_Variant')`.

### To (all cases)
```
@{coalesce(triggerBody()?['NewActivityTask']?['Recipient']?['Email'], 'noreply@nitda.gov.ng')}
```

### Subject (all cases)
```
@{outputs('Compose_Subject')}
```

### Importance (all cases)
```
@{if(equals(toLower(outputs('Compose_Priority_Level')), 'urgent'), 'High', if(equals(toLower(outputs('Compose_Priority_Level')), 'high'), 'High', if(equals(toLower(outputs('Compose_Priority_Level')), 'low'), 'Low', 'Normal')))}
```

### Body
* Case `single` → full contents of `templates/Single_Task_NITDA.html`
* Case `emailtask` → full contents of `templates/EmailTask_NITDA.html`
* Case `bulk` → full contents of `templates/Bulk_NITDA.html`

Turn on the `<>` (HTML) toggle on the **Body** field before pasting.

### Single-send alternative
If you'd prefer one Send-an-Email V2 step:

1. Create `Compose_Body_Single`, `Compose_Body_EmailTask`, `Compose_Body_Bulk` — each holds one template.
2. In Send Email V2 → Body, paste:
   ```
   @{if(equals(outputs('Compose_Variant'), 'bulk'), outputs('Compose_Body_Bulk'), if(equals(outputs('Compose_Variant'), 'emailtask'), outputs('Compose_Body_EmailTask'), outputs('Compose_Body_Single')))}
   ```

---

## §7 — Action execution order

1. Trigger
2. `Compose_Variant`
3. `Compose_PriorityToken` · `Compose_StatusToken` · `Compose_ImportanceToken` · `Compose_ClassificationLabel`
4. §2 shared Composes (any order)
5. Branch on `Compose_Variant`:
   * `single` → §3 Composes
   * `emailtask` → §4 Composes → `Select_AttachmentRows` → `Set_varAttachmentRowsHTML`
   * `bulk` → §5 Composes → `Select_TaskRows` → `Set_varTaskRowsHTML`
6. §6 Switch → Send an email V2

---

## §8 — Built-in fail-safes

| Concern | Where handled |
|---|---|
| Missing `Attachments` (null) | `coalesce(..., json('[]'))` in Compose_Source_Attachment_Count, Select_AttachmentRows |
| Missing `BatchItems` (null) | `coalesce(..., json('[]'))` in Compose_Batch_Total, Compose_Batch_Progress_Pct, Select_TaskRows |
| Division by zero in progress % | `if(greater(total, 0), …, 0)` in Compose_Batch_Progress_Pct |
| Empty name → fallback initials | `if(empty(…), 'SG'/'ES'/'NA', …)` in 3 initials Composes |
| Single-word name → 1-char initial | `if(greater(length(split…), 1), last(split…), '')` |
| Missing PriorityLevel / StatusText / Importance | `coalesce(..., 'Normal' or 'Pending Action')` before the switch |
| Missing URLs | `coalesce(..., '#')` |
| Missing trigger sub-objects | `?[ ]` null-propagating accessor on every path |
| Empty list rendered as table | Templates contain `if(empty(...), '<empty-state row>', variables(...))` |
