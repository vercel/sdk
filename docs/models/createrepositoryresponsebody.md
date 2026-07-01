# CreateRepositoryResponseBody

## Example Usage

```typescript
import { CreateRepositoryResponseBody } from "@vercel/sdk/models/createrepositoryop.js";

let value: CreateRepositoryResponseBody = {
  repository: {
    id: "repo_a1b2c3d4e5f6",
    projectId: "prj_a1b2c3d4e5f6",
    name: "my-app",
    createdAt: "2026-06-30T10:00:00.000Z",
    updatedAt: "2026-06-30T10:00:00.000Z",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `repository`                                       | [models.VcrRepository](../models/vcrrepository.md) | :heavy_check_mark:                                 | A Vercel Container Registry repository.            |