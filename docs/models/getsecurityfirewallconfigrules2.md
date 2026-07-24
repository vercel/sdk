# GetSecurityFirewallConfigRules2

## Example Usage

```typescript
import { GetSecurityFirewallConfigRules2 } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigRules2 = {
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
  validationErrors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `active`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `conditionGroup`                                                                                                                         | [models.GetSecurityFirewallConfigRulesApiSecurityConditionGroup](../models/getsecurityfirewallconfigrulesapisecurityconditiongroup.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `action`                                                                                                                                 | [models.GetSecurityFirewallConfigRulesApiSecurityResponseAction](../models/getsecurityfirewallconfigrulesapisecurityresponseaction.md)   | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `valid`                                                                                                                                  | *false*                                                                                                                                  | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `validationErrors`                                                                                                                       | *string*[]                                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |