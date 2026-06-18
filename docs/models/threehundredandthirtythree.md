# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndThirtyThree = {
  previous: {
    enabled: true,
    totpVerified: true,
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
| `previous`                                                                     | [models.UserEventPayload333Previous](../models/usereventpayload333previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload333Next](../models/usereventpayload333next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |