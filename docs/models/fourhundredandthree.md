# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundredAndThree = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload403Previous](../models/usereventpayload403previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload403Next](../models/usereventpayload403next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |