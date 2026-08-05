# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/usereventjobpayload968provider.js";

let value: OneHundredAndSixteen = {
  domain: "impartial-sediment.name",
  zone: false,
  initiator: "system",
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