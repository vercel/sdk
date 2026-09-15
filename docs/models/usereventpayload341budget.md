# UserEventPayload341Budget

## Example Usage

```typescript
import { UserEventPayload341Budget } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: UserEventPayload341Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 8533.42,
    previousSpend: [
      9625.9,
    ],
    notifiedAt: [
      3008.5,
    ],
    createdAt: 875.15,
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