# UserEventPayload320Budget

## Example Usage

```typescript
import { UserEventPayload320Budget } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: UserEventPayload320Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 5631.45,
    previousSpend: [
      710.11,
      2454.05,
      7131.05,
    ],
    notifiedAt: [],
    createdAt: 8724.86,
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