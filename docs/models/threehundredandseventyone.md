# ThreeHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyOne } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: ThreeHundredAndSeventyOne = {
  budget: {
    budgetItem: {
      createdAt: 8268.61,
      fixedBudget: 5657.02,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        8412.68,
        4890.05,
        3038.72,
      ],
      previousSpend: [
        8456.5,
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
| `budget`                                                                   | [models.UserEventPayload371Budget](../models/usereventpayload371budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |