# PayloadApp

optional since entries prior to 2025-10-13 do not contain app information

## Example Usage

```typescript
import { PayloadApp } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: PayloadApp = {
  clientAuthenticationUsed: {
    method: "client_secret_jwt",
  },
  clientId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `clientAuthenticationUsed`                                                            | [models.ClientAuthenticationUsed](../models/clientauthenticationused.md)              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `clientId`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | the app's name at the time the event was published (it could have changed since then) |