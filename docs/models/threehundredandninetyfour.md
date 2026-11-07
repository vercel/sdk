# ThreeHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFour } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndNinetyFour = {
  budget: {
    budgetItem: {
      createdAt: 7766.26,
      fixedBudget: 1225.19,
      id: "<id>",
      isActive: true,
      notifiedAt: [],
      previousSpend: [
        4521.24,
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
| `budget`                                                                   | [models.UserEventPayload394Budget](../models/usereventpayload394budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |