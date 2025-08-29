# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyNine = {
  grantType: "refresh_token",
  appName: "<value>",
  atTTL: 4739.55,
  scope: "<value>",
  authMethod: "app",
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