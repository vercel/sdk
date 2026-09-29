# FourHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySeven } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndThirtySeven = {
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
| `next`                                                                         | [models.UserEventPayload437Next](../models/usereventpayload437next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload437Previous](../models/usereventpayload437previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |