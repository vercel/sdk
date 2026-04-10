# TwoHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyNine } from "@vercel/sdk/models/twohundredandtwentyeight.js";

let value: TwoHundredAndThirtyNine = {
  next: {
    enabled: true,
    scope: "public",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload239Previous](../models/usereventpayload239previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload239Next](../models/usereventpayload239next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |