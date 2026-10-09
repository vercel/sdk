# UserEventPayload371Budget

## Example Usage

```typescript
import { UserEventPayload371Budget } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: UserEventPayload371Budget = {
  budgetItem: {
    createdAt: 8268.61,
    fixedBudget: 5657.02,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      8412.68,
      4890.05,
      3038.72,
    ],
    previousSpend: [
      8456.5,
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