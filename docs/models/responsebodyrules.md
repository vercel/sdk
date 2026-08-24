# ResponseBodyRules

## Example Usage

```typescript
import { ResponseBodyRules } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyRules = {
  id: "<id>",
  outcome: {
    type: "rollout",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    defaultVariantId: "<id>",
    startTimestamp: 3197.49,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [],
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "!regex",
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