# ThreeHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifty } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: ThreeHundredAndFifty = {
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
| `previous`                                                                     | [models.UserEventPayload350Previous](../models/usereventpayload350previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload350Next](../models/usereventpayload350next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |