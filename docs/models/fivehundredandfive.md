# FiveHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFive } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FiveHundredAndFive = {
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
| `next`                                                                         | [models.UserEventPayload505Next](../models/usereventpayload505next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload505Previous](../models/usereventpayload505previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |