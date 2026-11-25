# UserEventPayload272Next

## Example Usage

```typescript
import { UserEventPayload272Next } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: UserEventPayload272Next = {
  allowUnsafeScriptSrcKeywords: false,
  enabled: true,
  enforcePercentage: 8661.04,
  mode: "<value>",
  newResourceBlockingPolicy: "allow",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `allowUnsafeScriptSrcKeywords`                                             | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `computedConnectSrc`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedConnectSrcPreview`                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedScriptSrc`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedScriptSrcPreview`                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `connectSrcNotificationsEnabled`                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `enabled`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `enforcementScope`                                                         | [models.EnforcementScope](../models/enforcementscope.md)                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `enforcePercentage`                                                        | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `mode`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `newResourceBlockingPolicy`                                                | [models.NewResourceBlockingPolicy](../models/newresourceblockingpolicy.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `omitScriptNonce`                                                          | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |