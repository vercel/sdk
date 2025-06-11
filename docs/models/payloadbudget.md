# PayloadBudget

## Example Usage

```typescript
import { PayloadBudget } from "@vercel/sdk/models/userevent.js";

let value: PayloadBudget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 3089.34,
    previousSpend: [
      8881.12,
    ],
    notifiedAt: [
      6992.68,
      7286.47,
    ],
    createdAt: 3556.79,
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