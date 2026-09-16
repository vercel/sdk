# GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup = {
  conditions: [
    {
      op: "nex",
      type: "bot_protection",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityResponseConditions](../models/getsecurityfirewallconfigrulesetssecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |