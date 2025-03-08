# UpdateIntegrationDeploymentActionRequest

## Example Usage

```typescript
import { UpdateIntegrationDeploymentActionRequest } from "@vercel/sdk/models/updateintegrationdeploymentactionop.js";

let value: UpdateIntegrationDeploymentActionRequest = {
  deploymentId: "<id>",
  integrationConfigurationId: "<id>",
  resourceId: "<id>",
  action: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `deploymentId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationConfigurationId`                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resourceId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `action`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requestBody`                                                                                                    | [models.UpdateIntegrationDeploymentActionRequestBody](../models/updateintegrationdeploymentactionrequestbody.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |