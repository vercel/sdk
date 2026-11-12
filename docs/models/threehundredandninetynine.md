# ThreeHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyNine } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndNinetyNine = {
  budget: {
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
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload399Budget](../models/usereventpayload399budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |