# FourHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyTwo } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndFiftyTwo = {
  next: {
    enabled: false,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload452Next](../models/usereventpayload452next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload452Previous](../models/usereventpayload452previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |