# GetStorageStoresByIdResponseBody

## Example Usage

```typescript
import { GetStorageStoresByIdResponseBody } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdResponseBody = {
  store: {
    projectsMetadata: [
      {
        id: "<id>",
        projectId: "<id>",
        name: "<value>",
        environments: [
          "<value 1>",
        ],
        envVarPrefix: "<value>",
        environmentVariables: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    ],
    usageQuotaExceeded: false,
    status: "limits-exceeded-suspended-store-count",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `store`                                                                    | [models.GetStorageStoresByIdStore](../models/getstoragestoresbyidstore.md) | :heavy_check_mark:                                                         | N/A                                                                        |