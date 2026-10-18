# UserEventPayload240Previous

## Example Usage

```typescript
import { UserEventPayload240Previous } from "@vercel/sdk/models/configchanges.js";

let value: UserEventPayload240Previous = {
  allowUnsafeScriptSrcKeywords: false,
  enabled: true,
  enforcePercentage: 9790,
  mode: "<value>",
  newResourceBlockingPolicy: "allow",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `allowUnsafeScriptSrcKeywords`                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `computedConnectSrc`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `computedConnectSrcPreview`                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `computedScriptSrc`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `computedScriptSrcPreview`                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `connectSrcNotificationsEnabled`                                                         | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enforcementScope`                                                                       | [models.PayloadEnforcementScope](../models/payloadenforcementscope.md)                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enforcePercentage`                                                                      | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mode`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newResourceBlockingPolicy`                                                              | [models.PayloadNewResourceBlockingPolicy](../models/payloadnewresourceblockingpolicy.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `omitScriptNonce`                                                                        | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |