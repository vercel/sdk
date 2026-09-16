# PutFirewallConfigRulesets1

## Example Usage

```typescript
import { PutFirewallConfigRulesets1 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesets1 = {
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          op: "gte",
          type: "shared_condition",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                               | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `conditionGroup`                                                                                                       | [models.PutFirewallConfigRulesetsConditionGroup](../models/putfirewallconfigrulesetsconditiongroup.md)[]               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [models.PutFirewallConfigRulesetsSecurityResponseAction](../models/putfirewallconfigrulesetssecurityresponseaction.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |