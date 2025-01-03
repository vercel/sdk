# CreateAccessGroupProjectRequest

## Example Usage

```typescript
import { CreateAccessGroupProjectRequest } from "@vercel/sdk/models/createaccessgroupprojectop.js";

let value: CreateAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessGroupIdOrName`                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                  |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team slug to perform the request on behalf of.                                             | my-team-url-slug                                                                               |
| `requestBody`                                                                                  | [models.CreateAccessGroupProjectRequestBody](../models/createaccessgroupprojectrequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |