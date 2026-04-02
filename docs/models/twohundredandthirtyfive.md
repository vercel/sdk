# TwoHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFive } from "@vercel/sdk/models/twohundredandtwentyfour.js";

let value: TwoHundredAndThirtyFive = {
  next: {
    enabled: false,
    scope: "selected_repos",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload235Previous](../models/usereventpayload235previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload235Next](../models/usereventpayload235next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |