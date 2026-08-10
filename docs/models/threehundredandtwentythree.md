# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/removedprojects.js";

let value: ThreeHundredAndTwentyThree = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4672.39,
      previousSpend: [
        9772.69,
      ],
      notifiedAt: [
        691.01,
      ],
      createdAt: 4209.31,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload323Budget](../models/usereventpayload323budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |