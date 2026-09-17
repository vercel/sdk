# ThreeHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyEight } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFortyEight = {
  budget: {
    createdAt: 9528.58,
    fixedBudget: 3559.04,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      2955.34,
    ],
    previousSpend: [
      8613.93,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload348Budget](../models/usereventpayload348budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |