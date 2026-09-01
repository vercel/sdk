# ThreeHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySeven } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndThirtySeven = {
  budget: {
    type: "fixed",
    fixedBudget: 9736.14,
    previousSpend: [
      1258.6,
      4310.82,
    ],
    notifiedAt: [
      3049.87,
      339.39,
      3860.82,
    ],
    createdAt: 1424.29,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload337Budget](../models/usereventpayload337budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |