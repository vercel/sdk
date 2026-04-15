# UpdateFlagFallthroughFeatureFlags3

## Example Usage

```typescript
import { UpdateFlagFallthroughFeatureFlags3 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthroughFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 7807.09,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"rollout"*                                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `base`                                                                                                                   | [models.UpdateFlagFallthroughFeatureFlagsResponse200Base](../models/updateflagfallthroughfeatureflagsresponse200base.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultVariantId`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollFromVariantId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollToVariantId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `slots`                                                                                                                  | [models.UpdateFlagFallthroughFeatureFlagsSlots](../models/updateflagfallthroughfeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |