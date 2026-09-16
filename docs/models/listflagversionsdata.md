# ListFlagVersionsData

## Example Usage

```typescript
import { ListFlagVersionsData } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsData = {
  environments: {
    "key": {
      active: true,
      fallthrough: {
        base: {
          attribute: "<value>",
          kind: "<value>",
          type: "entity",
        },
        defaultVariantId: "<id>",
        rollFromVariantId: "<id>",
        rollToVariantId: "<id>",
        slots: [],
        startTimestamp: 3353.29,
        type: "rollout",
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
    },
  },
  seed: 2298.63,
  state: "active",
  variants: [
    {
      id: "<id>",
      value: 711.35,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `environments`                                                                                   | Record<string, [models.ListFlagVersionsEnvironments](../models/listflagversionsenvironments.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `maintainerIds`                                                                                  | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `permanent`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `seed`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `state`                                                                                          | [models.ListFlagVersionsState](../models/listflagversionsstate.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tags`                                                                                           | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `variants`                                                                                       | [models.ListFlagVersionsVariants](../models/listflagversionsvariants.md)[]                       | :heavy_check_mark:                                                                               | N/A                                                                                              |