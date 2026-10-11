# OneHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyThree } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: OneHundredAndFortyThree = {
  domain: "concerned-jump.com",
  initiator: "system",
  zone: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `initiator`                                              | [models.PayloadInitiator](../models/payloadinitiator.md) | :heavy_check_mark:                                       | N/A                                                      |
| `previousZone`                                           | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `source`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `zone`                                                   | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |