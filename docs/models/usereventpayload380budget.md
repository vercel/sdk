# UserEventPayload380Budget

## Example Usage

```typescript
import { UserEventPayload380Budget } from "@vercel/sdk/models/usereventpayload318project.js";

let value: UserEventPayload380Budget = {
  budgetItem: {
    createdAt: 6275.72,
    fixedBudget: 8235.43,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6303.14,
    ],
    previousSpend: [
      7135.99,
      5019.96,
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