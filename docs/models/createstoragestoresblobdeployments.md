# CreateStorageStoresBlobDeployments

## Example Usage

```typescript
import { CreateStorageStoresBlobDeployments } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobDeployments = {
  actions: [
    {
      environments: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      slug: "<value>",
    },
  ],
  required: true,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `actions`                                                                              | [models.CreateStorageStoresBlobActions](../models/createstoragestoresblobactions.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `required`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |