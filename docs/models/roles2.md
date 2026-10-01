# Roles2

When "Directory Sync" is configured, this object contains a mapping of which Directory Group (by ID) should be assigned to which Vercel Team roles and permissions, or an access group. Bare team roles are deprecated in favor of DirectorySyncRolesMapping.

## Example Usage

```typescript
import { Roles2 } from "@vercel/sdk/models/team.js";

let value: Roles2 = {
  teamRoles: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `teamPermissions`                                                  | [models.RolesTeamPermissions](../models/rolesteampermissions.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `teamRoles`                                                        | [models.RolesTeamRoles](../models/rolesteamroles.md)[]             | :heavy_check_mark:                                                 | N/A                                                                |