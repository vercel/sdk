# FiveHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndOne } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FiveHundredAndOne = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload501Next](../models/usereventpayload501next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload501Previous](../models/usereventpayload501previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |