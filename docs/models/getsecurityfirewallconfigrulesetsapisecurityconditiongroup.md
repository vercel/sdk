# GetSecurityFirewallConfigRulesetsApiSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsApiSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesetsApiSecurityConditionGroup = {
  conditions: [
    {
      type: "header",
      op: "lt",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                           | [models.GetSecurityFirewallConfigRulesetsApiSecurityConditions](../models/getsecurityfirewallconfigrulesetsapisecurityconditions.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |