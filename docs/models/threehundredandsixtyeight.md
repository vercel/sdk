# ThreeHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyEight } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: ThreeHundredAndSixtyEight = {
  previous: {
    enabled: false,
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
| `previous`                                                                     | [models.UserEventPayload368Previous](../models/usereventpayload368previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload368Next](../models/usereventpayload368next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |