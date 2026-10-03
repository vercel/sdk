# PayloadNext

## Example Usage

```typescript
import { PayloadNext } from "@vercel/sdk/models/lasteditedbyprincipal1.js";

let value: PayloadNext = {
  organizationPermissions: [],
  teamRoles: [
    "VIEWER_FOR_PLUS",
  ],
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