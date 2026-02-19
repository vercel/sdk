# CreateFlagOutcomeFeatureFlags2

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlags2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 5089.47,
    "key1": 1603.89,
    "key2": 3072.65,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *"split"*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `base`                                                                                     | [models.CreateFlagOutcomeFeatureFlagsBase](../models/createflagoutcomefeatureflagsbase.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `weights`                                                                                  | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `defaultVariantId`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |