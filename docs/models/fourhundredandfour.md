# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/threehundredandninetytwo.js";

let value: FourHundredAndFour = {
  previous: {
    enabled: true,
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
| `previous`                                                                     | [models.UserEventPayload404Previous](../models/usereventpayload404previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload404Next](../models/usereventpayload404next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |