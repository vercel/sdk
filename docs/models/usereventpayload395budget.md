# UserEventPayload395Budget

## Example Usage

```typescript
import { UserEventPayload395Budget } from "@vercel/sdk/models/principalintegration.js";

let value: UserEventPayload395Budget = {
  budgetItem: {
    createdAt: 4442.23,
    fixedBudget: 1151.42,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      5141.93,
      195.48,
    ],
    previousSpend: [
      3953.01,
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