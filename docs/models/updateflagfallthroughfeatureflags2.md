# UpdateFlagFallthroughFeatureFlags2

## Example Usage

```typescript
import { UpdateFlagFallthroughFeatureFlags2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthroughFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 1178.49,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"split"*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `base`                                                                                             | [models.UpdateFlagFallthroughFeatureFlagsBase](../models/updateflagfallthroughfeatureflagsbase.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `weights`                                                                                          | Record<string, *number*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `defaultVariantId`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |