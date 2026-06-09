# GetOrCreateDriveRequest

## Example Usage

```typescript
import { GetOrCreateDriveRequest } from "@vercel/sdk/models/getorcreatedriveop.js";

let value: GetOrCreateDriveRequest = {
  name: "workspace",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | Name for the drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). | workspace                                                                                         |
| `teamId`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | The Team identifier to perform the request on behalf of.                                          | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                     |
| `slug`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The Team slug to perform the request on behalf of.                                                | my-team-url-slug                                                                                  |
| `requestBody`                                                                                     | [models.GetOrCreateDriveRequestBody](../models/getorcreatedriverequestbody.md)                    | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |