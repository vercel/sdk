# CreateKmsIssuerResponseBody

## Example Usage

```typescript
import { CreateKmsIssuerResponseBody } from "@vercel/sdk/models/createkmsissuerop.js";

let value: CreateKmsIssuerResponseBody = {
  algorithm: "PS384",
  createdAt: "1717650680065",
  discoveryLayout: "kms",
  id: "<id>",
  name: "<value>",
  origin: "external",
  ownerId: "<id>",
  policies: [
    {
      clientId: "<id>",
      createdAt: "1721135837809",
      kind: "connex-grant",
      updatedAt: "1735621236978",
    },
  ],
  signingKeys: [],
  updatedAt: "1735636397969",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `algorithm`                                                              | [models.CreateKmsIssuerAlgorithm](../models/createkmsissueralgorithm.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `claimsSchema`                                                           | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `discoveryLayout`                                                        | [models.DiscoveryLayout](../models/discoverylayout.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `managedBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `origin`                                                                 | [models.CreateKmsIssuerOrigin](../models/createkmsissuerorigin.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `policies`                                                               | *models.Policies*[]                                                      | :heavy_check_mark:                                                       | N/A                                                                      |
| `signingKeys`                                                            | [models.SigningKeys](../models/signingkeys.md)[]                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |