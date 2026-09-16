# UserEventPayload344Budget

## Example Usage

```typescript
import { UserEventPayload344Budget } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload344Budget = {
  budgetItem: {
    createdAt: 252.7,
    fixedBudget: 8822.54,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      8822.88,
      2480.26,
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