# FourHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyOne } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSeventyOne = {
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
| `next`                                                                         | [models.UserEventPayload471Next](../models/usereventpayload471next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload471Previous](../models/usereventpayload471previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |