# GetDriveRequest

## Example Usage

```typescript
import { GetDriveRequest } from "@vercel/sdk/models/getdriveop.js";

let value: GetDriveRequest = {
  nameOrId: "workspace",
  projectId: "prj_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nameOrId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The drive name or ID.                                                                                            | workspace                                                                                                        |
| `projectId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The project ID or name associated with the drive. Required unless using a Vercel OIDC token scoped to a project. | prj_abc123                                                                                                       |
| `teamId`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team identifier to perform the request on behalf of.                                                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                                    |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team slug to perform the request on behalf of.                                                               | my-team-url-slug                                                                                                 |