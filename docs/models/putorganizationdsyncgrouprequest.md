# PutOrganizationDsyncGroupRequest

## Example Usage

```typescript
import { PutOrganizationDsyncGroupRequest } from "@vercel/sdk/models/putorganizationdsyncgroupop.js";

let value: PutOrganizationDsyncGroupRequest = {
  organizationId: "<id>",
  groupId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ifMatch`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `ifNoneMatch`                                                                                    | *"*"*                                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `groupId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Team identifier to perform the request on behalf of.                                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                    |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Team slug to perform the request on behalf of.                                               | my-team-url-slug                                                                                 |
| `requestBody`                                                                                    | [models.PutOrganizationDsyncGroupRequestBody](../models/putorganizationdsyncgrouprequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |