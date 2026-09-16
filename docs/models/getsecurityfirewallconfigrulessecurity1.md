# GetSecurityFirewallConfigRulesSecurity1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurity1 } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesSecurity1 = {
  action: {},
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          op: "eq",
          type: "ja3_digest",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: true,
  validationErrors: "<value>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                 | [models.GetSecurityFirewallConfigRulesSecurityResponse200Action](../models/getsecurityfirewallconfigrulessecurityresponse200action.md)                   | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `active`                                                                                                                                                 | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `conditionGroup`                                                                                                                                         | [models.GetSecurityFirewallConfigRulesSecurityResponse200ConditionGroup](../models/getsecurityfirewallconfigrulessecurityresponse200conditiongroup.md)[] | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `description`                                                                                                                                            | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `valid`                                                                                                                                                  | *true*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `validationErrors`                                                                                                                                       | *any*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |