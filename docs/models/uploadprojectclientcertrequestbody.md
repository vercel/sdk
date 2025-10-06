# UploadProjectClientCertRequestBody

## Example Usage

```typescript
import { UploadProjectClientCertRequestBody } from "@vercel/sdk/models/uploadprojectclientcertop.js";

let value: UploadProjectClientCertRequestBody = {
  cert: "-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----",
  key: "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----",
  ca: "-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----",
  origin: "https://api.example.com",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cert`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | The client certificate in PEM format                                                                    | -----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----                                           |
| `key`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | The private key in PEM format                                                                           | -----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----                                           |
| `ca`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The certificate authority in PEM format                                                                 | -----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----                                           |
| `origin`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The origin this certificate should be used for. If not specified, the certificate will be project-wide. | https://api.example.com                                                                                 |
| `skipValidation`                                                                                        | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | Skip validation of the certificate                                                                      |                                                                                                         |