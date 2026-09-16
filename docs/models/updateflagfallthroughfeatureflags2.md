# UpdateFlagFallthroughFeatureFlags2

## Example Usage

```typescript
import { UpdateFlagFallthroughFeatureFlags2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthroughFeatureFlags2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 1178.49,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                             | [models.UpdateFlagFallthroughFeatureFlagsResponseBase](../models/updateflagfallthroughfeatureflagsresponsebase.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `defaultVariantId`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *"split"*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `weights`                                                                                                          | Record<string, *number*>                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |