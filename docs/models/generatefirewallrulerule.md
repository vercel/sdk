# GenerateFirewallRuleRule

## Example Usage

```typescript
import { GenerateFirewallRuleRule } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleRule = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `active`                                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conditionGroup`                                                                               | [models.GenerateFirewallRuleConditionGroup](../models/generatefirewallruleconditiongroup.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `action`                                                                                       | [models.GenerateFirewallRuleAction](../models/generatefirewallruleaction.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |