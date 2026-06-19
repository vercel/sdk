# ThreeHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySix } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndThirtySix = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload336Previous](../models/usereventpayload336previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload336Next](../models/usereventpayload336next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |