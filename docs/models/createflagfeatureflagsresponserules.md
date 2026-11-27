# CreateFlagFeatureFlagsResponseRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsResponseRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsResponseRules = {
  conditions: [
    {
      cmp: "before",
      lhs: {
        type: "segment",
      },
    },
  ],
  id: "<id>",
  outcome: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    defaultVariantId: "<id>",
    type: "split",
    weights: {
      "key": 3844.78,
      "key1": 2437.03,
      "key2": 2227.43,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                               | [models.CreateFlagFeatureFlagsResponseConditions](../models/createflagfeatureflagsresponseconditions.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `outcome`                                                                                                  | *models.CreateFlagFeatureFlagsResponseOutcome*                                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |