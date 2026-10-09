# FourHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFour } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndFiftyFour = {
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
| `next`                                                                         | [models.UserEventPayload454Next](../models/usereventpayload454next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload454Previous](../models/usereventpayload454previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |