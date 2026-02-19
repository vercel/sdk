# Checks

## Example Usage

```typescript
import { Checks } from "@vercel/sdk/models/listprojectchecksop.js";

let value: Checks = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  isRerequestable: true,
  requires: "deployment-url",
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
  blocks: "deployment-start",
  targets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  sourceKind: "webhook",
  timeout: 7230.69,
  createdAt: 4176.53,
  updatedAt: 4138.18,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isRerequestable`                                                              | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `requires`                                                                     | [models.ListProjectChecksRequires](../models/listprojectchecksrequires.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *models.ListProjectChecksSource*                                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `blocks`                                                                       | [models.ListProjectChecksBlocks](../models/listprojectchecksblocks.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `targets`                                                                      | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `sourceKind`                                                                   | [models.ListProjectChecksSourceKind](../models/listprojectcheckssourcekind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `sourceIntegrationConfigurationId`                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `timeout`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deletedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |