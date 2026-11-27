# UserEventPayloadNext

## Example Usage

```typescript
import { UserEventPayloadNext } from "@vercel/sdk/models/usereventpayload195oldenvvartype.js";

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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `organizationPermissions`                                                              | [models.PayloadOrganizationPermissions](../models/payloadorganizationpermissions.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `teamRoles`                                                                            | [models.UserEventPayloadTeamRoles](../models/usereventpayloadteamroles.md)[]           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `teams`                                                                                | Record<string, [models.PayloadTeams](../models/payloadteams.md)>                       | :heavy_check_mark:                                                                     | N/A                                                                                    |