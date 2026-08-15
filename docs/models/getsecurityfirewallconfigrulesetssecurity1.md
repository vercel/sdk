# GetSecurityFirewallConfigRulesetsSecurity1

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurity1 } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigRulesetsSecurity1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `active`                                                                                                                                     | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `conditionGroup`                                                                                                                             | [models.GetSecurityFirewallConfigRulesetsSecurityConditionGroup](../models/getsecurityfirewallconfigrulesetssecurityconditiongroup.md)[]     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityResponse200Action](../models/getsecurityfirewallconfigrulesetssecurityresponse200action.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |