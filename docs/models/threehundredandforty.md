# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: ThreeHundredAndForty = {
  budget: {
    type: "fixed",
    fixedBudget: 4639.91,
    previousSpend: [
      9236.49,
      740.38,
      3981.42,
    ],
    notifiedAt: [
      5064.17,
      5991.43,
      957.15,
    ],
    createdAt: 9909.23,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload340Budget](../models/usereventpayload340budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |