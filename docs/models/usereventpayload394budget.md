# UserEventPayload394Budget

## Example Usage

```typescript
import { UserEventPayload394Budget } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload394Budget = {
  budgetItem: {
    createdAt: 7766.26,
    fixedBudget: 1225.19,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      4521.24,
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