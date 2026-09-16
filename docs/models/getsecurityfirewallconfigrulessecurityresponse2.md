# GetSecurityFirewallConfigRulesSecurityResponse2

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityResponse2 } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigRulesSecurityResponse2 = {
  action: {},
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          op: "re",
          type: "query",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.GetSecurityFirewallConfigRulesAction](../models/getsecurityfirewallconfigrulesaction.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `active`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `conditionGroup`                                                                                                   | [models.GetSecurityFirewallConfigRulesConditionGroup](../models/getsecurityfirewallconfigrulesconditiongroup.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `valid`                                                                                                            | *false*                                                                                                            | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `validationErrors`                                                                                                 | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |