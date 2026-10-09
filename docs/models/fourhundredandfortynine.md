# FourHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyNine } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndFortyNine = {
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
| `next`                                                                         | [models.UserEventPayload449Next](../models/usereventpayload449next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload449Previous](../models/usereventpayload449previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |