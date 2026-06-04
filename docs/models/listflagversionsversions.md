# ListFlagVersionsVersions

## Example Usage

```typescript
import { ListFlagVersionsVersions } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsVersions = {
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
                cmp: "gte",
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
  revision: 4143.51,
  createdAt: 2226.55,
  flagId: "<id>",
  changedEnvironments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `createdBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `data`                                                                   | [models.ListFlagVersionsData](../models/listflagversionsdata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `revision`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `flagId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `changedEnvironments`                                                    | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.ListFlagVersionsMetadata](../models/listflagversionsmetadata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |