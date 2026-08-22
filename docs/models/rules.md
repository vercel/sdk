# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/flag.js";

let value: Rules = {
  id: "<id>",
  outcome: {
    type: "experiment",
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "containsAnyOf",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `outcome`                                      | *models.FlagOutcome*                           | :heavy_check_mark:                             | N/A                                            |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |