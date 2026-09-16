# CreateProjectCheckResponseBody

## Example Usage

```typescript
import { CreateProjectCheckResponseBody } from "@vercel/sdk/models/createprojectcheckop.js";

let value: CreateProjectCheckResponseBody = {
  blocks: "deployment-alias",
  createdAt: 1695.08,
  id: "<id>",
  isRerequestable: false,
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  requires: "none",
  source: {
    kind: "webhook",
  },
  sourceKind: "git-provider",
  targets: [
    "<value 1>",
  ],
  timeout: 1008.16,
  updatedAt: 6105.04,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `blocks`                                                                     | [models.CreateProjectCheckBlocks](../models/createprojectcheckblocks.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `deletedAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `isRerequestable`                                                            | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `requires`                                                                   | [models.CreateProjectCheckRequires](../models/createprojectcheckrequires.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `source`                                                                     | *models.CreateProjectCheckChecksV2Source*                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `sourceIntegrationConfigurationId`                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sourceKind`                                                                 | [models.SourceKind](../models/sourcekind.md)                                 | :heavy_check_mark:                                                           | N/A                                                                          |
| `targets`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `timeout`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |