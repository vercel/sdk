# UserEventPayload414Budget

## Example Usage

```typescript
import { UserEventPayload414Budget } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: UserEventPayload414Budget = {
  budgetItem: {
    createdAt: 6784.51,
    fixedBudget: 9156.54,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      7197.25,
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