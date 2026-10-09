# FourHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFour } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndEightyFour = {
  actorTokenId: "<id>",
  deletedCount: 9180.47,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `actorTokenId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The token's public ID.                                                               |
| `deletedCount`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `geolocation`                                                                        | [models.UserEventPayload484Geolocation](../models/usereventpayload484geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |