# UpdateKmsIssuerResponseBody

## Example Usage

```typescript
import { UpdateKmsIssuerResponseBody } from "@vercel/sdk/models/updatekmsissuerop.js";

let value: UpdateKmsIssuerResponseBody = {
  algorithm: "RS256",
  createdAt: "1704756688213",
  discoveryLayout: "kms",
  id: "<id>",
  name: "<value>",
  origin: "external",
  ownerId: "<id>",
  policies: [
    {
      clientId: "<id>",
      createdAt: "1721064184884",
      kind: "connex-grant",
      updatedAt: "1735611881709",
    },
  ],
  signingKeys: [],
  updatedAt: "1735682949943",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `algorithm`                                                                          | [models.UpdateKmsIssuerAlgorithm](../models/updatekmsissueralgorithm.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `claimsSchema`                                                                       | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `discoveryLayout`                                                                    | [models.UpdateKmsIssuerDiscoveryLayout](../models/updatekmsissuerdiscoverylayout.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `managedBy`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `origin`                                                                             | [models.UpdateKmsIssuerOrigin](../models/updatekmsissuerorigin.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ownerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `policies`                                                                           | *models.UpdateKmsIssuerPolicies*[]                                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `signingKeys`                                                                        | [models.UpdateKmsIssuerSigningKeys](../models/updatekmsissuersigningkeys.md)[]       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |