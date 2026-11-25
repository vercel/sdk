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
          cmp: "before",
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                             | *boolean*                                                                                                                                            | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `fallthrough`                                                                                                                                        | *models.CreateFlagFeatureFlagsResponseFallthrough*                                                                                                   | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `pausedOutcome`                                                                                                                                      | [models.CreateFlagFeatureFlagsResponsePausedOutcome](../models/createflagfeatureflagsresponsepausedoutcome.md)                                       | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `reuse`                                                                                                                                              | [models.CreateFlagFeatureFlagsResponseReuse](../models/createflagfeatureflagsresponsereuse.md)                                                       | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `revision`                                                                                                                                           | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `rules`                                                                                                                                              | [models.CreateFlagFeatureFlagsResponseRules](../models/createflagfeatureflagsresponserules.md)[]                                                     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `targets`                                                                                                                                            | Record<string, Record<string, Record<string, [models.CreateFlagFeatureFlagsResponseTargets](../models/createflagfeatureflagsresponsetargets.md)[]>>> | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |