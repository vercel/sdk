# Issuers

## Example Usage

```typescript
import { Issuers } from "@vercel/sdk/models/listkmsissuersop.js";

let value: Issuers = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  algorithm: "RS512",
  origin: "vercel",
  createdAt: "1705697828481",
  updatedAt: "1735651055803",
  signingKeys: [],
  policies: [
    {
      kind: "connex-grant",
      clientId: "<id>",
      createdAt: "1733586763809",
      updatedAt: "1735653303568",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `algorithm`                                                                  | [models.ListKmsIssuersAlgorithm](../models/listkmsissuersalgorithm.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `origin`                                                                     | [models.ListKmsIssuersOrigin](../models/listkmsissuersorigin.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `managedBy`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `claimsSchema`                                                               | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `signingKeys`                                                                | [models.ListKmsIssuersSigningKeys](../models/listkmsissuerssigningkeys.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `policies`                                                                   | *models.ListKmsIssuersPolicies*[]                                            | :heavy_check_mark:                                                           | N/A                                                                          |