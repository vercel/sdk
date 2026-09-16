# GetSecurityFirewallConfigRulesSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesSecurityConditionGroup = {
  conditions: [
    {
      op: "sub",
      type: "bot_category",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityConditions](../models/getsecurityfirewallconfigrulessecurityconditions.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |