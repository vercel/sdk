# FourHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySix } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndFortySix = {
  before: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://sad-goat.biz",
    teamId: "<id>",
    name: "<value>",
    claims: [],
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    resources: null,
    createdAt: 2560.8,
    updatedAt: 6608.14,
  },
  after: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://unripe-starboard.net/",
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
    createdAt: 2807.32,
    updatedAt: 2363.93,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `before`                                                                                                                                                                                                             | [models.PayloadBefore](../models/payloadbefore.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `after`                                                                                                                                                                                                              | [models.PayloadAfter](../models/payloadafter.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |