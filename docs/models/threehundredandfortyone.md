# ThreeHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyOne } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: ThreeHundredAndFortyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 2418.45,
    previousSpend: [],
    notifiedAt: [
      2860.37,
      8564.14,
      688.57,
    ],
    createdAt: 3486.86,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload341Budget](../models/usereventpayload341budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |