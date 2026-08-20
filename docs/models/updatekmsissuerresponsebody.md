# UpdateKmsIssuerResponseBody

## Example Usage

```typescript
import { UpdateKmsIssuerResponseBody } from "@vercel/sdk/models/updatekmsissuerop.js";

let value: UpdateKmsIssuerResponseBody = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  algorithm: "PS512",
  origin: "external",
  createdAt: "1721958041640",
  updatedAt: "1735641072615",
  signingKeys: [
    {
      keyId: "<id>",
      issuerId: "<id>",
      algorithm: "<value>",
      status: "pending",
      createdAt: "1721064184884",
      updatedAt: "1735611881709",
    },
  ],
  policies: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `algorithm`                                                                    | [models.UpdateKmsIssuerAlgorithm](../models/updatekmsissueralgorithm.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `origin`                                                                       | [models.UpdateKmsIssuerOrigin](../models/updatekmsissuerorigin.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `managedBy`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `claimsSchema`                                                                 | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `signingKeys`                                                                  | [models.UpdateKmsIssuerSigningKeys](../models/updatekmsissuersigningkeys.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `policies`                                                                     | *models.UpdateKmsIssuerPolicies*[]                                             | :heavy_check_mark:                                                             | N/A                                                                            |