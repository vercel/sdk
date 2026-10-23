# ThreeHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFour } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: ThreeHundredAndEightyFour = {
  budget: {
    budgetItem: {
      createdAt: 4123.15,
      fixedBudget: 4390.92,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        510.29,
      ],
      previousSpend: [
        9129.73,
        9062.78,
        4664.38,
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
| `budget`                                                                   | [models.UserEventPayload384Budget](../models/usereventpayload384budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |