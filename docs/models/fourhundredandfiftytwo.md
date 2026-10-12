# FourHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyTwo } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndFiftyTwo = {
  next: {
    enabled: false,
    totpVerified: false,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload452Next](../models/usereventpayload452next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload452Previous](../models/usereventpayload452previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |