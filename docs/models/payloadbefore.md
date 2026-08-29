# PayloadBefore

A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape.

## Example Usage

```typescript
import { PayloadBefore } from "@vercel/sdk/models/fourhundredandone.js";

let value: PayloadBefore = {
  policyId: "<id>",
  clientId: "<id>",
  issuerUrl: "https://rusty-polarisation.biz",
  teamId: "<id>",
  name: "<value>",
  claims: [
    {
      name: "<value>",
      values: [
        {
          value: "<value>",
          wildcards: true,
        },
      ],
    },
  ],
  permissions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resources: {
    projectIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  createdAt: 1621.58,
  updatedAt: 4171.78,
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
| `claims`                                                                         | [models.PayloadClaims](../models/payloadclaims.md)[]                             | :heavy_check_mark:                                                               | Claim matchers an OIDC token must satisfy to use the policy.                     |
| `permissions`                                                                    | *string*[]                                                                       | :heavy_check_mark:                                                               | Permission boundary (`['*']` = the app's full declared permissions).             |
| `resources`                                                                      | [models.UserEventPayload440Resources](../models/usereventpayload440resources.md) | :heavy_check_mark:                                                               | Resource boundary, or `null` when the policy has none.                           |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Creation time (epoch ms).                                                        |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | Last-update time (epoch ms).                                                     |