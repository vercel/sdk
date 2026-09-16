# CreateFlagFallthroughFeatureFlags3

## Example Usage

```typescript
import { CreateFlagFallthroughFeatureFlags3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFallthroughFeatureFlags3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
  startTimestamp: 734.08,
  type: "rollout",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `base`                                                                                                                   | [models.CreateFlagFallthroughFeatureFlagsResponse201Base](../models/createflagfallthroughfeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultVariantId`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollFromVariantId`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `rollToVariantId`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `slots`                                                                                                                  | [models.CreateFlagFallthroughSlots](../models/createflagfallthroughslots.md)[]                                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startTimestamp`                                                                                                         | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *"rollout"*                                                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |