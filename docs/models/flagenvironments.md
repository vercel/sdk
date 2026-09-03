# FlagEnvironments

## Example Usage

```typescript
import { FlagEnvironments } from "@vercel/sdk/models/flag.js";

let value: FlagEnvironments = {
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  fallthrough: {
    type: "split",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    weights: {
      "key": 7774.3,
      "key1": 5343.5,
    },
    defaultVariantId: "<id>",
  },
  active: true,
  rules: [
    {
      id: "<id>",
      outcome: {
        type: "experiment",
      },
      conditions: [
        {
          lhs: {
            type: "segment",
          },
          cmp: "containsAnyOf",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `reuse`                                                                                  | [models.Reuse](../models/reuse.md)                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targets`                                                                                | Record<string, Record<string, Record<string, [models.Targets](../models/targets.md)[]>>> | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `pausedOutcome`                                                                          | [models.PausedOutcome](../models/pausedoutcome.md)                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fallthrough`                                                                            | *models.Fallthrough*                                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rules`                                                                                  | [models.Rules](../models/rules.md)[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |