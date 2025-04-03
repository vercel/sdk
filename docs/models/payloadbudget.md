# PayloadBudget

## Example Usage

```typescript
import { PayloadBudget } from "@vercel/sdk/models/userevent.js";

let value: PayloadBudget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 2387.39,
    previousSpend: [
      9438.28,
    ],
    notifiedAt: [
      6867.84,
    ],
    createdAt: 2875.75,
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