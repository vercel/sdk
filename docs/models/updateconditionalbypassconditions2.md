# UpdateConditionalBypassConditions2

## Example Usage

```typescript
import { UpdateConditionalBypassConditions2 } from "@vercel/sdk/models/updateconditionalbypassop.js";

let value: UpdateConditionalBypassConditions2 = {
  type: "path",
  op: "sub",
  value: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.UpdateConditionalBypassConditionsSecurityType](../models/updateconditionalbypassconditionssecuritytype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.UpdateConditionalBypassConditionsSecurityOp](../models/updateconditionalbypassconditionssecurityop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |