# FourHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FourHundredAndSeventyTwo = {
  next: {
    enabled: false,
    totpVerified: true,
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
| `next`                                                                         | [models.UserEventPayload472Next](../models/usereventpayload472next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload472Previous](../models/usereventpayload472previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |