# ListDeploymentCheckRunsRuns

## Example Usage

```typescript
import { ListDeploymentCheckRunsRuns } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsRuns = {
  id: "<id>",
  name: "<value>",
  checkId: "<id>",
  ownerId: "<id>",
  deploymentId: "<id>",
  source: {
    kind: "webhook",
  },
  status: "completed",
  timeout: 2107.35,
  createdAt: 5645.01,
  updatedAt: 9598.27,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `checkId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `ownerId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `source`                                                                                   | *models.ListDeploymentCheckRunsSource*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requires`                                                                                 | [models.ListDeploymentCheckRunsRequires](../models/listdeploymentcheckrunsrequires.md)     | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `blocks`                                                                                   | [models.ListDeploymentCheckRunsBlocks](../models/listdeploymentcheckrunsblocks.md)         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `targets`                                                                                  | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.ListDeploymentCheckRunsStatus](../models/listdeploymentcheckrunsstatus.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `conclusion`                                                                               | [models.ListDeploymentCheckRunsConclusion](../models/listdeploymentcheckrunsconclusion.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `conclusionText`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `externalId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `externalUrl`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `output`                                                                                   | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `timeout`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |