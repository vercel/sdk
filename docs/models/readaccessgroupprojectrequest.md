# ReadAccessGroupProjectRequest

## Example Usage

```typescript
import { ReadAccessGroupProjectRequest } from "@vercel/sdk/models/readaccessgroupprojectop.js";

let value: ReadAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accessGroupIdOrName`                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | prj_ndlgr43fadlPyCtREAqxxdyFK                            |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |