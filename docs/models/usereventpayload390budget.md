# UserEventPayload390Budget

## Example Usage

```typescript
import { UserEventPayload390Budget } from "@vercel/sdk/models/consent.js";

let value: UserEventPayload390Budget = {
  budgetItem: {
    createdAt: 5810.8,
    fixedBudget: 4712.9,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      970.45,
      8918.84,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |