# CreateSecurityFirewallConfigByConfigVersionActivateRulesets1

## Example Usage

```typescript
import { CreateSecurityFirewallConfigByConfigVersionActivateRulesets1 } from "@vercel/sdk/models/createsecurityfirewallconfigbyconfigversionactivateop.js";

let value: CreateSecurityFirewallConfigByConfigVersionActivateRulesets1 = {
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          op: "neq",
          type: "header",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                     | *boolean*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `conditionGroup`                                                                                                                                                             | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsConditionGroup](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsconditiongroup.md)[] | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `description`                                                                                                                                                                | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `id`                                                                                                                                                                         | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `name`                                                                                                                                                                       | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `action`                                                                                                                                                                     | [models.CreateSecurityFirewallConfigByConfigVersionActivateRulesetsAction](../models/createsecurityfirewallconfigbyconfigversionactivaterulesetsaction.md)                   | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |