# OneHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtySix = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 3588.31,
  scope: "<value>",
  authMethod: "github",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `grantType`                                                                           | [models.GrantType](../models/granttype.md)                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `appName`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | the app's name at the time the event was published (it could have changed since then) |
| `atTTL`                                                                               | *number*                                                                              | :heavy_check_mark:                                                                    | access_token TTL                                                                      |
| `rtTTL`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | refresh_token TTL                                                                     |
| `scope`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `authMethod`                                                                          | [models.AuthMethod](../models/authmethod.md)                                          | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `app`                                                                                 | [models.App](../models/app.md)                                                        | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain app information             |
| `includesRefreshToken`                                                                | *boolean*                                                                             | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |
| `publicId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |
| `sessionId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |