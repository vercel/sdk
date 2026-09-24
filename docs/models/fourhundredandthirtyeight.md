# FourHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyEight } from "@vercel/sdk/models/fourhundredandthirteen.js";

let value: FourHundredAndThirtyEight = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload438Next](../models/usereventpayload438next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload438Previous](../models/usereventpayload438previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |