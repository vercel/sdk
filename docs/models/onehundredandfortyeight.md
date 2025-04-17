# OneHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyEight = {
  grantType: "authorization_code",
  appName: "<value>",
  atTTL: 1676.98,
  scope: "<value>",
  authMethod: "manual",
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