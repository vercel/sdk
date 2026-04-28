# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/version.js";

let value: Teams = {
  createdAt: 3009.16,
  teamId: "<id>",
  role: "SECURITY",
  confirmed: true,
  confirmedAt: 9426.6,
  created: 7142.84,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload116Role](../models/usereventpayload116role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *true*                                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accessRequestedAt`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamPermissions`                                                            | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |