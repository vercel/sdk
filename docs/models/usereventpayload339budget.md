# UserEventPayload339Budget

## Example Usage

```typescript
import { UserEventPayload339Budget } from "@vercel/sdk/models/usereventpayload339budget.js";

let value: UserEventPayload339Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 5979.92,
    previousSpend: [],
    notifiedAt: [],
    createdAt: 8732.33,
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