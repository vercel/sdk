# FourHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighty } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FourHundredAndEighty = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload480Next](../models/usereventpayload480next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload480Previous](../models/usereventpayload480previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |