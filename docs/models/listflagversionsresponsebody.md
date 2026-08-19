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
      flagId: "<id>",
      changedEnvironments: [
        "<value 1>",
        "<value 2>",
      ],
      data: {
        variants: [],
        environments: {},
        seed: 2916.52,
        state: "archived",
      },
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