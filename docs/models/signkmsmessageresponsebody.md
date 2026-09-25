# SignKmsMessageResponseBody

## Example Usage

```typescript
import { SignKmsMessageResponseBody } from "@vercel/sdk/models/signkmsmessageop.js";

let value: SignKmsMessageResponseBody = {
  algorithm: "<value>",
  fingerprint: "<value>",
  keyId: "<id>",
  signature: "<value>",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `algorithm`                                                                                                                                   | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Algorithm of the signing key.                                                                                                                 |
| `fingerprint`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | SHA-256 fingerprint of the signing key's public key (`SHA256:<base64>`).                                                                      |
| `keyId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Key id of the signing key. Matches the JWKS `kid` so verifiers can select the key after rotation without trial-verifying every published key. |
| `signature`                                                                                                                                   | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Standard-base64 encoding of the raw signature over the decoded message bytes.                                                                 |