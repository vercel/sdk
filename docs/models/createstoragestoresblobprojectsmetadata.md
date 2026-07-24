# CreateStorageStoresBlobProjectsMetadata

## Example Usage

```typescript
import { CreateStorageStoresBlobProjectsMetadata } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobProjectsMetadata = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `framework`                                                                                  | [models.CreateStorageStoresBlobFramework](../models/createstoragestoresblobframework.md)     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `latestDeployment`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `environments`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envVarPrefix`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `environmentVariables`                                                                       | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deployments`                                                                                | [models.CreateStorageStoresBlobDeployments](../models/createstoragestoresblobdeployments.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `makeEnvVarsSensitive`                                                                       | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |