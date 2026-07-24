# CreateSecurityFirewallConfigByConfigVersionActivateRulesets1

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesets1 } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateRulesets1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "path",
          op: "list",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                                                | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `id`                                                                                                                                                                         | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `name`                                                                                                                                                                       | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `active`                                                                                                                                                                     | *boolean*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `conditionGroup`                                                                                                                                                             | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsconditiongroup.md)[] | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `action`                                                                                                                                                                     | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsAction](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsaction.md)                   | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |