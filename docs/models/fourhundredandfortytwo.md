# FourHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyTwo } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: FourHundredAndFortyTwo = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload442Next](../models/usereventpayload442next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload442Previous](../models/usereventpayload442previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |