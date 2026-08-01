# UserEventPayload315Budget

## Example Usage

```typescript
import { UserEventPayload315Budget } from "@vercel/sdk/models/ssoprotection2.js";

let value: UserEventPayload315Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 5653.56,
    previousSpend: [
      113.26,
      7139.24,
    ],
    notifiedAt: [
      2483.29,
      4262.12,
      3812.34,
    ],
    createdAt: 3465.41,
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