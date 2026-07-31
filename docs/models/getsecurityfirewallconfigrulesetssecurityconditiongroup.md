# GetSecurityFirewallConfigRulesetsSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsSecurityConditionGroup = {
  conditions: [
    {
      type: "trusted_source",
      op: "nex",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityConditions](../models/getsecurityfirewallconfigrulesetssecurityconditions.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |