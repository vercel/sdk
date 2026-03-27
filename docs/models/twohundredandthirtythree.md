# TwoHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload221previous.js";

let value: TwoHundredAndThirtyThree = {
  next: {
    enabled: true,
    scope: "private",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload233Previous](../models/usereventpayload233previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload233Next](../models/usereventpayload233next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |