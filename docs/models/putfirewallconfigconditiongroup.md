# PutFirewallConfigConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigConditionGroup = {
  conditions: [
    {
      op: "suf",
      type: "ja4_digest",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                     | [models.PutFirewallConfigSecurityResponseConditions](../models/putfirewallconfigsecurityresponseconditions.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |