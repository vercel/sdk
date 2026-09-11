# FourHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFive } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndFortyFive = {
  policy: {
    policyId: "<id>",
    clientId: "<id>",
    issuerUrl: "https://gripping-citizen.info/",
    teamId: "<id>",
    name: "<value>",
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    permissions: [],
    resources: {
      projectIds: [],
    },
    createdAt: 8478.68,
    updatedAt: 6439.94,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                                                                             | [models.Policy](../models/policy.md)                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |