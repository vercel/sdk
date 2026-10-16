# Conditions3

## Example Usage

```typescript
import { Conditions3 } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: Conditions3 = {
  type: "header",
  op: "pre",
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.CreateConditionalBypassConditionsSecurityType](../models/createconditionalbypassconditionssecuritytype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.CreateConditionalBypassConditionsSecurityOp](../models/createconditionalbypassconditionssecurityop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |