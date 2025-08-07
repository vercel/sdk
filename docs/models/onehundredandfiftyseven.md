# OneHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftySeven = {
  grantType: "urn:ietf:params:oauth:grant-type:device_code",
  appName: "<value>",
  atTTL: 2195.44,
  scope: "<value>",
  authMethod: "bitbucket",
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