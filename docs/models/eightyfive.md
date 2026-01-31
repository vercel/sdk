# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/userevent.js";

let value: EightyFive = {
  viaOTP: false,
  viaEmailInvite: true,
  viaGithub: false,
  viaGitlab: true,
  viaBitbucket: true,
  viaGoogle: false,
  viaApple: true,
  viaSamlSso: true,
  viaPasskey: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `userAgent`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `geolocation`                                  | [models.Geolocation](../models/geolocation.md) | :heavy_minus_sign:                             | N/A                                            |
| `viaOTP`                                       | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaEmailInvite`                               | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaGithub`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaGitlab`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaBitbucket`                                 | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaGoogle`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaApple`                                     | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaSamlSso`                                   | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaPasskey`                                   | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `ssoType`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `env`                                          | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `os`                                           | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `username`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `factors`                                      | *models.Factors*                               | :heavy_minus_sign:                             | N/A                                            |