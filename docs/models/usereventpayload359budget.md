# UserEventPayload359Budget

## Example Usage

```typescript
import { UserEventPayload359Budget } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: UserEventPayload359Budget = {
  budgetItem: {
    createdAt: 9849.43,
    fixedBudget: 5317.12,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      1593.8,
      970.32,
    ],
    previousSpend: [
      568.92,
      8182.5,
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