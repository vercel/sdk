# CreateAccessGroupProjectResponseBody

## Example Usage

```typescript
import { CreateAccessGroupProjectResponseBody } from "@vercel/sdk/models/createaccessgroupprojectop.js";

let value: CreateAccessGroupProjectResponseBody = {
  teamId: "<id>",
  accessGroupId: "<id>",
  projectId: "<id>",
  role: "PROJECT_VIEWER",
  createdAt: "1724144962045",
  updatedAt: "1746615825787",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `accessGroupId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `role`                                                                                                   | [models.CreateAccessGroupProjectAccessGroupsRole](../models/createaccessgroupprojectaccessgroupsrole.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |