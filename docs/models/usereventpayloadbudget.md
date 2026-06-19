# UserEventPayloadBudget

## Example Usage

```typescript
import { UserEventPayloadBudget } from "@vercel/sdk/models/consent.js";

let value: UserEventPayloadBudget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 5322.24,
    previousSpend: [],
    notifiedAt: [
      7813.67,
      6171.37,
    ],
    createdAt: 7480.89,
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