# GetSecurityFirewallConfigRules2

## Example Usage

```typescript
import { GetSecurityFirewallConfigRules2 } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRules2 = {
  action: {},
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                           | [models.GetSecurityFirewallConfigRulesSecurityResponseAction](../models/getsecurityfirewallconfigrulessecurityresponseaction.md)                   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `active`                                                                                                                                           | *boolean*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `conditionGroup`                                                                                                                                   | [models.GetSecurityFirewallConfigRulesSecurityResponseConditionGroup](../models/getsecurityfirewallconfigrulessecurityresponseconditiongroup.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `description`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `valid`                                                                                                                                            | *false*                                                                                                                                            | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `validationErrors`                                                                                                                                 | *string*[]                                                                                                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |