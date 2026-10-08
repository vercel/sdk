# ThreeHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyNine } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndSixtyNine = {
  budget: {
    budgetItem: {
      createdAt: 4036.1,
      fixedBudget: 5656.83,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        1878.33,
        5718.47,
      ],
      previousSpend: [
        4780.7,
        3003.58,
        3026.59,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload369Budget](../models/usereventpayload369budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |