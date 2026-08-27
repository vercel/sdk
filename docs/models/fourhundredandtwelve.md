# FourHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwelve } from "@vercel/sdk/models/fourhundred.js";

let value: FourHundredAndTwelve = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload412Previous](../models/usereventpayload412previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload412Next](../models/usereventpayload412next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |