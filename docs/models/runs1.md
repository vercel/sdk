# Runs1

Check run backed by a project-level `check` definition.

## Example Usage

```typescript
import { Runs1 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: Runs1 = {
  createdAt: 4020.09,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "completed",
  timeout: 8886.43,
  updatedAt: 5816.3,
  checkId: "<id>",
  source: {
    integrationConfigurationId: "<id>",
    integrationId: "<id>",
    kind: "integration",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `blocks`                                                                       | [models.RunsBlocks](../models/runsblocks.md)                                   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `completedAt`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `conclusion`                                                                   | [models.ListCheckRunsRunsConclusion](../models/listcheckrunsrunsconclusion.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `conclusionText`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deploymentId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalUrl`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `output`                                                                       | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `ownerId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `requires`                                                                     | [models.RunsRequires](../models/runsrequires.md)                               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `status`                                                                       | [models.RunsStatus](../models/runsstatus.md)                                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `targets`                                                                      | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `timeout`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `checkId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *models.RunsSource*                                                            | :heavy_check_mark:                                                             | N/A                                                                            |