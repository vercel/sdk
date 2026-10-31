# FourHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FourHundredAndSeventySeven = {
  next: {
    enabled: true,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload477Next](../models/usereventpayload477next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload477Previous](../models/usereventpayload477previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |