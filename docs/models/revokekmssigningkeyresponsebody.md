# RevokeKmsSigningKeyResponseBody

## Example Usage

```typescript
import { RevokeKmsSigningKeyResponseBody } from "@vercel/sdk/models/revokekmssigningkeyop.js";

let value: RevokeKmsSigningKeyResponseBody = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  algorithm: "ES512",
  origin: "external",
  createdAt: "1720995543824",
  updatedAt: "1735640332904",
  signingKeys: [
    {
      keyId: "<id>",
      issuerId: "<id>",
      algorithm: "<value>",
      status: "revoking",
      createdAt: "1733554118983",
      updatedAt: "1735614463923",
    },
  ],
  policies: [
    {
      kind: "connex-grant",
      clientId: "<id>",
      createdAt: "1726597814346",
      updatedAt: "1735677675490",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ownerId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `algorithm`                                                                            | [models.RevokeKmsSigningKeyAlgorithm](../models/revokekmssigningkeyalgorithm.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `origin`                                                                               | [models.RevokeKmsSigningKeyOrigin](../models/revokekmssigningkeyorigin.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `managedBy`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `claimsSchema`                                                                         | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `signingKeys`                                                                          | [models.RevokeKmsSigningKeySigningKeys](../models/revokekmssigningkeysigningkeys.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `policies`                                                                             | *models.RevokeKmsSigningKeyPolicies*[]                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |