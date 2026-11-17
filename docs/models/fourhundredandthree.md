# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndThree = {
  budget: {
    budgetItem: {
      createdAt: 1526.12,
      fixedBudget: 892.93,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        5032.95,
        6602.41,
        759.55,
      ],
      previousSpend: [
        3564.95,
        6595.98,
        5840.01,
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
| `budget`                                                                   | [models.UserEventPayload403Budget](../models/usereventpayload403budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |