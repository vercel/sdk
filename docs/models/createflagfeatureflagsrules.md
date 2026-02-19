# CreateFlagFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRules = {
  id: "<id>",
  outcome: {
    type: "split",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 4023.69,
      "key1": 3498.59,
      "key2": 3958.83,
    },
    defaultVariantId: "<id>",
  },
  conditions: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outcome`                                                                                  | *models.CreateFlagFeatureFlagsOutcome*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `conditions`                                                                               | [models.CreateFlagFeatureFlagsConditions](../models/createflagfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |