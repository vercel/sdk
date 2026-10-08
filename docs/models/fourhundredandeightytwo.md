# FourHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyTwo } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndEightyTwo = {
  actorTokenId: "<id>",
  deletedCount: 9462.23,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `actorTokenId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The token's public ID.                                                               |
| `deletedCount`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `geolocation`                                                                        | [models.UserEventPayload482Geolocation](../models/usereventpayload482geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |