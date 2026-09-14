# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndFortyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 7613.46,
    previousSpend: [
      2919.74,
      6495.37,
      8641.61,
    ],
    notifiedAt: [
      142.87,
      5903.77,
      7904.72,
    ],
    createdAt: 1392.73,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload342Budget](../models/usereventpayload342budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |