# Conditions2

## Example Usage

```typescript
import { Conditions2 } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: Conditions2 = {
  type: "path",
  op: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.CreateConditionalBypassConditionsType](../models/createconditionalbypassconditionstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.CreateConditionalBypassConditionsOp](../models/createconditionalbypassconditionsop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |