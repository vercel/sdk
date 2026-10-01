# FourHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyOne } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndSeventyOne = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 6116.62,
    issuerUrl: "https://flashy-corral.org/",
    name: null,
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 1268.92,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                                                                             | [models.Policy](../models/policy.md)                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |