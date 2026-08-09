# UserEventPayload323Budget

## Example Usage

```typescript
import { UserEventPayload323Budget } from "@vercel/sdk/models/removedprojects.js";

let value: UserEventPayload323Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 4672.39,
    previousSpend: [
      9772.69,
    ],
    notifiedAt: [
      691.01,
    ],
    createdAt: 4209.31,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |