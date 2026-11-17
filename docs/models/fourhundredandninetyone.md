# FourHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyOne } from "@vercel/sdk/models/fourhundredandnineteen.js";

let value: FourHundredAndNinetyOne = {
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
| `next`                                                                         | [models.UserEventPayload491Next](../models/usereventpayload491next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload491Previous](../models/usereventpayload491previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |