# UserEventPayload355Budget

## Example Usage

```typescript
import { UserEventPayload355Budget } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload355Budget = {
  budgetItem: {
    createdAt: 5665.11,
    fixedBudget: 8952.32,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6333.25,
    ],
    previousSpend: [
      2552.71,
      7167.3,
      4308.3,
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