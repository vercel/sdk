# FourHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySix } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FourHundredAndEightySix = {
  next: {
    enabled: false,
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
| `next`                                                                         | [models.UserEventPayload486Next](../models/usereventpayload486next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload486Previous](../models/usereventpayload486previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |