# FiveHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentySeven } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndTwentySeven = {
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
| `geolocation`                                                                        | [models.UserEventPayload527Geolocation](../models/usereventpayload527geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `leaked`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `logoutSource`                                                                       | [models.LogoutSource](../models/logoutsource.md)                                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `origin`                                                                             | [models.PayloadOrigin](../models/payloadorigin.md)                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reason`                                                                             | [models.UserEventPayload527Reason](../models/usereventpayload527reason.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `revoked`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `scope`                                                                              | [models.UserEventPayload527Scope](../models/usereventpayload527scope.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `source`                                                                             | [models.UserEventPayload527Source](../models/usereventpayload527source.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tokenId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenType`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |