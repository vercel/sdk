# GetStorageStoresByIdProjectsMetadata

## Example Usage

```typescript
import { GetStorageStoresByIdProjectsMetadata } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdProjectsMetadata = {
  id: "<id>",
  projectId: "<id>",
  name: "<value>",
  environments: [
    "<value 1>",
    "<value 2>",
  ],
  envVarPrefix: "<value>",
  environmentVariables: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `projectId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `framework`                                                                            | [models.GetStorageStoresByIdFramework](../models/getstoragestoresbyidframework.md)     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `latestDeployment`                                                                     | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `environments`                                                                         | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `envVarPrefix`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `environmentVariables`                                                                 | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deployments`                                                                          | [models.GetStorageStoresByIdDeployments](../models/getstoragestoresbyiddeployments.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `makeEnvVarsSensitive`                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |