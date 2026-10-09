# UpdateFlagFeatureFlagsEnvironments

## Example Usage

```typescript
import { UpdateFlagFeatureFlagsEnvironments } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFeatureFlagsEnvironments = {
  active: true,
  fallthrough: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    defaultVariantId: "<id>",
    type: "split",
    weights: {
      "key": 3268.3,
      "key1": 4251.01,
      "key2": 9352.31,
    },
  },
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  rules: [
    {
      conditions: [],
      id: "<id>",
      outcome: {
        base: {
          attribute: "<value>",
          kind: "<value>",
          type: "entity",
        },
        defaultVariantId: "<id>",
        rollFromVariantId: "<id>",
        rollToVariantId: "<id>",
        slots: [],
        startTimestamp: 7445.29,
        type: "rollout",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.UpdateFlagFeatureFlagsFallthrough*                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `pausedOutcome`                                                                                                                      | [models.UpdateFlagFeatureFlagsPausedOutcome](../models/updateflagfeatureflagspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `reuse`                                                                                                                              | [models.UpdateFlagFeatureFlagsReuse](../models/updateflagfeatureflagsreuse.md)                                                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.UpdateFlagFeatureFlagsRules](../models/updateflagfeatureflagsrules.md)[]                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.UpdateFlagFeatureFlagsTargets](../models/updateflagfeatureflagstargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |