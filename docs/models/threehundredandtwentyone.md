# ThreeHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyOne } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndTwentyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 8543.29,
    previousSpend: [
      4417.04,
      532.98,
    ],
    notifiedAt: [],
    createdAt: 7876.22,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload321Budget](../models/usereventpayload321budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |