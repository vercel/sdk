# ThreeHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFour } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: ThreeHundredAndFortyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 3131.37,
    previousSpend: [],
    notifiedAt: [
      9539.89,
    ],
    createdAt: 6510.67,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload344Budget](../models/usereventpayload344budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |