# UserEventPayload314Budget

## Example Usage

```typescript
import { UserEventPayload314Budget } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: UserEventPayload314Budget = {
  budgetItem: {
    type: "fixed",
    fixedBudget: 7060.5,
    previousSpend: [
      21.35,
    ],
    notifiedAt: [
      8593.19,
      6673.18,
    ],
    createdAt: 9040.82,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budgetItem`                                                            | [models.BudgetItem](../models/budgetitem.md)                            | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |