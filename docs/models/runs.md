# Runs

## Example Usage

```typescript
import { Runs } from "@vercel/sdk/models/listcheckrunsop.js";

let value: Runs = {
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
  status: "running",
  timeout: 7074.27,
  createdAt: 2242.26,
  updatedAt: 1194.69,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `checkId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `ownerId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `deploymentId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | *models.ListCheckRunsSource*                                           | :heavy_check_mark:                                                     | N/A                                                                    |
| `requires`                                                             | [models.ListCheckRunsRequires](../models/listcheckrunsrequires.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `blocks`                                                               | [models.ListCheckRunsBlocks](../models/listcheckrunsblocks.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `targets`                                                              | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | [models.ListCheckRunsStatus](../models/listcheckrunsstatus.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `conclusion`                                                           | [models.ListCheckRunsConclusion](../models/listcheckrunsconclusion.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `conclusionText`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalId`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalUrl`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `output`                                                               | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `timeout`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `completedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |