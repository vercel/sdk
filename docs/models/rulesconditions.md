# RulesConditions

## Example Usage

```typescript
import { RulesConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesConditions = {
  type: "raw_path",
  op: "nex",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `type`                                     | [models.RulesType](../models/rulestype.md) | :heavy_check_mark:                         | N/A                                        |
| `op`                                       | [models.RulesOp](../models/rulesop.md)     | :heavy_check_mark:                         | N/A                                        |
| `neg`                                      | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `key`                                      | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `value`                                    | *models.RulesValue*                        | :heavy_minus_sign:                         | N/A                                        |