# PutFirewallConfigRulesSecurityConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityConditionGroup = {
  conditions: [
    {
      type: "bot_category",
      op: "pre",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                               | [models.PutFirewallConfigRulesSecurityConditions](../models/putfirewallconfigrulessecurityconditions.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |