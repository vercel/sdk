# ThreeHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyOne } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: ThreeHundredAndSeventyOne = {
  previousRole: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `directoryType`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `ssoType`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `updatedUser`                                                            | [models.PayloadUpdatedUser](../models/payloadupdateduser.md)             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `role`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `previousRole`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousTeamRoles`                                                      | [models.PreviousTeamRoles](../models/previousteamroles.md)[]             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `teamRoles`                                                              | [models.PayloadTeamRoles](../models/payloadteamroles.md)[]               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `previousTeamPermissions`                                                | [models.PreviousTeamPermissions](../models/previousteampermissions.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `teamPermissions`                                                        | [models.PayloadTeamPermissions](../models/payloadteampermissions.md)[]   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `updatedUid`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `origin`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `teamSlug`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |