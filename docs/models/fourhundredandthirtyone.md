# FourHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyOne } from "@vercel/sdk/models/threehundredandninetytwo.js";

let value: FourHundredAndThirtyOne = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://tiny-pillow.net/",
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
    createdAt: 8688.45,
    updatedAt: 689.84,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://posh-final.info",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
    ],
    resources: null,
    createdAt: 158.1,
    updatedAt: 3502.65,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `before`                                                                                                                                                                                                             | [models.PayloadBefore](../models/payloadbefore.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `after`                                                                                                                                                                                                              | [models.PayloadAfter](../models/payloadafter.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |