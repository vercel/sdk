# TwoHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFour } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndThirtyFour = {
  next: {
    enabled: true,
    scope: "all",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload234Previous](../models/usereventpayload234previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload234Next](../models/usereventpayload234next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |