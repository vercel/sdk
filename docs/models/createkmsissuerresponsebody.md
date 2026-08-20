# CreateKmsIssuerResponseBody

## Example Usage

```typescript
import { CreateKmsIssuerResponseBody } from "@vercel/sdk/models/createkmsissuerop.js";

let value: CreateKmsIssuerResponseBody = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  algorithm: "PS384",
  origin: "external",
  createdAt: "1731599596472",
  updatedAt: "1735623058448",
  signingKeys: [
    {
      keyId: "<id>",
      issuerId: "<id>",
      algorithm: "<value>",
      status: "revoking",
      createdAt: "1704267979736",
      updatedAt: "1735674540461",
    },
  ],
  policies: [
    {
      kind: "connex-grant",
      clientId: "<id>",
      createdAt: "1710737173097",
      updatedAt: "1735610441928",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `algorithm`                                                              | [models.CreateKmsIssuerAlgorithm](../models/createkmsissueralgorithm.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `origin`                                                                 | [models.CreateKmsIssuerOrigin](../models/createkmsissuerorigin.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `managedBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `claimsSchema`                                                           | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `signingKeys`                                                            | [models.SigningKeys](../models/signingkeys.md)[]                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `policies`                                                               | *models.Policies*[]                                                      | :heavy_check_mark:                                                       | N/A                                                                      |