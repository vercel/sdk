# PutFirewallConfigRules1

## Example Usage

```typescript
import { PutFirewallConfigRules1 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRules1 = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `active`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `conditionGroup`                                                                                                   | [models.PutFirewallConfigRulesSecurityConditionGroup](../models/putfirewallconfigrulessecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `action`                                                                                                           | [models.PutFirewallConfigRulesSecurityAction](../models/putfirewallconfigrulessecurityaction.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `valid`                                                                                                            | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `validationErrors`                                                                                                 | *any*                                                                                                              | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |