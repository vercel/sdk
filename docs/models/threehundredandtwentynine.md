# ThreeHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyNine } from "@vercel/sdk/models/usereventfactors1.js";

let value: ThreeHundredAndTwentyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 1041.22,
    previousSpend: [
      5804.51,
    ],
    notifiedAt: [],
    createdAt: 6288.42,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload329Budget](../models/usereventpayload329budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |