# VcrRepositoryList

A paginated list of Vercel Container Registry repositories.

## Example Usage

```typescript
import { VcrRepositoryList } from "@vercel/sdk/models/vcrrepositorylist.js";

let value: VcrRepositoryList = {
  repositories: [
    {
      id: "repo_a1b2c3d4e5f6",
      projectId: "prj_a1b2c3d4e5f6",
      name: "my-app",
      createdAt: "2026-06-30T10:00:00.000Z",
      updatedAt: "2026-06-30T10:00:00.000Z",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `repositories`                                                     | [models.VcrRepository](../models/vcrrepository.md)[]               | :heavy_check_mark:                                                 | N/A                                                                |
| `nextCursor`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to fetch the next page of results, when more are available. |