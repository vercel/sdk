# UpdateFlagRules

## Example Usage

```typescript
import { UpdateFlagRules } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagRules = {
  id: "<id>",
  conditions: [
    {
      lhs: {
        type: "<value>",
      },
      cmp: "eq",
    },
  ],
  outcome: {
    type: "<value>",
    variantId: "<id>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `conditions`                                                       | [models.UpdateFlagConditions](../models/updateflagconditions.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `outcome`                                                          | *models.UpdateFlagOutcome*                                         | :heavy_check_mark:                                                 | N/A                                                                |