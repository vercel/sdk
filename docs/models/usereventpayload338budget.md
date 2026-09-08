# UserEventPayload338Budget

## Example Usage

```typescript
import { UserEventPayload338Budget } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: UserEventPayload338Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 8758.82,
    previousSpend: [
      4801.49,
    ],
    notifiedAt: [
      2546.7,
    ],
    createdAt: 1670.09,
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