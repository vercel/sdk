# ThreeHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFour } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndSixtyFour = {
  budget: {
    budgetItem: {
      createdAt: 5522.65,
      fixedBudget: 3961.57,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        8255.8,
      ],
      previousSpend: [
        9902.65,
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
| `budget`                                                                   | [models.UserEventPayload364Budget](../models/usereventpayload364budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |