# UserEventPayload419Budget

## Example Usage

```typescript
import { UserEventPayload419Budget } from "@vercel/sdk/models/usereventpayload385project.js";

let value: UserEventPayload419Budget = {
  budgetItem: {
    createdAt: 4245.13,
    fixedBudget: 5966.11,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      8093.02,
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