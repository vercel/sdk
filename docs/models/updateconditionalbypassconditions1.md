# UpdateConditionalBypassConditions1

## Example Usage

```typescript
import { UpdateConditionalBypassConditions1 } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassConditions1 = {
  type: "user_agent",
  op: "pre",
  value: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.UpdateConditionalBypassConditionsType](../models/updateconditionalbypassconditionstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `op`                                                                                               | [models.UpdateConditionalBypassConditionsOp](../models/updateconditionalbypassconditionsop.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | [models.UpdateConditionalBypassConditionsKey](../models/updateconditionalbypassconditionskey.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |