# ConditionGroup

## Example Usage

```typescript
import { ConditionGroup } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: ConditionGroup = {
  conditions: [
    {
      type: "region",
      op: "pre",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |