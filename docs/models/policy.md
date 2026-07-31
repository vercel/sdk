# Policy

A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape.

## Example Usage

```typescript
import { Policy } from "@vercel/sdk/models/threehundredandsixty.js";

let value: Policy = {
  policyId: "<id>",
  clientId: "<id>",
  issuerUrl: "https://gifted-councilman.org",
  teamId: "<id>",
  name: "<value>",
  claims: [],
  permissions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resources: {
    projectIds: [],
  },
  createdAt: 7712.5,
  updatedAt: 174.88,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `policyId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `clientId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `issuerUrl`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable policy name, or `null` when unnamed.                              |
| `claims`                                                                         | [models.Claims](../models/claims.md)[]                                           | :heavy_check_mark:                                                               | Claim matchers an OIDC token must satisfy to use the policy.                     |
| `permissions`                                                                    | *string*[]                                                                       | :heavy_check_mark:                                                               | Permission boundary (`['*']` = the app's full declared permissions).             |
| `resources`                                                                      | [models.UserEventPayload401Resources](../models/usereventpayload401resources.md) | :heavy_check_mark:                                                               | Resource boundary, or `null` when the policy has none.                           |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Creation time (epoch ms).                                                        |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Last-update time (epoch ms).                                                     |