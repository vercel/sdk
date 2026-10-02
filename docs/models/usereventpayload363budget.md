# UserEventPayload363Budget

## Example Usage

```typescript
import { UserEventPayload363Budget } from "@vercel/sdk/models/threehundredandsixty.js";

let value: UserEventPayload363Budget = {
  budgetItem: {
    createdAt: 554.43,
    fixedBudget: 4238.03,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      9937.32,
    ],
    previousSpend: [
      7110.93,
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