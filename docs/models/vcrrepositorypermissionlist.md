# VcrRepositoryPermissionList

A paginated list of Vercel Container Registry repository permissions.

## Example Usage

```typescript
import { VcrRepositoryPermissionList } from "@vercel/sdk/models/vcrrepositorypermissionlist.js";

let value: VcrRepositoryPermissionList = {
  permissions: [
    {
      createdAt: "2026-06-30T10:00:00.000Z",
      repositoryId: "repo_a1b2c3d4e5f6",
      teamId: "team_a1b2c3d4e5f6",
      teamSlug: "my-team",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `nextCursor`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Cursor to fetch the next page of results, when more are available.       |
| `permissions`                                                            | [models.VcrRepositoryPermission](../models/vcrrepositorypermission.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |