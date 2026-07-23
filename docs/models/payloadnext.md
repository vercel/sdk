# PayloadNext

## Example Usage

```typescript
import { PayloadNext } from "@vercel/sdk/models/preventautoblocking.js";

let value: PayloadNext = {
  enabled: true,
  mode: "<value>",
  enforcePercentage: 9816.1,
  newResourceBlockingPolicy: "block",
  allowUnsafeScriptSrcKeywords: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mode`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enforcementScope`                                                                       | [models.PayloadEnforcementScope](../models/payloadenforcementscope.md)                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enforcePercentage`                                                                      | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newResourceBlockingPolicy`                                                              | [models.PayloadNewResourceBlockingPolicy](../models/payloadnewresourceblockingpolicy.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `allowUnsafeScriptSrcKeywords`                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `omitScriptNonce`                                                                        | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |