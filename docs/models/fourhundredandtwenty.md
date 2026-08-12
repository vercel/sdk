# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndTwenty = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://creamy-programme.biz",
    teamId: "<id>",
    name: "<value>",
    claims: [],
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
    createdAt: 9336.37,
    updatedAt: 7633.96,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://oily-pants.net/",
    teamId: "<id>",
    name: "<value>",
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
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: {
      projectIds: [],
    },
    createdAt: 1345.26,
    updatedAt: 7803.4,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `before`                                                                                                                                                                                                             | [models.PayloadBefore](../models/payloadbefore.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `after`                                                                                                                                                                                                              | [models.PayloadAfter](../models/payloadafter.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |