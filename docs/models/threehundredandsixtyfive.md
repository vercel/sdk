# ThreeHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFive } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndSixtyFive = {
  budget: {
    budgetItem: {
      createdAt: 8520.81,
      fixedBudget: 5764.15,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        9290.56,
        7882.45,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload365Budget](../models/usereventpayload365budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |