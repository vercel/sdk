# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/ninetyeight.js";

let value: Teams = {
  createdAt: 3009.16,
  teamId: "<id>",
  confirmed: true,
  confirmedAt: 4453.66,
  role: "CONTRIBUTOR",
  created: 7142.84,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *true*                                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accessRequestedAt`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload113Role](../models/usereventpayload113role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamPermissions`                                                            | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |