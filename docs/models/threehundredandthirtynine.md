# ThreeHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyNine } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: ThreeHundredAndThirtyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 4205.37,
    previousSpend: [
      9486.38,
      6523.07,
      4581.03,
    ],
    notifiedAt: [
      2506.29,
      3728.13,
      2607.08,
    ],
    createdAt: 5843.89,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload339Budget](../models/usereventpayload339budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |