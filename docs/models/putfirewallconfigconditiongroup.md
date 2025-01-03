# PutFirewallConfigConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigConditionGroup = {
  conditions: [
    {
      type: "target_path",
      op: "gte",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conditions`                                                                     | [models.PutFirewallConfigConditions](../models/putfirewallconfigconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |