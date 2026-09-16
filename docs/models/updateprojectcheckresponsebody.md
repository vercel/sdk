# UpdateProjectCheckResponseBody

## Example Usage

```typescript
import { UpdateProjectCheckResponseBody } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckResponseBody = {
  blocks: "deployment-alias",
  createdAt: 4090.37,
  id: "<id>",
  isRerequestable: false,
  name: "<value>",
  ownerId: "<id>",
  projectId: "<id>",
  requires: "deployment-url",
  source: {
    kind: "webhook",
  },
  sourceKind: "webhook",
  targets: [],
  timeout: 9506.92,
  updatedAt: 1065.47,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `blocks`                                                                                     | [models.UpdateProjectCheckChecksV2Blocks](../models/updateprojectcheckchecksv2blocks.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deletedAt`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `isRerequestable`                                                                            | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requires`                                                                                   | [models.UpdateProjectCheckChecksV2Requires](../models/updateprojectcheckchecksv2requires.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `source`                                                                                     | *models.UpdateProjectCheckSource*                                                            | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sourceIntegrationConfigurationId`                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `sourceKind`                                                                                 | [models.UpdateProjectCheckSourceKind](../models/updateprojectchecksourcekind.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `targets`                                                                                    | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `timeout`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |