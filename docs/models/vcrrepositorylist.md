# VcrRepositoryList

A paginated list of Vercel Container Registry repositories.

## Example Usage

```typescript
import { VcrRepositoryList } from "@vercel/sdk/models/vcrrepositorylist.js";

let value: VcrRepositoryList = {
  repositories: [
    {
      createdAt: "2026-06-30T10:00:00.000Z",
      id: "repo_a1b2c3d4e5f6",
      name: "my-app",
      projectId: "prj_a1b2c3d4e5f6",
      public: false,
      updatedAt: "2026-06-30T10:00:00.000Z",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `nextCursor`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to fetch the next page of results, when more are available. |
| `repositories`                                                     | [models.VcrRepository](../models/vcrrepository.md)[]               | :heavy_check_mark:                                                 | N/A                                                                |