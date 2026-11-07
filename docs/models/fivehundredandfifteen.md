# FiveHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFifteen } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FiveHundredAndFifteen = {
  policy: {
    claims: [
      {
        name: "<value>",
        values: [],
      },
    ],
    clientId: "<id>",
    createdAt: 461.66,
    issuerUrl: "https://these-fedora.biz/",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: {
      projectIds: [],
    },
    teamId: "<id>",
    updatedAt: 9423.26,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                                                                             | [models.Policy](../models/policy.md)                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |