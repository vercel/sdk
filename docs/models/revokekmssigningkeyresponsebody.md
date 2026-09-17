# RevokeKmsSigningKeyResponseBody

## Example Usage

```typescript
import { RevokeKmsSigningKeyResponseBody } from "@vercel/sdk/models/revokekmssigningkeyop.js";

let value: RevokeKmsSigningKeyResponseBody = {
  algorithm: "ES384",
  createdAt: "1705060274009",
  id: "<id>",
  name: "<value>",
  origin: "vercel",
  ownerId: "<id>",
  policies: [],
  signingKeys: [
    {
      algorithm: "<value>",
      createdAt: "1726055314044",
      issuerId: "<id>",
      keyId: "<id>",
      status: "revoking",
      updatedAt: "1735614463923",
    },
  ],
  updatedAt: "1735652899314",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `algorithm`                                                                            | [models.RevokeKmsSigningKeyAlgorithm](../models/revokekmssigningkeyalgorithm.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `claimsSchema`                                                                         | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `managedBy`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `origin`                                                                               | [models.RevokeKmsSigningKeyOrigin](../models/revokekmssigningkeyorigin.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ownerId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `policies`                                                                             | *models.RevokeKmsSigningKeyPolicies*[]                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `signingKeys`                                                                          | [models.RevokeKmsSigningKeySigningKeys](../models/revokekmssigningkeysigningkeys.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |