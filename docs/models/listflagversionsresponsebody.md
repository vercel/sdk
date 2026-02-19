# ListFlagVersionsResponseBody

## Example Usage

```typescript
import { ListFlagVersionsResponseBody } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsResponseBody = {
  versions: [
    {
      id: "<id>",
      revision: 9589.96,
      createdAt: 3078.07,
      data: {
        variants: [
          {
            value: "<value>",
            id: "<id>",
          },
        ],
        environments: {},
        seed: 1241.07,
        state: "active",
      },
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