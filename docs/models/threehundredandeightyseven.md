# ThreeHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySeven } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: ThreeHundredAndEightySeven = {
  budget: {
    budgetItem: {
      createdAt: 1895.86,
      fixedBudget: 264.23,
      id: "<id>",
      isActive: false,
      notifiedAt: [],
      previousSpend: [
        9904.39,
        4893.83,
        13.42,
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
| `budget`                                                                   | [models.UserEventPayload387Budget](../models/usereventpayload387budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |