# ThreeHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyThree } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSixtyThree = {
  budget: {
    budgetItem: {
      createdAt: 554.43,
      fixedBudget: 4238.03,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        9937.32,
      ],
      previousSpend: [
        7110.93,
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
| `budget`                                                                   | [models.UserEventPayload363Budget](../models/usereventpayload363budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |