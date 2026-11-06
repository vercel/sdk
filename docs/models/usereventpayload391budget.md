# UserEventPayload391Budget

## Example Usage

```typescript
import { UserEventPayload391Budget } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload391Budget = {
  budgetItem: {
    createdAt: 3241.96,
    fixedBudget: 2755.3,
    id: "<id>",
    isActive: false,
    notifiedAt: [],
    previousSpend: [
      4343.08,
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