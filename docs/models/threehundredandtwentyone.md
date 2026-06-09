# ThreeHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyOne } from "@vercel/sdk/models/twohundredandninety.js";

let value: ThreeHundredAndTwentyOne = {
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
| `previous`                                                                     | [models.UserEventPayload321Previous](../models/usereventpayload321previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload321Next](../models/usereventpayload321next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |