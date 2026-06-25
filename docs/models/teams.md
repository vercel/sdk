# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/onehundredandfifteen.js";

let value: Teams = {
  teamId: "<id>",
  createdAt: 3009.16,
  role: "MEMBER",
  confirmed: true,
  confirmedAt: 9426.6,
  created: 7142.84,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload139Role](../models/usereventpayload139role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *true*                                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accessRequestedAt`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamPermissions`                                                            | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |