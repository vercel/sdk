# FourHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFourteen } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndFourteen = {
  budget: {
    budgetItem: {
      createdAt: 6784.51,
      fixedBudget: 9156.54,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        7197.25,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload414Budget](../models/usereventpayload414budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |