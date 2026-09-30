# UserEventPayload362Budget

## Example Usage

```typescript
import { UserEventPayload362Budget } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: UserEventPayload362Budget = {
  budgetItem: {
    createdAt: 6343.73,
    fixedBudget: 3035.81,
    id: "<id>",
    isActive: true,
    notifiedAt: [],
    previousSpend: [
      271.57,
      1105.44,
      2042.55,
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