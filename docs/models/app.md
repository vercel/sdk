# App

optional since entries prior to 2025-10-13 do not contain app information

## Example Usage

```typescript
import { App } from "@vercel/sdk/models/userevent.js";

let value: App = {
  clientId: "<id>",
  name: "<value>",
  clientAuthenticationUsed: {
    method: "oidc_token",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `clientId`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | the app's name at the time the event was published (it could have changed since then) |
| `clientAuthenticationUsed`                                                            | [models.ClientAuthenticationUsed](../models/clientauthenticationused.md)              | :heavy_check_mark:                                                                    | N/A                                                                                   |