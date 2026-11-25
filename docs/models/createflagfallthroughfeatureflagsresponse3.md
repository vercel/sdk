# CreateFlagFallthroughFeatureFlagsResponse3

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlagsResponse3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlagsResponse3 = {
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
      durationMs: 363.24,
      promille: 682.18,
    },
  ],
  startTimestamp: 1036.79,
  type: "rollout",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                                   | [models.CreateFlagFallthroughFeatureFlagsResponse201Base](../models/createflagfallthroughfeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultVariantId`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `finalPromille`                                                                                                          | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `rollFromVariantId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollToVariantId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `slots`                                                                                                                  | [models.CreateFlagFallthroughFeatureFlagsResponseSlots](../models/createflagfallthroughfeatureflagsresponseslots.md)[]   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"rollout"*                                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |