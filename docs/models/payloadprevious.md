# PayloadPrevious

## Example Usage

```typescript
import { PayloadPrevious } from "@vercel/sdk/models/microfrontends1.js";

let value: PayloadPrevious = {
  enabled: false,
  mode: "<value>",
  enforcePercentage: 916.95,
  newResourceBlockingPolicy: "allow",
  allowUnsafeScriptSrcKeywords: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `enabled`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `mode`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `enforcementScope`                                                         | [models.EnforcementScope](../models/enforcementscope.md)                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `enforcePercentage`                                                        | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `newResourceBlockingPolicy`                                                | [models.NewResourceBlockingPolicy](../models/newresourceblockingpolicy.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `allowUnsafeScriptSrcKeywords`                                             | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `omitScriptNonce`                                                          | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `connectSrcNotificationsEnabled`                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedScriptSrc`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedScriptSrcPreview`                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedConnectSrc`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `computedConnectSrcPreview`                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |