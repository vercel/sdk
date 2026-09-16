# CreateIntegrationStoreDirectProjectsMetadata

## Example Usage

```typescript
import { CreateIntegrationStoreDirectProjectsMetadata } from "@vercel/sdk/models/createintegrationstoredirectpropertiesintegrationsresponse200uioptions.js";

let value: CreateIntegrationStoreDirectProjectsMetadata = {
  environments: [],
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `deployments`                                                                                          | [models.CreateIntegrationStoreDirectDeployments](../models/createintegrationstoredirectdeployments.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `environments`                                                                                         | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `environmentVariables`                                                                                 | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `envVarPrefix`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `framework`                                                                                            | [models.CreateIntegrationStoreDirectFramework](../models/createintegrationstoredirectframework.md)     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `latestDeployment`                                                                                     | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `makeEnvVarsSensitive`                                                                                 | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |