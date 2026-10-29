# FourHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySix } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndSixtySix = {
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
| `next`                                                                         | [models.UserEventPayload466Next](../models/usereventpayload466next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload466Previous](../models/usereventpayload466previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |