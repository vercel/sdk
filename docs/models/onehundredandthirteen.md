# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/jobprovider.js";

let value: OneHundredAndThirteen = {
  domain: "blushing-grass.biz",
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