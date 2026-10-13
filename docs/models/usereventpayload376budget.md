# UserEventPayload376Budget

## Example Usage

```typescript
import { UserEventPayload376Budget } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: UserEventPayload376Budget = {
  budgetItem: {
    createdAt: 2066.76,
    fixedBudget: 6819.81,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      3157.85,
    ],
    previousSpend: [
      3651.44,
      295.87,
      6455.85,
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