# ThreeHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndThirtyTwo = {
  next: {
    enabled: true,
    scope: "private",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload332Previous](../models/usereventpayload332previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload332Next](../models/usereventpayload332next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |