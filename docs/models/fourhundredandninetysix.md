# FourHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetySix } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FourHundredAndNinetySix = {
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
| `next`                                                                         | [models.UserEventPayload496Next](../models/usereventpayload496next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload496Previous](../models/usereventpayload496previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |