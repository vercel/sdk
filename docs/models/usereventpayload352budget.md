# UserEventPayload352Budget

## Example Usage

```typescript
import { UserEventPayload352Budget } from "@vercel/sdk/models/payloadcity.js";

let value: UserEventPayload352Budget = {
  budgetItem: {
    createdAt: 7668.85,
    fixedBudget: 5900.75,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      7484.22,
      4354.37,
    ],
    previousSpend: [
      2833.33,
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