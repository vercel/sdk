# CreateFlagOutcomeFeatureFlags3

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlags3 } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlags3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 7880.29,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *"rollout"*                                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `base`                                                                                                           | [models.CreateFlagOutcomeFeatureFlagsResponse201Base](../models/createflagoutcomefeatureflagsresponse201base.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultVariantId`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startTimestamp`                                                                                                 | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollFromVariantId`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rollToVariantId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `slots`                                                                                                          | [models.CreateFlagOutcomeFeatureFlagsSlots](../models/createflagoutcomefeatureflagsslots.md)[]                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |