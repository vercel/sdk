# ListAccessGroupProjectsProjects

## Example Usage

```typescript
import { ListAccessGroupProjectsProjects } from "@vercel/sdk/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsProjects = {
  projectId: "<id>",
  role: "PROJECT_VIEWER",
  createdAt: "1739065768498",
  updatedAt: "1745919170414",
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