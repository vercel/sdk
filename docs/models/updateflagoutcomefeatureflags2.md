# UpdateFlagOutcomeFeatureFlags2

## Example Usage

```typescript
import { UpdateFlagOutcomeFeatureFlags2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcomeFeatureFlags2 = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                     | [models.UpdateFlagOutcomeFeatureFlagsResponseBase](../models/updateflagoutcomefeatureflagsresponsebase.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `defaultVariantId`                                                                                         | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *"split"*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `weights`                                                                                                  | Record<string, *number*>                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |