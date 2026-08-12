# ThreeHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyTwo } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: ThreeHundredAndNinetyTwo = {
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
| `previous`                                                                     | [models.UserEventPayload392Previous](../models/usereventpayload392previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload392Next](../models/usereventpayload392next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |