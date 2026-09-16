# PutFirewallConfigRulesSecurityConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityConditionGroup = {
  conditions: [
    {
      op: "suf",
      type: "geo_country",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                               | [models.PutFirewallConfigRulesSecurityConditions](../models/putfirewallconfigrulessecurityconditions.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |