# RulesetsConditions

## Example Usage

```typescript
import { RulesetsConditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: RulesetsConditions = {
  type: "path",
  op: "re",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | [models.RulesetsType](../models/rulesetstype.md) | :heavy_check_mark:                               | N/A                                              |
| `op`                                             | [models.RulesetsOp](../models/rulesetsop.md)     | :heavy_check_mark:                               | N/A                                              |
| `neg`                                            | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `value`                                          | *models.RulesetsValue*                           | :heavy_minus_sign:                               | N/A                                              |