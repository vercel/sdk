# UserEventPayload328Budget

## Example Usage

```typescript
import { UserEventPayload328Budget } from "@vercel/sdk/models/usereventfactors1.js";

let value: UserEventPayload328Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 4477.83,
    previousSpend: [
      5450.78,
      1871.96,
    ],
    notifiedAt: [
      2052.72,
      5386.15,
    ],
    createdAt: 5547.18,
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