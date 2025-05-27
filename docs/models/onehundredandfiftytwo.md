# OneHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyTwo = {
  grantType: "urn:ietf:params:oauth:grant-type:device_code",
  appName: "<value>",
  atTTL: 8810.82,
  scope: "<value>",
  authMethod: "passkey",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `grantType`                                  | [models.GrantType](../models/granttype.md)   | :heavy_check_mark:                           | N/A                                          |
| `appName`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `atTTL`                                      | *number*                                     | :heavy_check_mark:                           | access_token TTL                             |
| `rtTTL`                                      | *number*                                     | :heavy_minus_sign:                           | refresh_token TTL                            |
| `scope`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `authMethod`                                 | [models.AuthMethod](../models/authmethod.md) | :heavy_check_mark:                           | N/A                                          |