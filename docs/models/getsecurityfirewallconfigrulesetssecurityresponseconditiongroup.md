# GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfiglogheaderssecurityresponse200applicationjsonresponsebodydraftrules2.js";

let value: GetSecurityFirewallConfigRulesetsSecurityResponseConditionGroup = {
  conditions: [
    {
      type: "query",
      op: "ex",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                                     | [models.GetSecurityFirewallConfigRulesetsSecurityResponseConditions](../models/getsecurityfirewallconfigrulesetssecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |