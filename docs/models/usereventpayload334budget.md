# UserEventPayload334Budget

## Example Usage

```typescript
import { UserEventPayload334Budget } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: UserEventPayload334Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 9582.79,
    previousSpend: [
      3671.73,
      7939.42,
      1207.07,
    ],
    notifiedAt: [
      7090.83,
    ],
    createdAt: 1626.44,
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