# AddRepositoryPermissionResponseBody

## Example Usage

```typescript
import { AddRepositoryPermissionResponseBody } from "@vercel/sdk/models/addrepositorypermissionop.js";

let value: AddRepositoryPermissionResponseBody = {
  permission: {
    repositoryId: "repo_a1b2c3d4e5f6",
    teamId: "team_a1b2c3d4e5f6",
    teamSlug: "my-team",
    createdAt: "2026-06-30T10:00:00.000Z",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `permission`                                                           | [models.VcrRepositoryPermission](../models/vcrrepositorypermission.md) | :heavy_check_mark:                                                     | A team's access grant to a Vercel Container Registry repository.       |