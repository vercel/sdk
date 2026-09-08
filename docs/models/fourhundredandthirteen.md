# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndThirteen = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload413Previous](../models/usereventpayload413previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload413Next](../models/usereventpayload413next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |