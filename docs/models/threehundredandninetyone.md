# ThreeHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyOne } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndNinetyOne = {
  budget: {
    budgetItem: {
      createdAt: 3241.96,
      fixedBudget: 2755.3,
      id: "<id>",
      isActive: false,
      notifiedAt: [],
      previousSpend: [
        4343.08,
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
| `budget`                                                                   | [models.UserEventPayload391Budget](../models/usereventpayload391budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |