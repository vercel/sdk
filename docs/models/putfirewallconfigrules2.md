# PutFirewallConfigRules2

## Example Usage

```typescript
import { PutFirewallConfigRules2 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRules2 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [],
  action: {},
  valid: false,
  validationErrors: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `active`                                                                                           | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conditionGroup`                                                                                   | [models.PutFirewallConfigRulesConditionGroup](../models/putfirewallconfigrulesconditiongroup.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `action`                                                                                           | [models.PutFirewallConfigRulesAction](../models/putfirewallconfigrulesaction.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `valid`                                                                                            | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `validationErrors`                                                                                 | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |