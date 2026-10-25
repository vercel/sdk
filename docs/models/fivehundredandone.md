# FiveHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndOne } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FiveHundredAndOne = {
  actorTokenId: "<id>",
  tokenId: "<id>",
  tokenName: "<value>",
  tokenType: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `actorTokenId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The token's public ID.                                                               |
| `createdByParentTeamId`                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `expired`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `geolocation`                                                                        | [models.UserEventPayload501Geolocation](../models/usereventpayload501geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `leaked`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `logoutSource`                                                                       | [models.LogoutSource](../models/logoutsource.md)                                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `origin`                                                                             | [models.PayloadOrigin](../models/payloadorigin.md)                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reason`                                                                             | [models.UserEventPayload501Reason](../models/usereventpayload501reason.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `revoked`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `scope`                                                                              | [models.UserEventPayload501Scope](../models/usereventpayload501scope.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `source`                                                                             | [models.UserEventPayload501Source](../models/usereventpayload501source.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tokenId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenType`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |