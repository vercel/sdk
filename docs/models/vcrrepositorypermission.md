# VcrRepositoryPermission

A team's access grant to a Vercel Container Registry repository.

## Example Usage

```typescript
import { VcrRepositoryPermission } from "@vercel/sdk/models/vcrrepositorypermission.js";

let value: VcrRepositoryPermission = {
  repositoryId: "repo_a1b2c3d4e5f6",
  teamId: "team_a1b2c3d4e5f6",
  teamSlug: "my-team",
  createdAt: "2026-06-30T10:00:00.000Z",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `repositoryId`                                                   | *string*                                                         | :heavy_check_mark:                                               | Identifier of the repository the permission grants access to.    | repo_a1b2c3d4e5f6                                                |
| `teamId`                                                         | *string*                                                         | :heavy_check_mark:                                               | Identifier of the team that is granted access to the repository. | team_a1b2c3d4e5f6                                                |
| `teamSlug`                                                       | *string*                                                         | :heavy_check_mark:                                               | Slug of the team that is granted access to the repository.       | my-team                                                          |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | ISO 8601 timestamp of when the permission was created.           | 2026-06-30T10:00:00.000Z                                         |