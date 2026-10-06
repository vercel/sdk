# UserEventPayload364Budget

## Example Usage

```typescript
import { UserEventPayload364Budget } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload364Budget = {
  budgetItem: {
    createdAt: 5522.65,
    fixedBudget: 3961.57,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      8255.8,
    ],
    previousSpend: [
      9902.65,
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