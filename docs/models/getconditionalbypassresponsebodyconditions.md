# GetConditionalBypassResponseBodyConditions

## Example Usage

```typescript
import { GetConditionalBypassResponseBodyConditions } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassResponseBodyConditions = {
  op: "nex",
  type: "ja3_digest",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                            | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `neg`                                                                                                            | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `op`                                                                                                             | [models.GetConditionalBypassResponseBodyOp](../models/getconditionalbypassresponsebodyop.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [models.GetConditionalBypassResponseBodySecurityType](../models/getconditionalbypassresponsebodysecuritytype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | *models.GetConditionalBypassResponseBodySecurityValue*                                                           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |