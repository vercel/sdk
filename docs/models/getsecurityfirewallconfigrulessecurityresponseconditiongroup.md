# GetSecurityFirewallConfigRulesSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesSecurityResponseConditionGroup = {
  conditions: [
    {
      type: "rate_limit_api_id",
      op: "ninc",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                               | [models.GetSecurityFirewallConfigRulesSecurityResponseConditions](../models/getsecurityfirewallconfigrulessecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |