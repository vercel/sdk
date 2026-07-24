# GetSecurityFirewallConfigRulesetsApiSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsApiSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigapisecurityaction.js";

let value: GetSecurityFirewallConfigRulesetsApiSecurityResponseConditionGroup =
  {
    conditions: [
      {
        type: "cookie",
        op: "nex",
      },
    ],
  };
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                           | [models.GetSecurityFirewallConfigRulesetsApiSecurityResponseConditions](../models/getsecurityfirewallconfigrulesetsapisecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |