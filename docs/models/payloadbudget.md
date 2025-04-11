# PayloadBudget

## Example Usage

```typescript
import { PayloadBudget } from "@vercel/sdk/models/userevent.js";

let value: PayloadBudget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 3089.34,
    previousSpend: [
      2942.51,
    ],
    notifiedAt: [
      8881.12,
    ],
    createdAt: 5077.9,
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