# InviteUserToTeamRequestBody

## Example Usage

```typescript
import { InviteUserToTeamRequestBody } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamRequestBody = {
  email: "john@example.com",
  role: "OWNER",
  projects: [
    {
      projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
      role: "ADMIN",
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `email`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | The email address of the user to invite                                                               | john@example.com                                                                                      |
| `role`                                                                                                | [models.InviteUserToTeamRole](../models/inviteusertoteamrole.md)                                      | :heavy_minus_sign:                                                                                    | The role of the user to invite                                                                        | [<br/>"OWNER",<br/>"MEMBER",<br/>"DEVELOPER",<br/>"SECURITY",<br/>"BILLING",<br/>"VIEWER",<br/>"VIEWER_FOR_PLUS",<br/>"CONTRIBUTOR"<br/>] |
| `projects`                                                                                            | [models.InviteUserToTeamProjects](../models/inviteusertoteamprojects.md)[]                            | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |