# ThreeHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyTwo } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndNinetyTwo = {
  budget: {
    createdAt: 4340.18,
    fixedBudget: 4889.38,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      7680.38,
      9926.81,
      7490.77,
    ],
    previousSpend: [
      3155.93,
      623.78,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload392Budget](../models/usereventpayload392budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `scopeName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored when activity clients can't resolve the name, as for products.      |