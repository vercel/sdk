# ThreeHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyEight } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: ThreeHundredAndThirtyEight = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 8758.82,
      previousSpend: [
        4801.49,
      ],
      notifiedAt: [
        2546.7,
      ],
      createdAt: 1670.09,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload338Budget](../models/usereventpayload338budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |