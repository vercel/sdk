# InviteUserToTeamResponseBody

The member was successfully added to the team

## Example Usage

```typescript
import { InviteUserToTeamResponseBody } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamResponseBody = {
  uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
  username: "john-doe",
  email: "john@user.co",
  role: "MEMBER",
  teamRoles: [
    "MEMBER",
  ],
  teamPermissions: [
    "CreateProject",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uid`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the invited user                                                                 | kr1PsOIzqEL5Xg6M4VZcZosf                                                                   |
| `username`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The username of the invited user                                                           | john-doe                                                                                   |
| `email`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The email of the invited user.                                                             | john@user.co                                                                               |
| `role`                                                                                     | [models.InviteUserToTeamTeamsResponseRole](../models/inviteusertoteamteamsresponserole.md) | :heavy_check_mark:                                                                         | The role used for the invitation                                                           | MEMBER                                                                                     |
| `teamRoles`                                                                                | [models.InviteUserToTeamTeamRoles](../models/inviteusertoteamteamroles.md)[]               | :heavy_minus_sign:                                                                         | The team roles of the user                                                                 | [<br/>"MEMBER"<br/>]                                                                       |
| `teamPermissions`                                                                          | [models.InviteUserToTeamTeamPermissions](../models/inviteusertoteamteampermissions.md)[]   | :heavy_minus_sign:                                                                         | The team permissions of the user                                                           | [<br/>"CreateProject"<br/>]                                                                |