# FourHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyOne } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndTwentyOne = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload421Next](../models/usereventpayload421next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload421Previous](../models/usereventpayload421previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |