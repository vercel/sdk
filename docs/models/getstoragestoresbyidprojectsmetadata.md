# GetStorageStoresByIdProjectsMetadata

## Example Usage

```typescript
import { GetStorageStoresByIdProjectsMetadata } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdProjectsMetadata = {
  environments: [
    "<value 1>",
    "<value 2>",
  ],
  environmentVariables: [
    "<value 1>",
  ],
  envVarPrefix: "<value>",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `deployments`                                                                          | [models.GetStorageStoresByIdDeployments](../models/getstoragestoresbyiddeployments.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `environments`                                                                         | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `environmentVariables`                                                                 | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `envVarPrefix`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `framework`                                                                            | [models.GetStorageStoresByIdFramework](../models/getstoragestoresbyidframework.md)     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `latestDeployment`                                                                     | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `makeEnvVarsSensitive`                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `projectId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |