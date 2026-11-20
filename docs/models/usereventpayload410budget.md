# UserEventPayload410Budget

## Example Usage

```typescript
import { UserEventPayload410Budget } from "@vercel/sdk/models/oldssoprotection2.js";

let value: UserEventPayload410Budget = {
  budgetItem: {
    createdAt: 6091.93,
    fixedBudget: 5022.96,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      5110.69,
      6062.38,
      1999.65,
    ],
    previousSpend: [
      1319.54,
      7602.32,
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