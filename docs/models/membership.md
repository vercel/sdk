# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@vercel/sdk/models/team.js";

let value: Membership = {
  confirmed: false,
  role: "OWNER",
  createdAt: 2058.4,
  created: 8507.09,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uid`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `entitlements`                                                                       | [models.Entitlements](../models/entitlements.md)[]                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `confirmed`                                                                          | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `accessRequestedAt`                                                                  | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `role`                                                                               | [models.TeamRole](../models/teamrole.md)                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `teamRoles`                                                                          | [models.TeamMembershipTeamRoles](../models/teammembershipteamroles.md)[]             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamPermissions`                                                                    | [models.TeamMembershipTeamPermissions](../models/teammembershipteampermissions.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `joinedFrom`                                                                         | [models.JoinedFrom](../models/joinedfrom.md)                                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |