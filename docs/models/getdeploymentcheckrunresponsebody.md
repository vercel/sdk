# GetDeploymentCheckRunResponseBody

## Example Usage

```typescript
import { GetDeploymentCheckRunResponseBody } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunResponseBody = {
  id: "<id>",
  name: "<value>",
  checkId: "<id>",
  ownerId: "<id>",
  deploymentId: "<id>",
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
  status: "queued",
  timeout: 4990.78,
  createdAt: 5264.34,
  updatedAt: 8738.74,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `checkId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ownerId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deploymentId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `projectId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | *models.GetDeploymentCheckRunSource*                                                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requires`                                                                             | [models.GetDeploymentCheckRunRequires](../models/getdeploymentcheckrunrequires.md)     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `blocks`                                                                               | [models.GetDeploymentCheckRunBlocks](../models/getdeploymentcheckrunblocks.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `targets`                                                                              | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.GetDeploymentCheckRunStatus](../models/getdeploymentcheckrunstatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `conclusion`                                                                           | [models.GetDeploymentCheckRunConclusion](../models/getdeploymentcheckrunconclusion.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `conclusionText`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `externalId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `externalUrl`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `output`                                                                               | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `timeout`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `completedAt`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |