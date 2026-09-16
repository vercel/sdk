# Runs2

Vercel CI check run without a parent `check` (no `checkId` field).

## Example Usage

```typescript
import { Runs2 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: Runs2 = {
  createdAt: 4265.2,
  deploymentId: "<id>",
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  status: "running",
  timeout: 7213.59,
  updatedAt: 4371.74,
  source: {
    origin: "platform",
    subKind: "vercel-ci-sentinel",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `blocks`                                                                   | [models.ListCheckRunsRunsBlocks](../models/listcheckrunsrunsblocks.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `completedAt`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `conclusion`                                                               | [models.RunsConclusion](../models/runsconclusion.md)                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `conclusionText`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `deploymentId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `externalId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `externalUrl`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `output`                                                                   | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ownerId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `requires`                                                                 | [models.ListCheckRunsRunsRequires](../models/listcheckrunsrunsrequires.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | [models.ListCheckRunsRunsStatus](../models/listcheckrunsrunsstatus.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `targets`                                                                  | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeout`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `source`                                                                   | *models.ListCheckRunsRunsSource*                                           | :heavy_check_mark:                                                         | N/A                                                                        |