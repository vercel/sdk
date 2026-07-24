# CreateStorageStoresBlobResponseBody

## Example Usage

```typescript
import { CreateStorageStoresBlobResponseBody } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobResponseBody = {
  store: {
    projectsMetadata: [
      {
        id: "<id>",
        projectId: "<id>",
        name: "<value>",
        environments: [],
        envVarPrefix: "<value>",
        environmentVariables: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    ],
    usageQuotaExceeded: true,
    status: "suspended",
    size: 4055.56,
    count: 9414.98,
    region: "cle1",
    isTokenExpired: true,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `store`                                                                          | [models.CreateStorageStoresBlobStore](../models/createstoragestoresblobstore.md) | :heavy_check_mark:                                                               | N/A                                                                              |