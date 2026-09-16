# Rules1

## Example Usage

```typescript
import { Rules1 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Rules1 = {
  action: {},
  active: false,
  conditionGroup: [],
  id: "<id>",
  name: "<value>",
  valid: true,
  validationErrors: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `action`                                                         | [models.RulesAction](../models/rulesaction.md)                   | :heavy_check_mark:                                               | N/A                                                              |
| `active`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `conditionGroup`                                                 | [models.RulesConditionGroup](../models/rulesconditiongroup.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `valid`                                                          | *true*                                                           | :heavy_check_mark:                                               | N/A                                                              |
| `validationErrors`                                               | *any*                                                            | :heavy_check_mark:                                               | N/A                                                              |