# Teams

## Example Usage

```typescript
import { Teams } from "@vercel/sdk/models/edgemiddlewareinvocations.js";

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
| `role`                                                                                   | [models.UserEventPayload162Role](../models/usereventpayload162role.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `confirmed`                                                                              | *true*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `confirmedAt`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `accessRequestedAt`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamRoles`                                                                              | [models.UserEventPayloadTeamRoles](../models/usereventpayloadteamroles.md)[]             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamPermissions`                                                                        | [models.UserEventPayloadTeamPermissions](../models/usereventpayloadteampermissions.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `created`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `joinedFrom`                                                                             | [models.UserEventPayload162JoinedFrom](../models/usereventpayload162joinedfrom.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |