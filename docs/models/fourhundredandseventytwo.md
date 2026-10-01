# FourHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyTwo } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndSeventyTwo = {
  after: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 8064.4,
    issuerUrl: "https://tasty-bandwidth.info",
    name: "<value>",
    permissions: [
      "<value 1>",
    ],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 7889.46,
  },
  before: {
    claims: [],
    clientId: "<id>",
    createdAt: 1316.16,
    issuerUrl: "https://turbulent-freckle.org",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    teamId: "<id>",
    updatedAt: 4408.63,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                                                                                                                              | [models.PayloadAfter](../models/payloadafter.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `before`                                                                                                                                                                                                             | [models.PayloadBefore](../models/payloadbefore.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |