# UserEventPayload399Budget

## Example Usage

```typescript
import { UserEventPayload399Budget } from "@vercel/sdk/models/usereventprincipal4.js";

let value: UserEventPayload399Budget = {
  budgetItem: {
    createdAt: 6830.94,
    fixedBudget: 1128.98,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2858.39,
      7649.41,
      1687.73,
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