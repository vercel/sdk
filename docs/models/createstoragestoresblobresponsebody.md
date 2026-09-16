# CreateStorageStoresBlobResponseBody

## Example Usage

```typescript
import { CreateStorageStoresBlobResponseBody } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobResponseBody = {
  store: {
    projectsMetadata: [
      {
        environments: [],
        environmentVariables: [],
        envVarPrefix: "<value>",
        id: "<id>",
        name: "<value>",
        projectId: "<id>",
      },
    ],
    status: "limits-exceeded-suspended-store-count",
    usageQuotaExceeded: false,
    count: 4055.56,
    isTokenExpired: false,
    region: "cle1",
    size: 4373.28,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `store`                                                                          | [models.CreateStorageStoresBlobStore](../models/createstoragestoresblobstore.md) | :heavy_check_mark:                                                               | N/A                                                                              |