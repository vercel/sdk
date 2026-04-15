# CreateFlagFallthroughFeatureFlags3

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlags3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 4507.34,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"rollout"*                                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `base`                                                                                                                   | [models.CreateFlagFallthroughFeatureFlagsResponse201Base](../models/createflagfallthroughfeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultVariantId`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollFromVariantId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollToVariantId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `slots`                                                                                                                  | [models.CreateFlagFallthroughSlots](../models/createflagfallthroughslots.md)[]                                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |