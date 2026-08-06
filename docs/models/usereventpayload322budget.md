# UserEventPayload322Budget

## Example Usage

```typescript
import { UserEventPayload322Budget } from "@vercel/sdk/models/removedprojects.js";

let value: UserEventPayload322Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 7117.51,
    previousSpend: [
      4181.09,
    ],
    notifiedAt: [
      6023.11,
      7068.08,
      4773.58,
    ],
    createdAt: 4411.84,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |