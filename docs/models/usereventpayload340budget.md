# UserEventPayload340Budget

## Example Usage

```typescript
import { UserEventPayload340Budget } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: UserEventPayload340Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 4860.38,
    previousSpend: [],
    notifiedAt: [
      2606.92,
      4992.81,
    ],
    createdAt: 2429.34,
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