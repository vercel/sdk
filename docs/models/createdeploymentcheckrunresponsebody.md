# CreateDeploymentCheckRunResponseBody

## Example Usage

```typescript
import { CreateDeploymentCheckRunResponseBody } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunResponseBody = {
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
  status: "completed",
  timeout: 1041.5,
  createdAt: 1117.12,
  updatedAt: 4208.98,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `checkId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deploymentId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | *models.CreateDeploymentCheckRunSource*                                                      | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requires`                                                                                   | [models.CreateDeploymentCheckRunRequires](../models/createdeploymentcheckrunrequires.md)     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `blocks`                                                                                     | [models.CreateDeploymentCheckRunBlocks](../models/createdeploymentcheckrunblocks.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `targets`                                                                                    | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [models.CreateDeploymentCheckRunStatus](../models/createdeploymentcheckrunstatus.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `conclusion`                                                                                 | [models.CreateDeploymentCheckRunConclusion](../models/createdeploymentcheckrunconclusion.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `conclusionText`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `externalUrl`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `output`                                                                                     | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `timeout`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `completedAt`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |