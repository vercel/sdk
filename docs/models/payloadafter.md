# PayloadAfter

A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape.

## Example Usage

```typescript
import { PayloadAfter } from "@vercel/sdk/models/fourhundredandfour.js";

let value: PayloadAfter = {
  policyId: "<id>",
  clientId: "<id>",
  issuerUrl: "https://lasting-precedent.net/",
  teamId: "<id>",
  name: "<value>",
  claims: [],
  permissions: [
    "<value 1>",
  ],
  resources: {
    projectIds: [],
  },
  createdAt: 5839.48,
  updatedAt: 7911.77,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `policyId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `clientId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `issuerUrl`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `teamId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Human-readable policy name, or `null` when unnamed.                                        |
| `claims`                                                                                   | [models.UserEventPayloadClaims](../models/usereventpayloadclaims.md)[]                     | :heavy_check_mark:                                                                         | Claim matchers an OIDC token must satisfy to use the policy.                               |
| `permissions`                                                                              | *string*[]                                                                                 | :heavy_check_mark:                                                                         | Permission boundary (`['*']` = the app's full declared permissions).                       |
| `resources`                                                                                | [models.UserEventPayload443AfterResources](../models/usereventpayload443afterresources.md) | :heavy_check_mark:                                                                         | Resource boundary, or `null` when the policy has none.                                     |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Creation time (epoch ms).                                                                  |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Last-update time (epoch ms).                                                               |