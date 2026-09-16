# TeamLimitedMembership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { TeamLimitedMembership } from "@vercel/sdk/models/teamlimited.js";

let value: TeamLimitedMembership = {
  confirmed: true,
  created: 2766.67,
  createdAt: 9004.58,
  role: "VIEWER_FOR_PLUS",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accessRequestedAt`                                                            | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `confirmed`                                                                    | *true*                                                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `created`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `entitlements`                                                                 | [models.TeamLimitedEntitlements](../models/teamlimitedentitlements.md)[]       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `joinedFrom`                                                                   | [models.TeamLimitedJoinedFrom](../models/teamlimitedjoinedfrom.md)             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `role`                                                                         | [models.TeamLimitedRole](../models/teamlimitedrole.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamPermissions`                                                              | [models.TeamLimitedTeamPermissions](../models/teamlimitedteampermissions.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamRoles`                                                                    | [models.TeamLimitedTeamRoles](../models/teamlimitedteamroles.md)[]             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `uid`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |