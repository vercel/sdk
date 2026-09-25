# FourHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFour } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: FourHundredAndThirtyFour = {
  next: {
    enabled: false,
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
| `next`                                                                         | [models.UserEventPayload434Next](../models/usereventpayload434next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload434Previous](../models/usereventpayload434previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |