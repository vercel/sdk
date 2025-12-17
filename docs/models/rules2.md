# Rules2

## Example Usage

```typescript
import { Rules2 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Rules2 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  action: {},
  valid: false,
  validationErrors: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `active`                                                                                           | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conditionGroup`                                                                                   | [models.GetFirewallConfigRulesConditionGroup](../models/getfirewallconfigrulesconditiongroup.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `action`                                                                                           | [models.GetFirewallConfigRulesAction](../models/getfirewallconfigrulesaction.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `valid`                                                                                            | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `validationErrors`                                                                                 | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |