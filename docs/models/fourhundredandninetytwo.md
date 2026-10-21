# FourHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyTwo } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndNinetyTwo = {
  policy: {
    claims: [],
    clientId: "<id>",
    createdAt: 9229.55,
    issuerUrl: "https://troubled-mainstream.name/",
    name: "<value>",
    permissions: [],
    policyId: "<id>",
    resources: null,
    teamId: "<id>",
    updatedAt: 8366.71,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                                                                             | [models.Policy](../models/policy.md)                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | A full point-in-time snapshot of an OIDC exchange policy, captured on every lifecycle event so the audit trail records exactly what the policy looked like. Mirrors the management endpoints' public response shape. |
| `appName`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |