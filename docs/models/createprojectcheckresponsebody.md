# CreateProjectCheckResponseBody

## Example Usage

```typescript
import { CreateProjectCheckResponseBody } from "@vercel/sdk/models/createprojectcheckop.js";

let value: CreateProjectCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  isRerequestable: true,
  requires: "build-ready",
  source: {
    kind: "git-provider",
    provider: "bitbucket",
    externalCheckName: "<value>",
  },
  blocks: "deployment-start",
  targets: [],
  sourceKind: "webhook",
  timeout: 1008.16,
  createdAt: 6105.04,
  updatedAt: 9487.23,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `isRerequestable`                                                            | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `requires`                                                                   | [models.CreateProjectCheckRequires](../models/createprojectcheckrequires.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `source`                                                                     | *models.CreateProjectCheckChecksV2Source*                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `blocks`                                                                     | [models.CreateProjectCheckBlocks](../models/createprojectcheckblocks.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `targets`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `sourceKind`                                                                 | [models.SourceKind](../models/sourcekind.md)                                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `sourceIntegrationConfigurationId`                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `timeout`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `disabledAt`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `deletedAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |