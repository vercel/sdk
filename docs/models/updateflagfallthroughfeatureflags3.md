# UpdateFlagFallthroughFeatureFlags3

## Example Usage

```typescript
import { UpdateFlagFallthroughFeatureFlags3 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthroughFeatureFlags3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      durationMs: 2920.38,
      promille: 2566.4,
    },
  ],
  startTimestamp: 4638.07,
  type: "rollout",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                                   | [models.UpdateFlagFallthroughFeatureFlagsResponse200Base](../models/updateflagfallthroughfeatureflagsresponse200base.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultVariantId`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollFromVariantId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollToVariantId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `slots`                                                                                                                  | [models.UpdateFlagFallthroughFeatureFlagsSlots](../models/updateflagfallthroughfeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"rollout"*                                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |