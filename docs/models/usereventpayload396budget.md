# UserEventPayload396Budget

## Example Usage

```typescript
import { UserEventPayload396Budget } from "@vercel/sdk/models/usereventprincipal4.js";

let value: UserEventPayload396Budget = {
  budgetItem: {
    createdAt: 6390.81,
    fixedBudget: 8166.56,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      1949.13,
    ],
    previousSpend: [
      7873.12,
      7712.82,
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