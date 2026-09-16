# Worksheet - visit 0: 00-fetch-activities-case-label

**Closes:** FETCH_ACTIVITIES falls to the default scope on every call.

**Flows to edit** (Power Automate -> My flows -> search this name -> Edit):

- `Universal Dynamic_Multi-Actions_Executor`  ·  internal name `1abbe547-9d7e-430e-bc2d-3ed59bc738b9`
  - This is the SUBSIDIARY_ACTIONS flow. Its eighteen cases are exactly that contract's routeKeys.

## The change

- Where: Scope_Global/Switch_Action, the case currently labelled 'list-activities'
- Rename the case value from `list-activities` to `LIST-ACTIVITIES`
- Why: The Switch is on @triggerBody()?['action'] and string comparison in Power Automate is case-sensitive. FETCH_ACTIVITIES sends the fixed action LIST-ACTIVITIES, so it matches nothing and falls through to Scope_Default.

## Step D - verify

- Call FETCH_ACTIVITIES and confirm the response is the list-activities scope rather than the default scope
