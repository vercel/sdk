# FourHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySeven } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: FourHundredAndFortySeven = {
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
| `next`                                                                         | [models.UserEventPayload447Next](../models/usereventpayload447next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload447Previous](../models/usereventpayload447previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |