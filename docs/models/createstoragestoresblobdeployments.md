# CreateStorageStoresBlobDeployments

## Example Usage

```typescript
import { CreateStorageStoresBlobDeployments } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobDeployments = {
  required: false,
  actions: [
    {
      slug: "<value>",
      environments: [],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `required`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `actions`                                                                              | [models.CreateStorageStoresBlobActions](../models/createstoragestoresblobactions.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |