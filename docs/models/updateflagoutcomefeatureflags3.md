# UpdateFlagOutcomeFeatureFlags3

## Example Usage

```typescript
import { UpdateFlagOutcomeFeatureFlags3 } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcomeFeatureFlags3 = {
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
      durationMs: 7957.18,
      promille: 5618.61,
    },
  ],
  startTimestamp: 194.97,
  type: "rollout",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                           | [models.UpdateFlagOutcomeFeatureFlagsResponse200Base](../models/updateflagoutcomefeatureflagsresponse200base.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollFromVariantId`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollToVariantId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `slots`                                                                                                          | [models.UpdateFlagOutcomeFeatureFlagsSlots](../models/updateflagoutcomefeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startTimestamp`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"rollout"*                                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |