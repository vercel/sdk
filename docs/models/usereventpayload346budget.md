# UserEventPayload346Budget

## Example Usage

```typescript
import { UserEventPayload346Budget } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: UserEventPayload346Budget = {
  budgetItem: {
    createdAt: 9371.03,
    fixedBudget: 8606.07,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2423.52,
      7782.73,
    ],
    previousSpend: [
      397.47,
      9537.22,
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