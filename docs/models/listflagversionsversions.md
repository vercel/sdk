# ListFlagVersionsVersions

## Example Usage

```typescript
import { ListFlagVersionsVersions } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsVersions = {
  changedEnvironments: [],
  createdAt: 9041.39,
  flagId: "<id>",
  id: "<id>",
  revision: 5771.97,
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `changedEnvironments`                                                    | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `flagId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `revision`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.ListFlagVersionsData](../models/listflagversionsdata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.ListFlagVersionsMetadata](../models/listflagversionsmetadata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |