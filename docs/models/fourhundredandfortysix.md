# FourHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySix } from "@vercel/sdk/models/fourhundredandtwentyone.js";

let value: FourHundredAndFortySix = {
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
| `next`                                                                         | [models.UserEventPayload446Next](../models/usereventpayload446next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload446Previous](../models/usereventpayload446previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |