# GetSecurityFirewallConfigRulesetsConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigRulesetsConditionGroup = {
  conditions: [
    {
      type: "bot_protection",
      op: "lt",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                     | [models.GetSecurityFirewallConfigRulesetsConditions](../models/getsecurityfirewallconfigrulesetsconditions.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |