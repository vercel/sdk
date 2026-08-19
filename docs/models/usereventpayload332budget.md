# UserEventPayload332Budget

## Example Usage

```typescript
import { UserEventPayload332Budget } from "@vercel/sdk/models/usereventpayload327geolocationmostspecificsubdivisionnames.js";

let value: UserEventPayload332Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 4553.8,
    previousSpend: [
      9968.67,
    ],
    notifiedAt: [],
    createdAt: 3905.45,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |