# ListFlagVersionsVersions

## Example Usage

```typescript
import { ListFlagVersionsVersions } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsVersions = {
  id: "<id>",
  revision: 2006.83,
  createdAt: 9041.39,
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
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `createdBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `revision`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.ListFlagVersionsData](../models/listflagversionsdata.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `flagId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `changedEnvironments`                                                    | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.ListFlagVersionsMetadata](../models/listflagversionsmetadata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |