# GetSecurityFirewallConfigRulesSecurity1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurity1 } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesSecurity1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "query",
          op: "ninc",
        },
      ],
    },
  ],
  action: {},
  valid: true,
  validationErrors: null,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `active`                                                                                                                                           | *boolean*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `conditionGroup`                                                                                                                                   | [models.GetSecurityFirewallConfigRulesSecurityResponseConditionGroup](../models/getsecurityfirewallconfigrulessecurityresponseconditiongroup.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `action`                                                                                                                                           | [models.GetSecurityFirewallConfigRulesSecurityResponse200Action](../models/getsecurityfirewallconfigrulessecurityresponse200action.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `valid`                                                                                                                                            | *true*                                                                                                                                             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `validationErrors`                                                                                                                                 | *any*                                                                                                                                              | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |