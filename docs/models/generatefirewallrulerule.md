# GenerateFirewallRuleRule

## Example Usage

```typescript
import { GenerateFirewallRuleRule } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleRule = {
  action: {},
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  name: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `action`                                                                                       | [models.GenerateFirewallRuleAction](../models/generatefirewallruleaction.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `active`                                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conditionGroup`                                                                               | [models.GenerateFirewallRuleConditionGroup](../models/generatefirewallruleconditiongroup.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |