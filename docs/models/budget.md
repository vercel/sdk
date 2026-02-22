# Budget

## Example Usage

```typescript
import { Budget } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 268.4,
    previousSpend: [
      2211.33,
      3066.93,
      9049.6,
    ],
    notifiedAt: [],
    createdAt: 2535.69,
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