# ExchangeSsoTokenRequestBody1

## Example Usage

```typescript
import { ExchangeSsoTokenRequestBody1 } from "@vercel/sdk/models/exchangessotokenop.js";

let value: ExchangeSsoTokenRequestBody1 = {
  code: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
  grantType: "authorization_code",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | *string*                                                      | :heavy_check_mark:                                            | The sensitive code received from Vercel                       |
| `state`                                                       | *string*                                                      | :heavy_minus_sign:                                            | The state received from the initialization request            |
| `clientId`                                                    | *string*                                                      | :heavy_check_mark:                                            | The integration client id                                     |
| `clientSecret`                                                | *string*                                                      | :heavy_check_mark:                                            | The integration client secret                                 |
| `redirectUri`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The integration redirect URI                                  |
| `grantType`                                                   | *"authorization_code"*                                        | :heavy_check_mark:                                            | The grant type, when using x-www-form-urlencoded content type |