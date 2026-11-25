# CreateFlagFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRules = {
  id: "<id>",
  conditions: [
    {
      lhs: {
        type: "<value>",
        kind: "<value>",
        attribute: "<value>",
      },
      cmp: "endsWith",
    },
  ],
  outcome: {
    type: "<value>",
    base: {
      type: "<value>",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 2436.94,
    },
    defaultVariantId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `conditions`                                                                               | [models.CreateFlagFeatureFlagsConditions](../models/createflagfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outcome`                                                                                  | *models.CreateFlagFeatureFlagsOutcome*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |