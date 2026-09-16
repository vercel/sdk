# CreateFlagFallthroughFeatureFlags2

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlags2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlags2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                             | [models.CreateFlagFallthroughFeatureFlagsResponseBase](../models/createflagfallthroughfeatureflagsresponsebase.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `defaultVariantId`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *"split"*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `weights`                                                                                                          | Record<string, *number*>                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |