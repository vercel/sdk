# ListDeploymentCheckRunsRuns1

Check run backed by a project-level `check` definition.

## Example Usage

```typescript
import { ListDeploymentCheckRunsRuns1 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsRuns1 = {
  createdAt: 1369.39,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "completed",
  timeout: 3693.18,
  updatedAt: 9022.83,
  checkId: "<id>",
  source: {
    externalCheckName: "<value>",
    kind: "git-provider",
    provider: "github",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `blocks`                                                                                           | [models.ListDeploymentCheckRunsRunsBlocks](../models/listdeploymentcheckrunsrunsblocks.md)         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `conclusion`                                                                                       | [models.ListDeploymentCheckRunsRunsConclusion](../models/listdeploymentcheckrunsrunsconclusion.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `conclusionText`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deploymentId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `externalUrl`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `output`                                                                                           | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `requires`                                                                                         | [models.ListDeploymentCheckRunsRunsRequires](../models/listdeploymentcheckrunsrunsrequires.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.ListDeploymentCheckRunsRunsStatus](../models/listdeploymentcheckrunsrunsstatus.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `targets`                                                                                          | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `timeout`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `checkId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *models.ListDeploymentCheckRunsRunsSource*                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |