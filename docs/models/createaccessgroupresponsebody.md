# CreateAccessGroupResponseBody

## Example Usage

```typescript
import { CreateAccessGroupResponseBody } from "@vercel/sdk/models/createaccessgroupop.js";

let value: CreateAccessGroupResponseBody = {
  accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  createdAt: "1588720733602",
  entitlements: [],
  membersCount: 6736.32,
  name: "my-access-group",
  projectsCount: 8507.33,
  teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  teamPermissions: [
    "CreateProject",
  ],
  teamRoles: [
    "DEVELOPER",
    "BILLING",
  ],
  updatedAt: "1588720733602",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessGroupId`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the access group.                                                              | ag_123a6c5209bc3778245d011443644c8d27dc2c50                                          |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Timestamp in milliseconds when the access group was created.                         | 1588720733602                                                                        |
| `entitlements`                                                                       | [models.CreateAccessGroupEntitlements](../models/createaccessgroupentitlements.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `membersCount`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The name of this access group.                                                       | my-access-group                                                                      |
| `projectsCount`                                                                      | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `teamId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the team that this access group belongs to.                                    | team_123a6c5209bc3778245d011443644c8d27dc2c50                                        |
| `teamPermissions`                                                                    | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Permissions that the team has in the access group.                                   | [<br/>"CreateProject"<br/>]                                                          |
| `teamRoles`                                                                          | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Roles that the team has in the access group.                                         | [<br/>"DEVELOPER",<br/>"BILLING"<br/>]                                               |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Timestamp in milliseconds when the access group was last updated.                    | 1588720733602                                                                        |