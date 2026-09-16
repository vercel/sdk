# GetSecurityFirewallConfigRulesetsSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesetsSecurityConditionGroup = {
  conditions: [
    {
      op: "suf",
      type: "query",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityConditions](../models/getsecurityfirewallconfigrulesetssecurityconditions.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |