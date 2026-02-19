# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/flag.js";

let value: Rules = {
  id: "<id>",
  outcome: {
    type: "split",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 1208.01,
      "key1": 2235.64,
    },
    defaultVariantId: "<id>",
  },
  conditions: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `outcome`                                      | *models.Outcome*                               | :heavy_check_mark:                             | N/A                                            |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |