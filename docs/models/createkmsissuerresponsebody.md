# CreateKmsIssuerResponseBody

## Example Usage

```typescript
import { CreateKmsIssuerResponseBody } from "@vercel/sdk/models/createkmsissuerop.js";

let value: CreateKmsIssuerResponseBody = {
  algorithm: "PS384",
  createdAt: "1717650680065",
  id: "<id>",
  name: "<value>",
  origin: "vercel",
  ownerId: "<id>",
  policies: [],
  signingKeys: [
    {
      algorithm: "<value>",
      createdAt: "1729152676948",
      issuerId: "<id>",
      keyId: "<id>",
      publicKeyFingerprint: "<value>",
      status: "active",
      updatedAt: "1735674540461",
    },
  ],
  updatedAt: "1735680157687",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `algorithm`                                                              | [models.CreateKmsIssuerAlgorithm](../models/createkmsissueralgorithm.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `claimsSchema`                                                           | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `managedBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `origin`                                                                 | [models.CreateKmsIssuerOrigin](../models/createkmsissuerorigin.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `policies`                                                               | *models.Policies*[]                                                      | :heavy_check_mark:                                                       | N/A                                                                      |
| `signingKeys`                                                            | [models.SigningKeys](../models/signingkeys.md)[]                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |