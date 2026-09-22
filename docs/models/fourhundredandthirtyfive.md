# FourHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFive } from "@vercel/sdk/models/fourhundredandten.js";

let value: FourHundredAndThirtyFive = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload435Next](../models/usereventpayload435next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload435Previous](../models/usereventpayload435previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |