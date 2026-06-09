# ListDeploymentCheckRunsRuns1

Check run backed by a project-level `check` definition.

## Example Usage

```typescript
import { ListDeploymentCheckRunsRuns1 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsRuns1 = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  deploymentId: "<id>",
  status: "completed",
  timeout: 1658.76,
  createdAt: 3693.18,
  updatedAt: 9022.83,
  checkId: "<id>",
  source: {
    kind: "git-provider",
    provider: "github",
    externalCheckName: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deploymentId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `requires`                                                                                         | [models.ListDeploymentCheckRunsRunsRequires](../models/listdeploymentcheckrunsrunsrequires.md)     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `blocks`                                                                                           | [models.ListDeploymentCheckRunsRunsBlocks](../models/listdeploymentcheckrunsrunsblocks.md)         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `targets`                                                                                          | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.ListDeploymentCheckRunsRunsStatus](../models/listdeploymentcheckrunsrunsstatus.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conclusion`                                                                                       | [models.ListDeploymentCheckRunsRunsConclusion](../models/listdeploymentcheckrunsrunsconclusion.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `conclusionText`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `externalUrl`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `output`                                                                                           | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `timeout`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `checkId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | *models.ListDeploymentCheckRunsRunsSource*                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |