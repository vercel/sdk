# GetRepositoryResponseBody

## Example Usage

```typescript
import { GetRepositoryResponseBody } from "@vercel/sdk/models/getrepositoryop.js";

let value: GetRepositoryResponseBody = {
  repository: {
    createdAt: "2026-06-30T10:00:00.000Z",
    id: "repo_a1b2c3d4e5f6",
    name: "my-app",
    projectId: "prj_a1b2c3d4e5f6",
    public: false,
    updatedAt: "2026-06-30T10:00:00.000Z",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `repository`                                       | [models.VcrRepository](../models/vcrrepository.md) | :heavy_check_mark:                                 | A Vercel Container Registry repository.            |