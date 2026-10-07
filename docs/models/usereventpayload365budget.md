# UserEventPayload365Budget

## Example Usage

```typescript
import { UserEventPayload365Budget } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: UserEventPayload365Budget = {
  budgetItem: {
    createdAt: 8520.81,
    fixedBudget: 5764.15,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      9290.56,
      7882.45,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |