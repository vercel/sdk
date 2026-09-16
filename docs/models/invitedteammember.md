# InvitedTeamMember

The member was successfully added to the team.

## Example Usage

```typescript
import { InvitedTeamMember } from "@vercel/sdk/models/invitedteammember.js";

let value: InvitedTeamMember = {
  email: "john@user.co",
  role: "MEMBER",
  teamPermissions: [
    "CreateProject",
  ],
  teamRoles: [
    "MEMBER",
  ],
  uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
  username: "john-doe",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `email`                                                  | *string*                                                 | :heavy_check_mark:                                       | The email of the invited user.                           | john@user.co                                             |
| `role`                                                   | [models.Role](../models/role.md)                         | :heavy_check_mark:                                       | The role used for the invitation                         | MEMBER                                                   |
| `teamPermissions`                                        | [models.TeamPermissions](../models/teampermissions.md)[] | :heavy_minus_sign:                                       | The team permissions of the user                         | [<br/>"CreateProject"<br/>]                              |
| `teamRoles`                                              | [models.TeamRoles](../models/teamroles.md)[]             | :heavy_minus_sign:                                       | The team roles of the user                               | [<br/>"MEMBER"<br/>]                                     |
| `uid`                                                    | *string*                                                 | :heavy_check_mark:                                       | The ID of the invited user                               | kr1PsOIzqEL5Xg6M4VZcZosf                                 |
| `username`                                               | *string*                                                 | :heavy_check_mark:                                       | The username of the invited user                         | john-doe                                                 |