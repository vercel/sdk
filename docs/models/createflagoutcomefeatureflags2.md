# CreateFlagOutcomeFeatureFlags2

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlags2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlags2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 5089.47,
    "key1": 1603.89,
    "key2": 3072.65,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                     | [models.CreateFlagOutcomeFeatureFlagsResponseBase](../models/createflagoutcomefeatureflagsresponsebase.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `defaultVariantId`                                                                                         | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *"split"*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `weights`                                                                                                  | Record<string, *number*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |