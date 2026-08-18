# UserEventPayload331Budget

## Example Usage

```typescript
import { UserEventPayload331Budget } from "@vercel/sdk/models/usereventpayload326geolocationmostspecificsubdivisionnames.js";

let value: UserEventPayload331Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 2482.34,
    previousSpend: [],
    notifiedAt: [
      5806.68,
      3942.6,
      3947.18,
    ],
    createdAt: 8901.76,
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