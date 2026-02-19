# ConditionGroup

## Example Usage

```typescript
import { ConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: ConditionGroup = {
  conditions: [
    {
      type: "method",
      op: "gte",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conditions`                                                                     | [models.PutFirewallConfigConditions](../models/putfirewallconfigconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |