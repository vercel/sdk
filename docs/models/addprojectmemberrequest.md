# AddProjectMemberRequest

## Example Usage

```typescript
import { AddProjectMemberRequest } from "@vercel/sdk/models/addprojectmemberop.js";

let value: AddProjectMemberRequest = {
  idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    uid: "ndlgr43fadlPyCtREAqxxdyFK",
    username: "example",
    email: "entity@example.com",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | The ID or name of the Project.                           | prj_pavWOn1iLObbXLRiwVvzmPrTWyTf                         |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |
| `requestBody`                                            | *models.AddProjectMemberRequestBody*                     | :heavy_check_mark:                                       | N/A                                                      |                                                          |