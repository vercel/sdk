# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/environment.js";

let value: ThreeHundredAndSeventeen = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 746.19,
  scope: "<value>",
  authMethod: "passkey",
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
| `app`                                                                                 | [models.PayloadApp](../models/payloadapp.md)                                          | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain app information             |
| `includesRefreshToken`                                                                | *boolean*                                                                             | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |
| `publicId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |
| `tokenPrefix`                                                                         | [models.TokenPrefix](../models/tokenprefix.md)                                        | :heavy_minus_sign:                                                                    | optional since entries prior to 2026-04-23 do not contain this field                  |
| `tokenSuffix`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2026-04-23 do not contain this field                  |
| `refreshTokenPublicId`                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | optional; only present when a refresh token was issued (offline_access).              |
| `refreshTokenPrefix`                                                                  | [models.RefreshTokenPrefix](../models/refreshtokenprefix.md)                          | :heavy_minus_sign:                                                                    | optional; only present when a refresh token was issued (offline_access).              |
| `refreshTokenSuffix`                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | optional; only present when a refresh token was issued (offline_access).              |
| `sessionId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2025-10-13 do not contain this field                  |
| `ip`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2026-04-23 do not contain this field                  |
| `geolocation`                                                                         | [models.UserEventPayloadGeolocation](../models/usereventpayloadgeolocation.md)        | :heavy_minus_sign:                                                                    | optional since entries prior to 2026-04-23 do not contain this field                  |
| `userAgent`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | optional since entries prior to 2026-04-23 do not contain this field                  |