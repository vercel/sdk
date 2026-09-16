# GetFirewallConfigRulesets1

## Example Usage

```typescript
import { GetFirewallConfigRulesets1 } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesets1 = {
  active: false,
  conditionGroup: [],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conditionGroup`                                                                                         | [models.GetFirewallConfigRulesetsConditionGroup](../models/getfirewallconfigrulesetsconditiongroup.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `action`                                                                                                 | [models.GetFirewallConfigRulesetsAction](../models/getfirewallconfigrulesetsaction.md)                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |