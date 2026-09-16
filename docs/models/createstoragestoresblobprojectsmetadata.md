# CreateStorageStoresBlobProjectsMetadata

## Example Usage

```typescript
import { CreateStorageStoresBlobProjectsMetadata } from "@vercel/sdk/models/createstoragestoresblobop.js";

let value: CreateStorageStoresBlobProjectsMetadata = {
  environments: [
    "<value 1>",
  ],
  environmentVariables: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  envVarPrefix: "<value>",
  id: "<id>",
  name: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `deployments`                                                                                | [models.CreateStorageStoresBlobDeployments](../models/createstoragestoresblobdeployments.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `environments`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `environmentVariables`                                                                       | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envVarPrefix`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `framework`                                                                                  | [models.CreateStorageStoresBlobFramework](../models/createstoragestoresblobframework.md)     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `latestDeployment`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `makeEnvVarsSensitive`                                                                       | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |