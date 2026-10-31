# UserEventPayload388Budget

## Example Usage

```typescript
import { UserEventPayload388Budget } from "@vercel/sdk/models/threehundredandthirtytwo.js";

let value: UserEventPayload388Budget = {
  budgetItem: {
    createdAt: 3074.12,
    fixedBudget: 1288.2,
    id: "<id>",
    isActive: false,
    notifiedAt: [],
    previousSpend: [
      8952.68,
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