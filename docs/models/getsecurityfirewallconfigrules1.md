# GetSecurityFirewallConfigRules1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRules1 } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigRules1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  action: {},
  valid: true,
  validationErrors: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `active`                                                                                                                           | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `conditionGroup`                                                                                                                   | [models.GetSecurityFirewallConfigRulesSecurityConditionGroup](../models/getsecurityfirewallconfigrulessecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.GetSecurityFirewallConfigRulesSecurityAction](../models/getsecurityfirewallconfigrulessecurityaction.md)                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `valid`                                                                                                                            | *true*                                                                                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `validationErrors`                                                                                                                 | *any*                                                                                                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |