# PutFirewallConfigRulesetsConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigRulesetsConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsConditionGroup = {
  conditions: [
    {
      type: "geo_as_number",
      op: "re",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                     | [models.PutFirewallConfigRulesetsConditions](../models/putfirewallconfigrulesetsconditions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |