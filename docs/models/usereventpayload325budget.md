# UserEventPayload325Budget

## Example Usage

```typescript
import { UserEventPayload325Budget } from "@vercel/sdk/models/addedprojects.js";

let value: UserEventPayload325Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 6510.74,
    previousSpend: [
      2512.85,
    ],
    notifiedAt: [],
    createdAt: 2639,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |