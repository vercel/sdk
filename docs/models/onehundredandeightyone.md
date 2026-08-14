# OneHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyOne } from "@vercel/sdk/models/fastdatatransfer.js";

let value: OneHundredAndEightyOne = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `userAgent`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `geolocation`                                                           | [models.Geolocation](../models/geolocation.md)                          | :heavy_minus_sign:                                                      | N/A                                                                     |
| `env`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `os`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `loginSessionId`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | Browser login correlation ID. This is not an authentication credential. |
| `username`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `ssoType`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `factors`                                                               | *models.Factors*                                                        | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaOTP`                                                                | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaGithub`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaGitlab`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaBitbucket`                                                          | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaGoogle`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaApple`                                                              | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaSamlSso`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `viaPasskey`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |