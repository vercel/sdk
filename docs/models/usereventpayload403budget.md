# UserEventPayload403Budget

## Example Usage

```typescript
import { UserEventPayload403Budget } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: UserEventPayload403Budget = {
  budgetItem: {
    createdAt: 1526.12,
    fixedBudget: 892.93,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      5032.95,
      6602.41,
      759.55,
    ],
    previousSpend: [
      3564.95,
      6595.98,
      5840.01,
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