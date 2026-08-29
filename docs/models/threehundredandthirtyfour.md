# ThreeHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFour } from "@vercel/sdk/models/usereventpayload333budget.js";

let value: ThreeHundredAndThirtyFour = {
  budget: {
    type: "fixed",
    fixedBudget: 1045.89,
    previousSpend: [
      750.87,
    ],
    notifiedAt: [
      3068.44,
      2256.86,
    ],
    createdAt: 867.48,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload334Budget](../models/usereventpayload334budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |