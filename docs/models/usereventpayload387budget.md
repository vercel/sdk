# UserEventPayload387Budget

## Example Usage

```typescript
import { UserEventPayload387Budget } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: UserEventPayload387Budget = {
  budgetItem: {
    createdAt: 1895.86,
    fixedBudget: 264.23,
    id: "<id>",
    isActive: false,
    notifiedAt: [],
    previousSpend: [
      9904.39,
      4893.83,
      13.42,
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