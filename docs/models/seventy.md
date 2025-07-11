# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/userevent.js";

let value: Seventy = {
  viaGithub: false,
  viaGitlab: true,
  viaBitbucket: false,
  viaGoogle: true,
  viaSamlSso: true,
  viaPasskey: false,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `userAgent`                                    | [models.UserAgent](../models/useragent.md)     | :heavy_minus_sign:                             | N/A                                            |
| `geolocation`                                  | [models.Geolocation](../models/geolocation.md) | :heavy_minus_sign:                             | N/A                                            |
| `viaGithub`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaGitlab`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaBitbucket`                                 | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaGoogle`                                    | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaSamlSso`                                   | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `viaPasskey`                                   | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `ssoType`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `env`                                          | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `os`                                           | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `username`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |