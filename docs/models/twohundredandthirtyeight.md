# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndThirtyEight = {
  next: {
    enabled: false,
    scope: "all",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload238Previous](../models/usereventpayload238previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload238Next](../models/usereventpayload238next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |