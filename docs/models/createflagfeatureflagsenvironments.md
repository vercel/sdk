# CreateFlagFeatureFlagsEnvironments

## Example Usage

```typescript
import { CreateFlagFeatureFlagsEnvironments } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsEnvironments = {
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  fallthrough: {
    type: "variant",
    variantId: "<id>",
  },
  active: true,
  rules: [
    {
      id: "<id>",
      outcome: {
        type: "split",
        base: {
          type: "entity",
          kind: "<value>",
          attribute: "<value>",
        },
        weights: {},
        defaultVariantId: "<id>",
      },
      conditions: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `reuse`                                                                                                                              | [models.CreateFlagFeatureFlagsReuse](../models/createflagfeatureflagsreuse.md)                                                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.CreateFlagFeatureFlagsTargets](../models/createflagfeatureflagstargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `pausedOutcome`                                                                                                                      | [models.CreateFlagFeatureFlagsPausedOutcome](../models/createflagfeatureflagspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.CreateFlagFeatureFlagsFallthrough*                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.CreateFlagFeatureFlagsRules](../models/createflagfeatureflagsrules.md)[]                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |