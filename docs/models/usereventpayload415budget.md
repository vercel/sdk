# UserEventPayload415Budget

## Example Usage

```typescript
import { UserEventPayload415Budget } from "@vercel/sdk/models/payloadstaticips.js";

let value: UserEventPayload415Budget = {
  budgetItem: {
    createdAt: 8193.79,
    fixedBudget: 452.57,
    id: "<id>",
    isActive: false,
    notifiedAt: [],
    previousSpend: [
      5760.81,
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