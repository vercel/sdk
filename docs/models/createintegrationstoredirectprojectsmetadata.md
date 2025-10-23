# CreateIntegrationStoreDirectProjectsMetadata

## Example Usage

```typescript
import { CreateIntegrationStoreDirectProjectsMetadata } from "@vercel/sdk/models/createintegrationstoredirectop.js";

let value: CreateIntegrationStoreDirectProjectsMetadata = {
  id: "<id>",
  projectId: "<id>",
  name: "<value>",
  environments: [],
  envVarPrefix: "<value>",
  environmentVariables: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `framework`                                                                                                | [models.CreateIntegrationStoreDirectFramework](../models/createintegrationstoredirectframework.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `latestDeployment`                                                                                         | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `environments`                                                                                             | [models.CreateIntegrationStoreDirectEnvironments](../models/createintegrationstoredirectenvironments.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `envVarPrefix`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `environmentVariables`                                                                                     | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deployments`                                                                                              | [models.CreateIntegrationStoreDirectDeployments](../models/createintegrationstoredirectdeployments.md)     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |