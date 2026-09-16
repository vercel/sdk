# EmailInviteCodes

## Example Usage

```typescript
import { EmailInviteCodes } from "@vercel/sdk/models/getteammembersop.js";

let value: EmailInviteCodes = {
  id: "<id>",
  isDSyncUser: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accessGroups`                                                                       | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `email`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `entitlements`                                                                       | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `expired`                                                                            | *true*                                                                               | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isDSyncUser`                                                                        | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `projects`                                                                           | Record<string, [models.GetTeamMembersProjects](../models/getteammembersprojects.md)> | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `role`                                                                               | [models.GetTeamMembersRole](../models/getteammembersrole.md)                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamPermissions`                                                                    | [models.GetTeamMembersTeamPermissions](../models/getteammembersteampermissions.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamRoles`                                                                          | [models.GetTeamMembersTeamRoles](../models/getteammembersteamroles.md)[]             | :heavy_minus_sign:                                                                   | N/A                                                                                  |