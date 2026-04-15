# UpdateFlagOutcomeFeatureFlags3

## Example Usage

```typescript
import { UpdateFlagOutcomeFeatureFlags3 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcomeFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 9372.47,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      promille: 5618.61,
      durationMs: 194.97,
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *"rollout"*                                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `base`                                                                                                           | [models.UpdateFlagOutcomeFeatureFlagsResponse200Base](../models/updateflagoutcomefeatureflagsresponse200base.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startTimestamp`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollFromVariantId`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollToVariantId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `slots`                                                                                                          | [models.UpdateFlagOutcomeFeatureFlagsSlots](../models/updateflagoutcomefeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |