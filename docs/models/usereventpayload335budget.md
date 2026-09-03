# UserEventPayload335Budget

## Example Usage

```typescript
import { UserEventPayload335Budget } from "@vercel/sdk/models/usereventpayload335budget.js";

let value: UserEventPayload335Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 8980.57,
    previousSpend: [
      1448.67,
      885.26,
      7607.12,
    ],
    notifiedAt: [
      449.74,
      9042.33,
      4595.16,
    ],
    createdAt: 4704.67,
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