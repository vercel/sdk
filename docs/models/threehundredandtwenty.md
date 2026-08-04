# ThreeHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwenty } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndTwenty = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5631.45,
      previousSpend: [
        710.11,
        2454.05,
        7131.05,
      ],
      notifiedAt: [],
      createdAt: 8724.86,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload320Budget](../models/usereventpayload320budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |