# Rules1

## Example Usage

```typescript
import { Rules1 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Rules1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [],
  action: {},
  valid: false,
  validationErrors: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `active`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `conditionGroup`                                                 | [models.RulesConditionGroup](../models/rulesconditiongroup.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `action`                                                         | [models.RulesAction](../models/rulesaction.md)                   | :heavy_check_mark:                                               | N/A                                                              |
| `valid`                                                          | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `validationErrors`                                               | *any*                                                            | :heavy_check_mark:                                               | N/A                                                              |