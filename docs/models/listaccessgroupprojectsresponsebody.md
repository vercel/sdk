# ListAccessGroupProjectsResponseBody

## Example Usage

```typescript
import { ListAccessGroupProjectsResponseBody } from "@vercel/sdk/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsResponseBody = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_VIEWER",
      createdAt: "1718799275107",
      updatedAt: "1743625389976",
      project: {},
    },
  ],
  pagination: {
    count: 3154.28,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projects`                                                                                 | [models.ListAccessGroupProjectsProjects](../models/listaccessgroupprojectsprojects.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.ListAccessGroupProjectsPagination](../models/listaccessgroupprojectspagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |