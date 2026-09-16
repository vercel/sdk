# ResponseBodyRules

## Example Usage

```typescript
import { ResponseBodyRules } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyRules = {
  conditions: [
    {
      cmp: "after",
      lhs: {
        type: "segment",
      },
    },
  ],
  id: "<id>",
  outcome: {
    type: "experiment",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conditions`                                                           | [models.ResponseBodyConditions](../models/responsebodyconditions.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `outcome`                                                              | *models.ResponseBodyOutcome*                                           | :heavy_check_mark:                                                     | N/A                                                                    |