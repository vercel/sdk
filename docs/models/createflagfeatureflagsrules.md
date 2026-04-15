# CreateFlagFeatureFlagsRules

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRules } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRules = {
  id: "<id>",
  outcome: {
    type: "rollout",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    defaultVariantId: "<id>",
    startTimestamp: 8781.29,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [],
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