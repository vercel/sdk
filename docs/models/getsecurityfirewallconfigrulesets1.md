# GetSecurityFirewallConfigRulesets1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesets1 } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesets1 = {
  active: true,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                 | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `conditionGroup`                                                                                                         | [models.GetSecurityFirewallConfigRulesetsConditionGroup](../models/getsecurityfirewallconfigrulesetsconditiongroup.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `action`                                                                                                                 | [models.GetSecurityFirewallConfigRulesetsSecurityAction](../models/getsecurityfirewallconfigrulesetssecurityaction.md)   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |