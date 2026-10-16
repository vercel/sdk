# UserEventPayload377Budget

## Example Usage

```typescript
import { UserEventPayload377Budget } from "@vercel/sdk/models/threehundredandfourteen.js";

let value: UserEventPayload377Budget = {
  budgetItem: {
    createdAt: 3725.29,
    fixedBudget: 3250.88,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      7905.34,
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