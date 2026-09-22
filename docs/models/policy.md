# Policy

A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape.

## Example Usage

```typescript
import { Policy } from "@vercel/sdk/models/fourhundredandten.js";

let value: Policy = {
  claims: [
    {
      name: "<value>",
      values: [],
    },
  ],
  clientId: "<id>",
  createdAt: 3142.86,
  issuerUrl: "https://thin-rawhide.com/",
  name: "<value>",
  permissions: [
    "<value 1>",
  ],
  policyId: "<id>",
  resources: null,
  teamId: "<id>",
  updatedAt: 7712.5,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | [models.Claims](../models/claims.md)[]                                           | :heavy_check_mark:                                                               | Claim matchers an OIDC token must satisfy to use the policy.                     |
| `clientId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Creation time (epoch ms).                                                        |
| `issuerUrl`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable policy name, or `null` when unnamed.                              |
| `permissions`                                                                    | *string*[]                                                                       | :heavy_check_mark:                                                               | Permission boundary (`['*']` = the app's full declared permissions).             |
| `policyId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `resources`                                                                      | [models.UserEventPayload461Resources](../models/usereventpayload461resources.md) | :heavy_check_mark:                                                               | Resource boundary, or `null` when the policy has none.                           |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Last-update time (epoch ms).                                                     |