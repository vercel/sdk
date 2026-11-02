# RevokeKmsSigningKeyResponseBody

## Example Usage

```typescript
import { RevokeKmsSigningKeyResponseBody } from "@vercel/sdk/models/revokekmssigningkeyop.js";

let value: RevokeKmsSigningKeyResponseBody = {
  algorithm: "ES384",
  createdAt: "1705060274009",
  discoveryLayout: "kms",
  id: "<id>",
  name: "<value>",
  origin: "external",
  ownerId: "<id>",
  policies: [
    {
      clientId: "<id>",
      createdAt: "1733554118983",
      kind: "connex-grant",
      updatedAt: "1735614463923",
    },
  ],
  signingKeys: [
    {
      algorithm: "<value>",
      createdAt: "1732905434993",
      issuerId: "<id>",
      keyId: "<id>",
      publicKeyFingerprint: "<value>",
      status: "revoking",
      updatedAt: "1735677675490",
    },
  ],
  updatedAt: "1735605618121",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `algorithm`                                                                                  | [models.RevokeKmsSigningKeyAlgorithm](../models/revokekmssigningkeyalgorithm.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `claimsSchema`                                                                               | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `discoveryLayout`                                                                            | [models.RevokeKmsSigningKeyDiscoveryLayout](../models/revokekmssigningkeydiscoverylayout.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `managedBy`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `origin`                                                                                     | [models.RevokeKmsSigningKeyOrigin](../models/revokekmssigningkeyorigin.md)                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `policies`                                                                                   | *models.RevokeKmsSigningKeyPolicies*[]                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `signingKeys`                                                                                | [models.RevokeKmsSigningKeySigningKeys](../models/revokekmssigningkeysigningkeys.md)[]       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updatedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |