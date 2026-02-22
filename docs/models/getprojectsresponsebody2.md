# GetProjectsResponseBody2

## Example Usage

```typescript
import { GetProjectsResponseBody2 } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: GetProjectsResponseBody2 = {
  projects: [],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `projects`                                                         | [models.ResponseBodyProjects](../models/responsebodyprojects.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | *models.GetProjectsResponseBodyPagination*                         | :heavy_check_mark:                                                 | N/A                                                                |