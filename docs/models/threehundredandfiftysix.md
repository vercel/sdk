# ThreeHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySix } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: ThreeHundredAndFiftySix = {
  budget: {
    budgetItem: {
      createdAt: 9555.11,
      fixedBudget: 8796.34,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        5682.82,
        4047.88,
      ],
      previousSpend: [
        608.58,
        2365.41,
        1990.89,
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
| `budget`                                                                   | [models.UserEventPayload356Budget](../models/usereventpayload356budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |