# ThreeHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFour } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndSeventyFour = {
  budget: {
    budgetItem: {
      createdAt: 5989.71,
      fixedBudget: 318.33,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        9923.38,
        8693.43,
      ],
      previousSpend: [
        76.35,
        2273.7,
        2380.23,
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
| `budget`                                                                   | [models.UserEventPayload374Budget](../models/usereventpayload374budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |