# UserEventPayloadNext

## Example Usage

```typescript
import { UserEventPayloadNext } from "@vercel/sdk/models/usereventpayload174target.js";

let value: UserEventPayloadNext = {
  organizationPermissions: [],
  teamRoles: [],
  teams: {
    "key": {
      teamRoles: [],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `organizationPermissions`                                                    | [models.OrganizationPermissions](../models/organizationpermissions.md)[]     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.UserEventPayloadTeamRoles](../models/usereventpayloadteamroles.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `teams`                                                                      | Record<string, [models.Teams](../models/teams.md)>                           | :heavy_check_mark:                                                           | N/A                                                                          |