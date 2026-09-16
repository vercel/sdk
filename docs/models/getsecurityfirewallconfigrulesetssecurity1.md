# GetSecurityFirewallConfigRulesetsSecurity1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurity1 } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsSecurity1 = {
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                     | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `conditionGroup`                                                                                                                             | [models.GetSecurityFirewallConfigRulesetsSecurityConditionGroup](../models/getsecurityfirewallconfigrulesetssecurityconditiongroup.md)[]     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `description`                                                                                                                                | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityResponse200Action](../models/getsecurityfirewallconfigrulesetssecurityresponse200action.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |