# FlagEnvironments

## Example Usage

```typescript
import { FlagEnvironments } from "@vercel/sdk/models/flag.js";

let value: FlagEnvironments = {
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
      "key": 5343.5,
      "key1": 3649.27,
      "key2": 6701.22,
    },
  },
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  rules: [
    {
      conditions: [
        {
          cmp: "contains",
          lhs: {
            attribute: "<value>",
            kind: "<value>",
            type: "entity",
          },
        },
      ],
      id: "<id>",
      outcome: {
        base: {
          attribute: "<value>",
          kind: "<value>",
          type: "entity",
        },
        defaultVariantId: "<id>",
        type: "split",
        weights: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fallthrough`                                                                            | *models.Fallthrough*                                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pausedOutcome`                                                                          | [models.PausedOutcome](../models/pausedoutcome.md)                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `reuse`                                                                                  | [models.Reuse](../models/reuse.md)                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `rules`                                                                                  | [models.Rules](../models/rules.md)[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `targets`                                                                                | Record<string, Record<string, Record<string, [models.Targets](../models/targets.md)[]>>> | :heavy_minus_sign:                                                                       | N/A                                                                                      |