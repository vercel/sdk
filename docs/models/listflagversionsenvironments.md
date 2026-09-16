# ListFlagVersionsEnvironments

## Example Usage

```typescript
import { ListFlagVersionsEnvironments } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsEnvironments = {
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
      "key": 3448.07,
      "key1": 1140.18,
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
          cmp: "gt",
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
        rollFromVariantId: "<id>",
        rollToVariantId: "<id>",
        slots: [],
        startTimestamp: 7374.95,
        type: "rollout",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                 | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `fallthrough`                                                                                                            | *models.ListFlagVersionsFallthrough*                                                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `pausedOutcome`                                                                                                          | [models.ListFlagVersionsPausedOutcome](../models/listflagversionspausedoutcome.md)                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `reuse`                                                                                                                  | [models.ListFlagVersionsReuse](../models/listflagversionsreuse.md)                                                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `revision`                                                                                                               | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `rules`                                                                                                                  | [models.ListFlagVersionsRules](../models/listflagversionsrules.md)[]                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `targets`                                                                                                                | Record<string, Record<string, Record<string, [models.ListFlagVersionsTargets](../models/listflagversionstargets.md)[]>>> | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |