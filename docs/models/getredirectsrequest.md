# GetRedirectsRequest

## Example Usage

```typescript
import { GetRedirectsRequest } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsRequest = {
  projectId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `versionId`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `q`                                                      | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `diff`                                                   | *models.Diff*                                            | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `perPage`                                                | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `sortBy`                                                 | [models.SortBy](../models/sortby.md)                     | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `sortOrder`                                              | [models.SortOrder](../models/sortorder.md)               | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |