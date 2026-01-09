# ExchangeSsoTokenRequestBody2

## Example Usage

```typescript
import { ExchangeSsoTokenRequestBody2 } from "@vercel/sdk/models/exchangessotokenop.js";

let value: ExchangeSsoTokenRequestBody2 = {
  refreshToken: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
  grantType: "refresh_token",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `refreshToken`                                                | *string*                                                      | :heavy_check_mark:                                            | The refresh token received from previous token exchange       |
| `clientId`                                                    | *string*                                                      | :heavy_check_mark:                                            | The integration client id                                     |
| `clientSecret`                                                | *string*                                                      | :heavy_check_mark:                                            | The integration client secret                                 |
| `grantType`                                                   | *"refresh_token"*                                             | :heavy_check_mark:                                            | The grant type, when using x-www-form-urlencoded content type |