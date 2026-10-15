# FourHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFive } from "@vercel/sdk/models/env.js";

let value: FourHundredAndFiftyFive = {
  next: {
    enabled: false,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload455Next](../models/usereventpayload455next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload455Previous](../models/usereventpayload455previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |