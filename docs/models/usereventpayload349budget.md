# UserEventPayload349Budget

## Example Usage

```typescript
import { UserEventPayload349Budget } from "@vercel/sdk/models/payloadcountry.js";

let value: UserEventPayload349Budget = {
  budgetItem: {
    createdAt: 204.55,
    fixedBudget: 2023.55,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      6582.94,
      1639.27,
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