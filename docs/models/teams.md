# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/userevent.js";

let value: Teams = {
  teamId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `created`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload62Role](../models/usereventpayload62role.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `accessRequestedAt`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamPermissions`                                                            | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |