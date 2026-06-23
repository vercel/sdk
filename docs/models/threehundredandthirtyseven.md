# ThreeHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySeven } from "@vercel/sdk/models/threehundredandfive.js";

let value: ThreeHundredAndThirtySeven = {
  previous: {
    enabled: false,
    totpVerified: false,
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
| `previous`                                                                     | [models.UserEventPayload337Previous](../models/usereventpayload337previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload337Next](../models/usereventpayload337next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |