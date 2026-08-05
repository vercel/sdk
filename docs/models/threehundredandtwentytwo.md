# ThreeHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyTwo } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndTwentyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 6489.93,
    previousSpend: [],
    notifiedAt: [
      5815.62,
      6432.43,
      8431.21,
    ],
    createdAt: 6163.52,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload322Budget](../models/usereventpayload322budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |