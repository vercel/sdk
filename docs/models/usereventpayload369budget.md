# UserEventPayload369Budget

## Example Usage

```typescript
import { UserEventPayload369Budget } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: UserEventPayload369Budget = {
  budgetItem: {
    createdAt: 4036.1,
    fixedBudget: 5656.83,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      1878.33,
      5718.47,
    ],
    previousSpend: [
      4780.7,
      3003.58,
      3026.59,
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