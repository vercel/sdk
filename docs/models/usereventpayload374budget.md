# UserEventPayload374Budget

## Example Usage

```typescript
import { UserEventPayload374Budget } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: UserEventPayload374Budget = {
  budgetItem: {
    createdAt: 5989.71,
    fixedBudget: 318.33,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      9923.38,
      8693.43,
    ],
    previousSpend: [
      76.35,
      2273.7,
      2380.23,
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