# GetSecurityFirewallConfigRulesets1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesets1 } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesets1 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `active`                                                                                                                     | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `conditionGroup`                                                                                                             | [models.GetSecurityFirewallConfigRulesetsConditionGroup](../models/getsecurityfirewallconfigrulesetsconditiongroup.md)[]     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `action`                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsApiSecurityAction](../models/getsecurityfirewallconfigrulesetsapisecurityaction.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |