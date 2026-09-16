# PutFirewallConfigRulesetsConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigRulesetsConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsConditionGroup = {
  conditions: [
    {
      op: "gte",
      type: "shared_condition",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                     | [models.PutFirewallConfigRulesetsConditions](../models/putfirewallconfigrulesetsconditions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |