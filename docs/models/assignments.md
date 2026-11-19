# Assignments

`null` when the group has no Directory Sync group configuration.

## Example Usage

```typescript
import { Assignments } from "@vercel/sdk/models/organizationdirectorysyncgroup.js";

let value: Assignments = {
  organizationPermissions: [],
  teamRoles: [],
  teams: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `organizationPermissions`                                                                                | [models.OrganizationPermissions](../models/organizationpermissions.md)[]                                 | :heavy_check_mark:                                                                                       | Organization-level permissions assigned to the directory group.                                          |
| `teamRoles`                                                                                              | [models.OrganizationDirectorySyncGroupTeamRoles](../models/organizationdirectorysyncgroupteamroles.md)[] | :heavy_check_mark:                                                                                       | Roles for linked child teams without an explicit team assignment.                                        |
| `teams`                                                                                                  | Record<string, [models.Teams](../models/teams.md)>                                                       | :heavy_check_mark:                                                                                       | Replaces the default team roles for each specified child team.                                           |