# GetKmsIssuerResponseBody

## Example Usage

```typescript
import { GetKmsIssuerResponseBody } from "@vercel/sdk/models/getkmsissuerop.js";

let value: GetKmsIssuerResponseBody = {
  algorithm: "RS256",
  createdAt: "1735684679272",
  discoveryLayout: "kms",
  id: "<id>",
  name: "<value>",
  origin: "vercel",
  ownerId: "<id>",
  policies: [],
  signingKeys: [],
  updatedAt: "1735612489518",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `algorithm`                                                                    | [models.GetKmsIssuerAlgorithm](../models/getkmsissueralgorithm.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `claimsSchema`                                                                 | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `discoveryLayout`                                                              | [models.GetKmsIssuerDiscoveryLayout](../models/getkmsissuerdiscoverylayout.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `managedBy`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `origin`                                                                       | [models.GetKmsIssuerOrigin](../models/getkmsissuerorigin.md)                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `policies`                                                                     | *models.GetKmsIssuerPolicies*[]                                                | :heavy_check_mark:                                                             | N/A                                                                            |
| `signingKeys`                                                                  | [models.GetKmsIssuerSigningKeys](../models/getkmsissuersigningkeys.md)[]       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |