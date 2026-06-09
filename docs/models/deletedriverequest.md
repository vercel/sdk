# DeleteDriveRequest

## Example Usage

```typescript
import { DeleteDriveRequest } from "@vercel/sdk/models/deletedriveop.js";

let value: DeleteDriveRequest = {
  name: "workspace",
  projectId: "prj_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Name for the drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores).                | workspace                                                                                                        |
| `projectId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The project ID or name associated with the drive. Required unless using a Vercel OIDC token scoped to a project. | prj_abc123                                                                                                       |
| `teamId`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team identifier to perform the request on behalf of.                                                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                                    |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team slug to perform the request on behalf of.                                                               | my-team-url-slug                                                                                                 |