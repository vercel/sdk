# GetProjectCheckResponseBody

## Example Usage

```typescript
import { GetProjectCheckResponseBody } from "@vercel/sdk/models/getprojectcheckop.js";

let value: GetProjectCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  isRerequestable: true,
  requires: "build-ready",
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
  blocks: "deployment-alias",
  targets: [],
  sourceKind: "git-provider",
  timeout: 8070.13,
  createdAt: 6510.57,
  updatedAt: 6146.92,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `ownerId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `isRerequestable`                                                          | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `requires`                                                                 | [models.GetProjectCheckRequires](../models/getprojectcheckrequires.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `source`                                                                   | *models.GetProjectCheckSource*                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `blocks`                                                                   | [models.GetProjectCheckBlocks](../models/getprojectcheckblocks.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `targets`                                                                  | *string*[]                                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `sourceKind`                                                               | [models.GetProjectCheckSourceKind](../models/getprojectchecksourcekind.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `sourceIntegrationConfigurationId`                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeout`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `createdAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updatedAt`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `deletedAt`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |