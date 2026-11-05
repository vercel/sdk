# FourHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: FourHundredAndSeventyFive = {
  next: {
    enabled: true,
    totpVerified: true,
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
| `next`                                                                         | [models.UserEventPayload475Next](../models/usereventpayload475next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload475Previous](../models/usereventpayload475previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |