# ThreeHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: ThreeHundredAndFiftyEight = {
  budget: {
    createdAt: 3445.45,
    fixedBudget: 9659.21,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      6417.04,
      4651.87,
      8943.42,
    ],
    previousSpend: [
      9435.82,
      5187.32,
      3045.35,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload358Budget](../models/usereventpayload358budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |