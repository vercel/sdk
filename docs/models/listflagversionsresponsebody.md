# ListFlagVersionsResponseBody

## Example Usage

```typescript
import { ListFlagVersionsResponseBody } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsResponseBody = {
  pagination: {},
  versions: [
    {
      changedEnvironments: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      createdAt: 3078.07,
      flagId: "<id>",
      id: "<id>",
      revision: 5189.15,
      data: {
        environments: {},
        seed: 1241.07,
        state: "active",
        variants: [
          {
            id: "<id>",
            value: 711.35,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `pagination`                                                                 | [models.ListFlagVersionsPagination](../models/listflagversionspagination.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `versions`                                                                   | [models.ListFlagVersionsVersions](../models/listflagversionsversions.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |