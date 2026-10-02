# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/oldenvvar.js";

let value: Teams = {
  confirmed: true,
  confirmedAt: 3009.16,
  created: 4453.66,
  createdAt: 9426.6,
  role: "SECURITY",
  teamId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accessRequestedAt`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `confirmed`                                                                              | *true*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `confirmedAt`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `created`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `joinedFrom`                                                                             | [models.UserEventPayload183JoinedFrom](../models/usereventpayload183joinedfrom.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [models.UserEventPayload183Role](../models/usereventpayload183role.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamPermissions`                                                                        | [models.UserEventPayloadTeamPermissions](../models/usereventpayloadteampermissions.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamRoles`                                                                              | [models.UserEventPayload183TeamRoles](../models/usereventpayload183teamroles.md)[]       | :heavy_minus_sign:                                                                       | N/A                                                                                      |