# ListAccessGroupProjectsProjects

## Example Usage

```typescript
import { ListAccessGroupProjectsProjects } from "@vercel/sdk/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsProjects = {
  projectId: "<id>",
  role: "PROJECT_VIEWER",
  createdAt: "1739585279282",
  updatedAt: "1746438681197",
  project: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `role`                                                                               | [models.ListAccessGroupProjectsRole](../models/listaccessgroupprojectsrole.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `project`                                                                            | [models.ListAccessGroupProjectsProject](../models/listaccessgroupprojectsproject.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |