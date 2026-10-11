# ThreeHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySix } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndSeventySix = {
  budget: {
    createdAt: 1251.84,
    fixedBudget: 5237.25,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      4318.59,
      1351.72,
      7894.61,
    ],
    previousSpend: [
      6756.67,
      4071.48,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload376Budget](../models/usereventpayload376budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |