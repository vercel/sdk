# ThreeHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFive } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndThirtyFive = {
  budget: {
    type: "fixed",
    fixedBudget: 1697.55,
    previousSpend: [
      1245.75,
      8374.95,
      5164.07,
    ],
    notifiedAt: [
      7863.08,
      6682.56,
    ],
    createdAt: 9716.78,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload335Budget](../models/usereventpayload335budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |