# ThreeHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFive } from "@vercel/sdk/models/usereventpayload327geolocationnames.js";

let value: ThreeHundredAndFortyFive = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload345Previous](../models/usereventpayload345previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload345Next](../models/usereventpayload345next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |