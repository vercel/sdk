# GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityaction.js";

let value: GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup = {
  conditions: [
    {
      type: "protocol",
      op: "ex",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityResponseConditions](../models/getsecurityfirewallconfigrulesetssecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |