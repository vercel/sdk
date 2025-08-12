# TeamLimitedMembership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { TeamLimitedMembership } from "@vercel/sdk/models/teamlimited.js";

let value: TeamLimitedMembership = {
  confirmed: true,
  role: "CONTRIBUTOR",
  createdAt: 9880.38,
  created: 2303.75,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uid`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `entitlements`                                                                 | [models.TeamLimitedEntitlements](../models/teamlimitedentitlements.md)[]       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `confirmed`                                                                    | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `accessRequestedAt`                                                            | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `role`                                                                         | [models.TeamLimitedRole](../models/teamlimitedrole.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamRoles`                                                                    | [models.TeamLimitedTeamRoles](../models/teamlimitedteamroles.md)[]             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamPermissions`                                                              | [models.TeamLimitedTeamPermissions](../models/teamlimitedteampermissions.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `created`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `joinedFrom`                                                                   | [models.TeamLimitedJoinedFrom](../models/teamlimitedjoinedfrom.md)             | :heavy_minus_sign:                                                             | N/A                                                                            |