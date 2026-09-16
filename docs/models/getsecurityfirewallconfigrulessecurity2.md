# GetSecurityFirewallConfigRulesSecurity2

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurity2 } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesSecurity2 = {
  action: {},
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          op: "lte",
          type: "environment",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonaction.md)                   | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `active`                                                                                                                                                                               | *boolean*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `conditionGroup`                                                                                                                                                                       | [models.GetSecurityFirewallConfigRulesSecurityResponse200ApplicationJSONConditionGroup](../models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonconditiongroup.md)[] | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `description`                                                                                                                                                                          | *string*                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `id`                                                                                                                                                                                   | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `name`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `valid`                                                                                                                                                                                | *false*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `validationErrors`                                                                                                                                                                     | *string*[]                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |