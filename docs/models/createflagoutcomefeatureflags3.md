# CreateFlagOutcomeFeatureFlags3

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlags3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlags3 = {
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
      durationMs: 4563.45,
      promille: 1604.87,
    },
  ],
  startTimestamp: 8874.69,
  type: "rollout",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                           | [models.CreateFlagOutcomeFeatureFlagsResponse201Base](../models/createflagoutcomefeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollFromVariantId`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollToVariantId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `slots`                                                                                                          | [models.CreateFlagOutcomeFeatureFlagsSlots](../models/createflagoutcomefeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startTimestamp`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"rollout"*                                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |