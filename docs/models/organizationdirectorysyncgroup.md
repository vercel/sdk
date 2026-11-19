# OrganizationDirectorySyncGroup

A group from the organization's Identity Provider directory, joined with its Directory Sync group configuration when one exists.

## Example Usage

```typescript
import { OrganizationDirectorySyncGroup } from "@vercel/sdk/models/organizationdirectorysyncgroup.js";

let value: OrganizationDirectorySyncGroup = {
  assignments: {
    organizationPermissions: [
      "OrgAdmin",
    ],
    teamRoles: [],
    teams: {
      "key": {
        teamRoles: [],
      },
    },
  },
  createdAt: null,
  directoryGroupId: "<id>",
  directoryId: "<id>",
  name: "<value>",
  organizationId: "<id>",
  updatedAt: "1735683956317",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `assignments`                                                    | [models.Assignments](../models/assignments.md)                   | :heavy_check_mark:                                               | `null` when the group has no Directory Sync group configuration. |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | `null` when the group has no Directory Sync group configuration. |
| `directoryGroupId`                                               | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `directoryId`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The group's name in the Identity Provider directory.             |
| `organizationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updatedAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | `null` when the group has no Directory Sync group configuration. |