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
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [
      {
        durationMs: 373.97,
        promille: 7472.35,
      },
    ],
    startTimestamp: 3844.78,
    type: "rollout",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                               | [models.CreateFlagFeatureFlagsResponseConditions](../models/createflagfeatureflagsresponseconditions.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `outcome`                                                                                                  | *models.CreateFlagFeatureFlagsResponseOutcome*                                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |