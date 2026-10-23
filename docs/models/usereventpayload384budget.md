# UserEventPayload384Budget

## Example Usage

```typescript
import { UserEventPayload384Budget } from "@vercel/sdk/models/threehundredandtwentythree.js";

let value: UserEventPayload384Budget = {
  budgetItem: {
    createdAt: 4123.15,
    fixedBudget: 4390.92,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      510.29,
    ],
    previousSpend: [
      9129.73,
      9062.78,
      4664.38,
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