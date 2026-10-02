# PayloadNext

## Example Usage

```typescript
import { PayloadNext } from "@vercel/sdk/models/usereventredisblockreason.js";

let value: PayloadNext = {
  organizationPermissions: [],
  teamRoles: [
    "VIEWER_FOR_PLUS",
  ],
  teams: {
    "key": {
      teamRoles: [
        "VIEWER",
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `organizationPermissions`                                                    | [models.OrganizationPermissions](../models/organizationpermissions.md)[]     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.UserEventPayloadTeamRoles](../models/usereventpayloadteamroles.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `teams`                                                                      | Record<string, [models.PayloadTeams](../models/payloadteams.md)>             | :heavy_check_mark:                                                           | N/A                                                                          |