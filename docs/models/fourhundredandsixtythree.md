# FourHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyThree } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndSixtyThree = {
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
| `next`                                                                         | [models.UserEventPayload463Next](../models/usereventpayload463next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload463Previous](../models/usereventpayload463previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |