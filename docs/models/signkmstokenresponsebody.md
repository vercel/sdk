# SignKmsTokenResponseBody

## Example Usage

```typescript
import { SignKmsTokenResponseBody } from "@vercel/sdk/models/signkmstokenop.js";

let value: SignKmsTokenResponseBody = {
  algorithm: "<value>",
  fingerprint: "<value>",
  keyId: "<id>",
  token: "<value>",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `algorithm`                                                                                                                                   | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Algorithm of the signing key.                                                                                                                 |
| `fingerprint`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | SHA-256 fingerprint of the signing key's public key (`SHA256:<base64>`).                                                                      |
| `keyId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Key id of the signing key. Matches the JWKS `kid` so verifiers can select the key after rotation without trial-verifying every published key. |
| `token`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Compact JWT signed by the issuer's active signing key.                                                                                        |