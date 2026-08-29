# UserEventPayload333Budget

## Example Usage

```typescript
import { UserEventPayload333Budget } from "@vercel/sdk/models/usereventpayload333budget.js";

let value: UserEventPayload333Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 1751.36,
    previousSpend: [
      235.77,
    ],
    notifiedAt: [
      239.72,
    ],
    createdAt: 3438.14,
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