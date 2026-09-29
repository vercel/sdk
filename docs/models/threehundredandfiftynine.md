# ThreeHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyNine } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: ThreeHundredAndFiftyNine = {
  budget: {
    budgetItem: {
      createdAt: 9849.43,
      fixedBudget: 5317.12,
      id: "<id>",
      isActive: false,
      notifiedAt: [
        1593.8,
        970.32,
      ],
      previousSpend: [
        568.92,
        8182.5,
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
| `budget`                                                                   | [models.UserEventPayload359Budget](../models/usereventpayload359budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |