# PutFirewallConfigConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigConditionGroup = {
  conditions: [
    {
      type: "rate_limit_api_id",
      op: "gt",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conditions`                                                                     | [models.PutFirewallConfigConditions](../models/putfirewallconfigconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |