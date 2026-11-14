# FourHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySeven } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FourHundredAndEightySeven = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload487Next](../models/usereventpayload487next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload487Previous](../models/usereventpayload487previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |