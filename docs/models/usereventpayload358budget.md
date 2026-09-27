# UserEventPayload358Budget

## Example Usage

```typescript
import { UserEventPayload358Budget } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: UserEventPayload358Budget = {
  budgetItem: {
    createdAt: 2658.1,
    fixedBudget: 7920.13,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      6659.3,
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