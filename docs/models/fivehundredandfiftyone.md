# FiveHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFiftyOne } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFiftyOne = {
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
| `geolocation`                                                                        | [models.UserEventPayload551Geolocation](../models/usereventpayload551geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `leaked`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `logoutSource`                                                                       | [models.LogoutSource](../models/logoutsource.md)                                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `origin`                                                                             | [models.PayloadOrigin](../models/payloadorigin.md)                                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reason`                                                                             | [models.UserEventPayload551Reason](../models/usereventpayload551reason.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `revoked`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `scope`                                                                              | [models.UserEventPayload551Scope](../models/usereventpayload551scope.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `source`                                                                             | [models.UserEventPayload551Source](../models/usereventpayload551source.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tokenId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tokenType`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |