# ReadAccessGroupResponseBody

## Example Usage

```typescript
import { ReadAccessGroupResponseBody } from "@vercel/sdk/models/readaccessgroupop.js";

let value: ReadAccessGroupResponseBody = {
  accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  createdAt: "1588720733602",
  isDsyncManaged: true,
  membersCount: 5,
  name: "my-access-group",
  projectsCount: 2,
  teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  teamRoles: [
    "DEVELOPER",
    "BILLING",
  ],
  updatedAt: "1588720733602",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accessGroupId`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the access group.                                                                | ag_123a6c5209bc3778245d011443644c8d27dc2c50                                            |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Timestamp in milliseconds when the access group was created.                           | 1588720733602                                                                          |
| `entitlements`                                                                         | [models.ReadAccessGroupEntitlements](../models/readaccessgroupentitlements.md)[]       | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `isDsyncManaged`                                                                       | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `membersCount`                                                                         | *number*                                                                               | :heavy_check_mark:                                                                     | Number of members in the access group.                                                 | 5                                                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The name of this access group.                                                         | my-access-group                                                                        |
| `projectsCount`                                                                        | *number*                                                                               | :heavy_check_mark:                                                                     | Number of projects in the access group.                                                | 2                                                                                      |
| `teamId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the team that this access group belongs to.                                      | team_123a6c5209bc3778245d011443644c8d27dc2c50                                          |
| `teamPermissions`                                                                      | [models.ReadAccessGroupTeamPermissions](../models/readaccessgroupteampermissions.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `teamRoles`                                                                            | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Roles that the team has in the access group.                                           | [<br/>"DEVELOPER",<br/>"BILLING"<br/>]                                                 |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Timestamp in milliseconds when the access group was last updated.                      | 1588720733602                                                                          |