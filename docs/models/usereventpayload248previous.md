# UserEventPayload248Previous

## Example Usage

```typescript
import { UserEventPayload248Previous } from "@vercel/sdk/models/payloadintegration.js";

let value: UserEventPayload248Previous = {
  allowUnsafeScriptSrcKeywords: true,
  enabled: false,
  enforcePercentage: 1673.31,
  mode: "<value>",
  newResourceBlockingPolicy: "block",
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