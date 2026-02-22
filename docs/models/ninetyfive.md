# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/payloadenablepreviewfeedback.js";

let value: NinetyFive = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `userAgent`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `geolocation`                                                | [models.PayloadGeolocation](../models/payloadgeolocation.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `env`                                                        | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `os`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `username`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `ssoType`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `factors`                                                    | *models.PayloadFactors*[]                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaOTP`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaGithub`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaGitlab`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaBitbucket`                                               | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaGoogle`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaApple`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaSamlSso`                                                 | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `viaPasskey`                                                 | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |