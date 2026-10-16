# Conditions1

## Example Usage

```typescript
import { Conditions1 } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: Conditions1 = {
  type: "user_agent",
  op: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | [models.ConditionsType](../models/conditionstype.md) | :heavy_check_mark:                                   | N/A                                                  |
| `op`                                                 | [models.ConditionsOp](../models/conditionsop.md)     | :heavy_check_mark:                                   | N/A                                                  |
| `value`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `key`                                                | [models.ConditionsKey](../models/conditionskey.md)   | :heavy_minus_sign:                                   | N/A                                                  |