# Fresh-build kit — `Web - OTP Verify`

Generated. Start at [BUILD.md](BUILD.md).

| File | What it is |
| --- | --- |
| [BUILD.md](BUILD.md) | the procedure, and the two steps that must follow the build |
| [Web_OTP_Verify.trigger.json](Web_OTP_Verify.trigger.json) | the trigger to create by hand |
| [Web_OTP_Verify.Scope_Global.designer-paste.json](Web_OTP_Verify.Scope_Global.designer-paste.json) | the flow body, in the designer's clipboard format |
| [Web_OTP_Verify.Scope_Flow_Data_Capture.designer-paste.json](Web_OTP_Verify.Scope_Flow_Data_Capture.designer-paste.json) | optional run-record telemetry — read §4 before pasting it |

Regenerate with `node scripts/build-otp-verify-fresh-flow.mjs`; `npm run test:freshflow` fails
if these drift from the patched definition.
