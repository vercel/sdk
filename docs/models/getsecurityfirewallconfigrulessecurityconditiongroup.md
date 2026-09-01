# GetSecurityFirewallConfigRulesSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesSecurityConditionGroup = {
  conditions: [
    {
      type: "target_path",
      op: "eq",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityConditions](../models/getsecurityfirewallconfigrulessecurityconditions.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |