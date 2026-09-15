# FourHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyOne } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndTwentyOne = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload421Previous](../models/usereventpayload421previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload421Next](../models/usereventpayload421next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |