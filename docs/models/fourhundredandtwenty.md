# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: FourHundredAndTwenty = {
  budget: {
    budgetItem: {
      createdAt: 4335.71,
      fixedBudget: 3496.02,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        2337.67,
        5137.88,
        893.79,
      ],
      previousSpend: [
        8561.59,
        6577.04,
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
| `budget`                                                                   | [models.UserEventPayload420Budget](../models/usereventpayload420budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |