# ThreeHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyEight } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndFortyEight = {
  next: {
    enabled: false,
    scope: "private",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload348Previous](../models/usereventpayload348previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload348Next](../models/usereventpayload348next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |