# UserEventPayload385Budget

## Example Usage

```typescript
import { UserEventPayload385Budget } from "@vercel/sdk/models/usereventpayload325project.js";

let value: UserEventPayload385Budget = {
  budgetItem: {
    createdAt: 2896.61,
    fixedBudget: 3572.71,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6500.26,
      5091.27,
    ],
    previousSpend: [
      1818.82,
      2114.21,
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