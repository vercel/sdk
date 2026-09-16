# GetSecurityFirewallConfigRulesSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesSecurityResponseConditionGroup = {
  conditions: [
    {
      op: "ninc",
      type: "raw_path",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityResponseConditions](../models/getsecurityfirewallconfigrulessecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |