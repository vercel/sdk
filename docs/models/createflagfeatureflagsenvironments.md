# CreateFlagFeatureFlagsEnvironments

## Example Usage

```typescript
import { CreateFlagFeatureFlagsEnvironments } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsEnvironments = {
  active: true,
  fallthrough: {
    type: "variant",
    variantId: "<id>",
  },
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  rules: [
    {
      conditions: [
        {
          cmp: "oneOf",
          lhs: {
            type: "segment",
          },
        },
      ],
      id: "<id>",
      outcome: {
        type: "variant",
        variantId: "<id>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fallthrough`                                                                                                                        | *models.CreateFlagFeatureFlagsFallthrough*                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `pausedOutcome`                                                                                                                      | [models.CreateFlagFeatureFlagsPausedOutcome](../models/createflagfeatureflagspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `reuse`                                                                                                                              | [models.CreateFlagFeatureFlagsReuse](../models/createflagfeatureflagsreuse.md)                                                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `revision`                                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `rules`                                                                                                                              | [models.CreateFlagFeatureFlagsRules](../models/createflagfeatureflagsrules.md)[]                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `targets`                                                                                                                            | Record<string, Record<string, Record<string, [models.CreateFlagFeatureFlagsTargets](../models/createflagfeatureflagstargets.md)[]>>> | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |