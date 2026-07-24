# GetSecurityFirewallConfigRulesetsApiSecurity1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsApiSecurity1 } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsApiSecurity1 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "header",
          op: "lt",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `active`                                                                                                                                           | *boolean*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `conditionGroup`                                                                                                                                   | [models.GetSecurityFirewallConfigRulesetsApiSecurityConditionGroup](../models/getsecurityfirewallconfigrulesetsapisecurityconditiongroup.md)[]     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `action`                                                                                                                                           | [models.GetSecurityFirewallConfigRulesetsApiSecurityResponse200Action](../models/getsecurityfirewallconfigrulesetsapisecurityresponse200action.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |