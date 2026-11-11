# FourHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload471actortype.js";

let value: FourHundredAndEightyTwo = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload482Next](../models/usereventpayload482next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload482Previous](../models/usereventpayload482previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |