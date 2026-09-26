# ThreeHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventy } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: ThreeHundredAndSeventy = {
  next: {
    enabled: false,
    includeDrafts: true,
    scope: "public",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload370Next](../models/usereventpayload370next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload370Previous](../models/usereventpayload370previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |