# PayloadBefore

A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape.

## Example Usage

```typescript
import { PayloadBefore } from "@vercel/sdk/models/fourhundredandsix.js";

let value: PayloadBefore = {
  claims: [
    {
      name: "<value>",
      values: [
        {
          value: "<value>",
          wildcards: false,
        },
      ],
    },
  ],
  clientId: "<id>",
  createdAt: 6882.23,
  issuerUrl: "https://wrathful-tusk.name/",
  name: "<value>",
  permissions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  policyId: "<id>",
  resources: {
    projectIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  teamId: "<id>",
  updatedAt: 1621.58,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `claims`                                                                                     | [models.UserEventPayloadClaims](../models/usereventpayloadclaims.md)[]                       | :heavy_check_mark:                                                                           | Claim matchers an OIDC token must satisfy to use the policy.                                 |
| `clientId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | Creation time (epoch ms).                                                                    |
| `issuerUrl`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Human-readable policy name, or `null` when unnamed.                                          |
| `permissions`                                                                                | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Permission boundary (`['*']` = the app's full declared permissions).                         |
| `policyId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `resources`                                                                                  | [models.UserEventPayload458BeforeResources](../models/usereventpayload458beforeresources.md) | :heavy_check_mark:                                                                           | Resource boundary, or `null` when the policy has none.                                       |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | Last-update time (epoch ms).                                                                 |