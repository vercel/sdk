# FourHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNineteen } from "@vercel/sdk/models/threehundredandninetynine.js";

let value: FourHundredAndNineteen = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload419Next](../models/usereventpayload419next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload419Previous](../models/usereventpayload419previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |