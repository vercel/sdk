# GetFirewallConfigRulesets1

## Example Usage

```typescript
import { GetFirewallConfigRulesets1 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesets1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conditionGroup`                                                                                         | [models.GetFirewallConfigRulesetsConditionGroup](../models/getfirewallconfigrulesetsconditiongroup.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `action`                                                                                                 | [models.GetFirewallConfigRulesetsAction](../models/getfirewallconfigrulesetsaction.md)                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |