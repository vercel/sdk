# FourHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySix } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndSeventySix = {
  next: {
    enabled: false,
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
| `next`                                                                         | [models.UserEventPayload476Next](../models/usereventpayload476next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload476Previous](../models/usereventpayload476previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |