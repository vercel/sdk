# GetKmsIssuerResponseBody

## Example Usage

```typescript
import { GetKmsIssuerResponseBody } from "@vercel/sdk/models/getkmsissuerop.js";

let value: GetKmsIssuerResponseBody = {
  id: "<id>",
  ownerId: "<id>",
  name: "<value>",
  algorithm: "PS512",
  origin: "vercel",
  createdAt: "1720065201017",
  updatedAt: "1735673939200",
  signingKeys: [],
  policies: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `algorithm`                                                              | [models.GetKmsIssuerAlgorithm](../models/getkmsissueralgorithm.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `origin`                                                                 | [models.GetKmsIssuerOrigin](../models/getkmsissuerorigin.md)             | :heavy_check_mark:                                                       | N/A                                                                      |
| `managedBy`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `claimsSchema`                                                           | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `signingKeys`                                                            | [models.GetKmsIssuerSigningKeys](../models/getkmsissuersigningkeys.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `policies`                                                               | *models.GetKmsIssuerPolicies*[]                                          | :heavy_check_mark:                                                       | N/A                                                                      |