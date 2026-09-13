# ThreeHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFour } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndFiftyFour = {
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
| `previous`                                                                     | [models.UserEventPayload354Previous](../models/usereventpayload354previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload354Next](../models/usereventpayload354next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |