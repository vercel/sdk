# FourHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySix } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndTwentySix = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload426Next](../models/usereventpayload426next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload426Previous](../models/usereventpayload426previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |