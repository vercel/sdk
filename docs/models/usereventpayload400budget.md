# UserEventPayload400Budget

## Example Usage

```typescript
import { UserEventPayload400Budget } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: UserEventPayload400Budget = {
  budgetItem: {
    createdAt: 5551.46,
    fixedBudget: 9220.05,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      3529.32,
      4855.79,
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