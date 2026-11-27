# UserEventPayload420Budget

## Example Usage

```typescript
import { UserEventPayload420Budget } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: UserEventPayload420Budget = {
  budgetItem: {
    createdAt: 4335.71,
    fixedBudget: 3496.02,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      2337.67,
      5137.88,
      893.79,
    ],
    previousSpend: [
      8561.59,
      6577.04,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |