# ThreeHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyTwo } from "@vercel/sdk/models/removedprojects.js";

let value: ThreeHundredAndTwentyTwo = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 7117.51,
      previousSpend: [
        4181.09,
      ],
      notifiedAt: [
        6023.11,
        7068.08,
        4773.58,
      ],
      createdAt: 4411.84,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload322Budget](../models/usereventpayload322budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |