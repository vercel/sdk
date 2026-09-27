# FourHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySix } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndThirtySix = {
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
| `next`                                                                         | [models.UserEventPayload436Next](../models/usereventpayload436next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload436Previous](../models/usereventpayload436previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |