# ThreeHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyTwo } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: ThreeHundredAndSixtyTwo = {
  budget: {
    budgetItem: {
      createdAt: 6343.73,
      fixedBudget: 3035.81,
      id: "<id>",
      isActive: true,
      notifiedAt: [],
      previousSpend: [
        271.57,
        1105.44,
        2042.55,
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
| `budget`                                                                   | [models.UserEventPayload362Budget](../models/usereventpayload362budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |