# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndTwentySeven = {
  budget: {
    type: "fixed",
    fixedBudget: 1375.78,
    previousSpend: [],
    notifiedAt: [
      9733.92,
      642.75,
      1211.28,
    ],
    createdAt: 5092.48,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload327Budget](../models/usereventpayload327budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |