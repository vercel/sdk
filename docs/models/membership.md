# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@vercel/sdk/models/team.js";

let value: Membership = {
  confirmed: true,
  created: 5378.67,
  createdAt: 149.12,
  role: "CONTRIBUTOR",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessRequestedAt`                                                                  | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `confirmed`                                                                          | *true*                                                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `entitlements`                                                                       | [models.Entitlements](../models/entitlements.md)[]                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `joinedFrom`                                                                         | [models.JoinedFrom](../models/joinedfrom.md)                                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `role`                                                                               | [models.TeamRole](../models/teamrole.md)                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamPermissions`                                                                    | [models.TeamMembershipTeamPermissions](../models/teammembershipteampermissions.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamRoles`                                                                          | [models.TeamMembershipTeamRoles](../models/teammembershipteamroles.md)[]             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `uid`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |