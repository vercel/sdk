# GetFirewallConfigConditionGroup

## Example Usage

```typescript
import { GetFirewallConfigConditionGroup } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigConditionGroup = {
  conditions: [
    {
      op: "lte",
      type: "scheme",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                     | [models.GetFirewallConfigSecurityConditions](../models/getfirewallconfigsecurityconditions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |