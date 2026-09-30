# FourHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndForty } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndForty = {
  next: {
    enabled: false,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload440Next](../models/usereventpayload440next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload440Previous](../models/usereventpayload440previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |