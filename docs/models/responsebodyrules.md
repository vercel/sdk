# ResponseBodyRules

## Example Usage

```typescript
import { ResponseBodyRules } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyRules = {
  id: "<id>",
  outcome: {
    type: "split",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 2452.87,
    },
    defaultVariantId: "<id>",
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "containsAllOf",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `outcome`                                                              | *models.ResponseBodyOutcome*                                           | :heavy_check_mark:                                                     | N/A                                                                    |
| `conditions`                                                           | [models.ResponseBodyConditions](../models/responsebodyconditions.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |