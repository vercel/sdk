# GetSecurityFirewallConfigRulesetsConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesetsConditionGroup = {
  conditions: [
    {
      op: "ex",
      type: "ja3_digest",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                     | [models.GetSecurityFirewallConfigRulesetsConditions](../models/getsecurityfirewallconfigrulesetsconditions.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |