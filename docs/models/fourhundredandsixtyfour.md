# FourHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyFour } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndSixtyFour = {
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
| `next`                                                                         | [models.UserEventPayload464Next](../models/usereventpayload464next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload464Previous](../models/usereventpayload464previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |