# FourHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTen } from "@vercel/sdk/models/fourhundredandthree.js";

let value: FourHundredAndTen = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload410Previous](../models/usereventpayload410previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload410Next](../models/usereventpayload410next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |