# FiveHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSix } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FiveHundredAndSix = {
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
| `next`                                                                         | [models.UserEventPayload506Next](../models/usereventpayload506next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload506Previous](../models/usereventpayload506previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |