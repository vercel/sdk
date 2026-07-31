# GetSecurityFirewallConfigRulesSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityaction.js";

let value: GetSecurityFirewallConfigRulesSecurityConditionGroup = {
  conditions: [
    {
      type: "server_action",
      op: "eq",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityResponseConditions](../models/getsecurityfirewallconfigrulessecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |