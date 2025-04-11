# InviteUserToTeamResponseBody2

## Example Usage

```typescript
import { InviteUserToTeamResponseBody2 } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamResponseBody2 = {
  uid: "<id>",
  username: "Rodrick3",
  role: "SECURITY",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `username`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [models.InviteUserToTeamResponseBodyRole](../models/inviteusertoteamresponsebodyrole.md)                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `teamRoles`                                                                                                      | [models.InviteUserToTeamResponseBodyTeamRoles](../models/inviteusertoteamresponsebodyteamroles.md)[]             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `teamPermissions`                                                                                                | [models.InviteUserToTeamResponseBodyTeamPermissions](../models/inviteusertoteamresponsebodyteampermissions.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |