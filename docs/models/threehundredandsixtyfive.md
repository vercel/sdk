# ThreeHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFive } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSixtyFive = {
  budget: {
    createdAt: 2111.32,
    fixedBudget: 7544.95,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      4089.82,
      3842.33,
      5326.27,
    ],
    previousSpend: [
      8509.84,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload365Budget](../models/usereventpayload365budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |