# ThreeHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyTwo } from "@vercel/sdk/models/usereventpayload381budget.js";

let value: ThreeHundredAndEightyTwo = {
  budget: {
    createdAt: 1264.98,
    fixedBudget: 2438.9,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      3022.38,
      1027.44,
      6585.9,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload382Budget](../models/usereventpayload382budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |