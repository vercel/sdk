# CreateFlagOutcomeFeatureFlagsResponse3

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlagsResponse3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlagsResponse3 = {
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
      durationMs: 373.97,
      promille: 7472.35,
    },
  ],
  startTimestamp: 3491.18,
  type: "rollout",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `base`                                                                                                           | [models.CreateFlagOutcomeFeatureFlagsResponse201Base](../models/createflagoutcomefeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `finalPromille`                                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `rollFromVariantId`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollToVariantId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `slots`                                                                                                          | [models.CreateFlagOutcomeFeatureFlagsResponseSlots](../models/createflagoutcomefeatureflagsresponseslots.md)[]   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startTimestamp`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *"rollout"*                                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |