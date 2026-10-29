# FiveHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFour } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FiveHundredAndFour = {
  actorTokenId: "<id>",
  deletedCount: 3809.7,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `actorTokenId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The token's public ID.                                                               |
| `deletedCount`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `geolocation`                                                                        | [models.UserEventPayload504Geolocation](../models/usereventpayload504geolocation.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `ip`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reqUrl`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `userAgent`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |