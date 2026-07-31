# GetSecurityFirewallConfigRulesSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigRulesSecurityResponseConditionGroup = {
  conditions: [
    {
      type: "query",
      op: "ninc",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesSecurityResponse200Conditions](../models/getsecurityfirewallconfigrulessecurityresponse200conditions.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |