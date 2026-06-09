# ListFlagVersionsResponseBody

## Example Usage

```typescript
import { ListFlagVersionsResponseBody } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsResponseBody = {
  versions: [
    {
      data: {
        variants: [],
        environments: {
          "key": {
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
                "key": 1241.07,
              },
              defaultVariantId: "<id>",
            },
            active: true,
            rules: [
              {
                id: "<id>",
                outcome: {
                  type: "rollout",
                  base: {
                    type: "entity",
                    kind: "<value>",
                    attribute: "<value>",
                  },
                  defaultVariantId: "<id>",
                  startTimestamp: 3373.54,
                  rollFromVariantId: "<id>",
                  rollToVariantId: "<id>",
                  slots: [],
                },
                conditions: [
                  {
                    lhs: {
                      type: "segment",
                    },
                    cmp: "gt",
                  },
                ],
              },
            ],
          },
        },
        seed: 7932.89,
        state: "active",
      },
      id: "<id>",
      revision: 9589.96,
      createdAt: 3078.07,
      flagId: "<id>",
      changedEnvironments: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  pagination: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `versions`                                                                   | [models.ListFlagVersionsVersions](../models/listflagversionsversions.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [models.ListFlagVersionsPagination](../models/listflagversionspagination.md) | :heavy_check_mark:                                                           | N/A                                                                          |