# GetSecurityFirewallConfigRulesSecurity2

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurity2 } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesSecurity2 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "ja3_digest",
          op: "gt",
        },
      ],
    },
  ],
  action: {},
  valid: false,
  validationErrors: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `name`                                                                                                                                                               | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `description`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `active`                                                                                                                                                             | *boolean*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `conditionGroup`                                                                                                                                                     | [models.GetSecurityFirewallConfigRulesSecurityResponse200ConditionGroup](../models/getsecurityfirewallconfigrulessecurityresponse200conditiongroup.md)[]             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `action`                                                                                                                                                             | [models.GetSecurityFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonaction.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `valid`                                                                                                                                                              | *false*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `validationErrors`                                                                                                                                                   | *string*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |