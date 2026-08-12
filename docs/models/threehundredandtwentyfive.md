# ThreeHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFive } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndTwentyFive = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 6510.74,
      previousSpend: [
        2512.85,
      ],
      notifiedAt: [],
      createdAt: 2639,
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
| `budget`                                                                   | [models.UserEventPayload325Budget](../models/usereventpayload325budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |