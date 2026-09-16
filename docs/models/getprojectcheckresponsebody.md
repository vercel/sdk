# GetProjectCheckResponseBody

## Example Usage

```typescript
import { GetProjectCheckResponseBody } from "@vercel/sdk/models/getprojectcheckop.js";

let value: GetProjectCheckResponseBody = {
  blocks: "build-start",
  createdAt: 2071.93,
  id: "<id>",
  isRerequestable: true,
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  requires: "deployment-url",
  source: {
    integrationConfigurationId: "<id>",
    integrationId: "<id>",
    kind: "integration",
  },
  sourceKind: "vercel",
  targets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  timeout: 6510.57,
  updatedAt: 6146.92,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `blocks`                                                                   | [models.GetProjectCheckBlocks](../models/getprojectcheckblocks.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `deletedAt`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `isRerequestable`                                                          | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `ownerId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `requires`                                                                 | [models.GetProjectCheckRequires](../models/getprojectcheckrequires.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `source`                                                                   | *models.GetProjectCheckSource*                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `sourceIntegrationConfigurationId`                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sourceKind`                                                               | [models.GetProjectCheckSourceKind](../models/getprojectchecksourcekind.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targets`                                                                  | *string*[]                                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `timeout`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |