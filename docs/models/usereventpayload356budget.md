# UserEventPayload356Budget

## Example Usage

```typescript
import { UserEventPayload356Budget } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: UserEventPayload356Budget = {
  budgetItem: {
    createdAt: 9555.11,
    fixedBudget: 8796.34,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      5682.82,
      4047.88,
    ],
    previousSpend: [
      608.58,
      2365.41,
      1990.89,
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