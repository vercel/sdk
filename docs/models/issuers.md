# Issuers

## Example Usage

```typescript
import { Issuers } from "@vercel/sdk/models/listkmsissuersop.js";

let value: Issuers = {
  algorithm: "RS512",
  createdAt: "1723415533350",
  id: "<id>",
  name: "<value>",
  origin: "external",
  ownerId: "<id>",
  policies: [
    {
      createdAt: "1727293481037",
      environments: [
        "<value 1>",
        "<value 2>",
      ],
      kind: "project-grant",
      projectId: "<id>",
      teamId: "<id>",
      updatedAt: "1735683837875",
    },
  ],
  signingKeys: [
    {
      algorithm: "<value>",
      createdAt: "1729713623051",
      issuerId: "<id>",
      keyId: "<id>",
      status: "revoking",
      updatedAt: "1735672827594",
    },
  ],
  updatedAt: "1735653823949",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `algorithm`                                                                  | [models.ListKmsIssuersAlgorithm](../models/listkmsissuersalgorithm.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `claimsSchema`                                                               | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `managedBy`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `origin`                                                                     | [models.ListKmsIssuersOrigin](../models/listkmsissuersorigin.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `policies`                                                                   | *models.ListKmsIssuersPolicies*[]                                            | :heavy_check_mark:                                                           | N/A                                                                          |
| `signingKeys`                                                                | [models.ListKmsIssuersSigningKeys](../models/listkmsissuerssigningkeys.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |