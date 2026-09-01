# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/bandwidth.js";

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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [models.UserEventPayload165Role](../models/usereventpayload165role.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `confirmed`                                                                              | *true*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `confirmedAt`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `accessRequestedAt`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamRoles`                                                                              | [models.UserEventPayloadTeamRoles](../models/usereventpayloadteamroles.md)[]             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamPermissions`                                                                        | [models.UserEventPayloadTeamPermissions](../models/usereventpayloadteampermissions.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `created`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `joinedFrom`                                                                             | [models.UserEventPayload165JoinedFrom](../models/usereventpayload165joinedfrom.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |