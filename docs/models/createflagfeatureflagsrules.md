# CreateFlagFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRules = {
  id: "<id>",
  outcome: {
    type: "experiment",
  },
  conditions: [
    {
      lhs: {
        type: "segment",
      },
      cmp: "before",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outcome`                                                                                  | *models.CreateFlagFeatureFlagsOutcome*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `conditions`                                                                               | [models.CreateFlagFeatureFlagsConditions](../models/createflagfeatureflagsconditions.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |