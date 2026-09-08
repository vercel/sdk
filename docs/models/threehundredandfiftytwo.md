# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: ThreeHundredAndFiftyTwo = {
  next: {
    enabled: true,
    scope: "all",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload352Previous](../models/usereventpayload352previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload352Next](../models/usereventpayload352next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |