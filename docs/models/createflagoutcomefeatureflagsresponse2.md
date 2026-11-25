# CreateFlagOutcomeFeatureFlagsResponse2

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlagsResponse2 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlagsResponse2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 3245,
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