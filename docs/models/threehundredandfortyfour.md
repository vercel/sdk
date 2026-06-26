# ThreeHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFour } from "@vercel/sdk/models/threehundredandtwelve.js";

let value: ThreeHundredAndFortyFour = {
  previous: {
    enabled: true,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload344Previous](../models/usereventpayload344previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload344Next](../models/usereventpayload344next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |