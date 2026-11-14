# UserEventPayload260Next

## Example Usage

```typescript
import { UserEventPayload260Next } from "@vercel/sdk/models/microfrontends2.js";

let value: UserEventPayload260Next = {
  allowUnsafeScriptSrcKeywords: false,
  enabled: false,
  enforcePercentage: 864.05,
  mode: "<value>",
  newResourceBlockingPolicy: "block",
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