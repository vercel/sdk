# UpdateProjectCheckResponseBody

## Example Usage

```typescript
import { UpdateProjectCheckResponseBody } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  isRerequestable: true,
  requires: "deployment-url",
  source: {
    kind: "git-provider",
    provider: "gitlab",
    externalCheckName: "<value>",
  },
  blocks: "build-start",
  targets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  sourceKind: "integration",
  timeout: 9506.92,
  createdAt: 1065.47,
  updatedAt: 2136.12,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `isRerequestable`                                                                            | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requires`                                                                                   | [models.UpdateProjectCheckChecksV2Requires](../models/updateprojectcheckchecksv2requires.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `source`                                                                                     | *models.UpdateProjectCheckSource*                                                            | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `blocks`                                                                                     | [models.UpdateProjectCheckChecksV2Blocks](../models/updateprojectcheckchecksv2blocks.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `targets`                                                                                    | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sourceKind`                                                                                 | [models.UpdateProjectCheckSourceKind](../models/updateprojectchecksourcekind.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sourceIntegrationConfigurationId`                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `timeout`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deletedAt`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |