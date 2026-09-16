# Checks

## Example Usage

```typescript
import { Checks } from "@vercel/sdk/models/listprojectchecksop.js";

let value: Checks = {
  blocks: "deployment-alias",
  createdAt: 6008.17,
  id: "<id>",
  isRerequestable: true,
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  requires: "deployment-url",
  source: {
    externalCheckName: "<value>",
    kind: "git-provider",
    provider: "github",
  },
  sourceKind: "vercel",
  targets: [
    "<value 1>",
  ],
  timeout: 4138.18,
  updatedAt: 4905.95,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `blocks`                                                                       | [models.ListProjectChecksBlocks](../models/listprojectchecksblocks.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deletedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isRerequestable`                                                              | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `requires`                                                                     | [models.ListProjectChecksRequires](../models/listprojectchecksrequires.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `source`                                                                       | *models.ListProjectChecksSource*                                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `sourceIntegrationConfigurationId`                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sourceKind`                                                                   | [models.ListProjectChecksSourceKind](../models/listprojectcheckssourcekind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `targets`                                                                      | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `timeout`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |