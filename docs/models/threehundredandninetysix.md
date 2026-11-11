# ThreeHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySix } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndNinetySix = {
  budget: {
    budgetItem: {
      createdAt: 6390.81,
      fixedBudget: 8166.56,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        1949.13,
      ],
      previousSpend: [
        7873.12,
        7712.82,
      ],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload396Budget](../models/usereventpayload396budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |