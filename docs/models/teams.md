# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/artifacts.js";

let value: Teams = {
  createdAt: 3009.16,
  teamId: "<id>",
  created: 4453.66,
  role: "CONTRIBUTOR",
  confirmed: false,
  confirmedAt: 8273.52,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `role`                                                                       | [models.UserEventPayload112Role](../models/usereventpayload112role.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmed`                                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `confirmedAt`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `accessRequestedAt`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamRoles`                                                                  | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `teamPermissions`                                                            | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `joinedFrom`                                                                 | [models.UserEventPayloadJoinedFrom](../models/usereventpayloadjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |