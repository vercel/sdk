# ThreeHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyEight } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndSeventyEight = {
  previous: {
    enabled: false,
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
| `previous`                                                                     | [models.UserEventPayload378Previous](../models/usereventpayload378previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload378Next](../models/usereventpayload378next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |