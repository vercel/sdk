# ThreeHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFive } from "@vercel/sdk/models/usereventpayload325project.js";

let value: ThreeHundredAndEightyFive = {
  budget: {
    budgetItem: {
      createdAt: 2896.61,
      fixedBudget: 3572.71,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        6500.26,
        5091.27,
      ],
      previousSpend: [
        1818.82,
        2114.21,
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
| `budget`                                                                   | [models.UserEventPayload385Budget](../models/usereventpayload385budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |