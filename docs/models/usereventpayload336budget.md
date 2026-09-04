# UserEventPayload336Budget

## Example Usage

```typescript
import { UserEventPayload336Budget } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: UserEventPayload336Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 1908.34,
    previousSpend: [
      4519.42,
      7039.92,
    ],
    notifiedAt: [],
    createdAt: 9599.28,
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