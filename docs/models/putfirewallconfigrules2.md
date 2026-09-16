# PutFirewallConfigRules2

## Example Usage

```typescript
import { PutFirewallConfigRules2 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRules2 = {
  action: {},
  active: true,
  conditionGroup: [],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.PutFirewallConfigRulesSecurityAction](../models/putfirewallconfigrulessecurityaction.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `active`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `conditionGroup`                                                                                                   | [models.PutFirewallConfigRulesSecurityConditionGroup](../models/putfirewallconfigrulessecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `valid`                                                                                                            | *false*                                                                                                            | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `validationErrors`                                                                                                 | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |