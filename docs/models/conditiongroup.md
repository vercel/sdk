# ConditionGroup

## Example Usage

```typescript
import { ConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: ConditionGroup = {
  conditions: [
    {
      type: "user_agent",
      op: "ninc",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |