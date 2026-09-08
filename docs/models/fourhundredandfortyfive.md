# FourHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFive } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndFortyFive = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://gripping-citizen.info/",
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
    permissions: [],
    resources: {
      projectIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    createdAt: 8478.68,
    updatedAt: 6439.94,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://unknown-submitter.net/",
    teamId: "<id>",
    name: "<value>",
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    permissions: [
      "<value 1>",
    ],
    resources: {
      projectIds: [],
    },
    createdAt: 666.51,
    updatedAt: 6375.39,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `before`                                                                                                                                                                                                             | [models.PayloadBefore](../models/payloadbefore.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `after`                                                                                                                                                                                                              | [models.PayloadAfter](../models/payloadafter.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |