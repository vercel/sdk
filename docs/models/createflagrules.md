# CreateFlagRules

## Example Usage

```typescript
import { CreateFlagRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagRules = {
  id: "<id>",
  conditions: [],
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
| `conditions`                                                       | [models.CreateFlagConditions](../models/createflagconditions.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `outcome`                                                          | *models.CreateFlagOutcome*                                         | :heavy_check_mark:                                                 | N/A                                                                |