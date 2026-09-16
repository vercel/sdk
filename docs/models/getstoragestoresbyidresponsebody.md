# GetStorageStoresByIdResponseBody

## Example Usage

```typescript
import { GetStorageStoresByIdResponseBody } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdResponseBody = {
  store: {
    projectsMetadata: [
      {
        environments: [
          "<value 1>",
        ],
        environmentVariables: [
          "<value 1>",
          "<value 2>",
        ],
        envVarPrefix: "<value>",
        id: "<id>",
        name: "<value>",
        projectId: "<id>",
      },
    ],
    status: "suspended",
    usageQuotaExceeded: false,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `store`                                                                    | [models.GetStorageStoresByIdStore](../models/getstoragestoresbyidstore.md) | :heavy_check_mark:                                                         | N/A                                                                        |