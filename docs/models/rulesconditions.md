# RulesConditions

## Example Usage

```typescript
import { RulesConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesConditions = {
  op: "list",
  type: "server_action",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `key`                                      | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `neg`                                      | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `op`                                       | [models.RulesOp](../models/rulesop.md)     | :heavy_check_mark:                         | N/A                                        |
| `type`                                     | [models.RulesType](../models/rulestype.md) | :heavy_check_mark:                         | N/A                                        |
| `value`                                    | *models.RulesValue*                        | :heavy_minus_sign:                         | N/A                                        |