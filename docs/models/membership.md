# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@vercel/sdk/models/teamlimited.js";

let value: Membership = {
  confirmed: false,
  confirmedAt: 4476.78,
  role: "VIEWER",
  createdAt: 9499.15,
  created: 8170.57,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `uid`                                                    | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `entitlements`                                           | [models.Entitlements](../models/entitlements.md)[]       | :heavy_minus_sign:                                       | N/A                                                      |
| `confirmed`                                              | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `confirmedAt`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `accessRequestedAt`                                      | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `role`                                                   | [models.Role](../models/role.md)                         | :heavy_check_mark:                                       | N/A                                                      |
| `additionalRoles`                                        | [models.AdditionalRoles](../models/additionalroles.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `created`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `joinedFrom`                                             | [models.JoinedFrom](../models/joinedfrom.md)             | :heavy_minus_sign:                                       | N/A                                                      |