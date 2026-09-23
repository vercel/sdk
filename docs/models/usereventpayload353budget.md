# UserEventPayload353Budget

## Example Usage

```typescript
import { UserEventPayload353Budget } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload353Budget = {
  budgetItem: {
    createdAt: 1320.6,
    fixedBudget: 8049.41,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      4169.44,
      565.87,
      7853.9,
    ],
    previousSpend: [
      9153.58,
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