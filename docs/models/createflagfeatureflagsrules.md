# CreateFlagFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRules = {
  conditions: [
    {
      cmp: "oneOf",
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
      "key": 2436.94,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `conditions`                                                                               | [models.CreateFlagFeatureFlagsConditions](../models/createflagfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outcome`                                                                                  | *models.CreateFlagFeatureFlagsOutcome*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |