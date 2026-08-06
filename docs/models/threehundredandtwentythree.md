# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/removedprojects.js";

let value: ThreeHundredAndTwentyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 3905.94,
    previousSpend: [
      8349.21,
    ],
    notifiedAt: [
      3804.62,
    ],
    createdAt: 3145.15,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload323Budget](../models/usereventpayload323budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |