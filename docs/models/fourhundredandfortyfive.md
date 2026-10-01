# FourHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFive } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndFortyFive = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload445Next](../models/usereventpayload445next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload445Previous](../models/usereventpayload445previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |