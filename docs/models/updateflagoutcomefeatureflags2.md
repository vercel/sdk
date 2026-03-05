# UpdateFlagOutcomeFeatureFlags2

## Example Usage

```typescript
import { UpdateFlagOutcomeFeatureFlags2 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcomeFeatureFlags2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {},
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *"split"*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `base`                                                                                     | [models.UpdateFlagOutcomeFeatureFlagsBase](../models/updateflagoutcomefeatureflagsbase.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `weights`                                                                                  | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `defaultVariantId`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |