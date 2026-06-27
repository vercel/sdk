# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/sixtyseven.js";

let value: OneHundredAndNine = {
  domain: "ripe-yak.info",
  zone: true,
  initiator: "user",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `zone`                                                   | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `initiator`                                              | [models.PayloadInitiator](../models/payloadinitiator.md) | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `previousZone`                                           | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |