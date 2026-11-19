# ListOrganizationDsyncGroupsRequest

## Example Usage

```typescript
import { ListOrganizationDsyncGroupsRequest } from "@vercel/sdk/models/listorganizationdsyncgroupsop.js";

let value: ListOrganizationDsyncGroupsRequest = {
  organizationId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `organizationId`                                         | *string*                                                 | :heavy_check_mark:                                       | The ID of the organization.                              |                                                          |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Pagination cursor.                                       |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Number of groups to return.                              |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |