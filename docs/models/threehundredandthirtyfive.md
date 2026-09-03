# ThreeHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFive } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: ThreeHundredAndThirtyFive = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 8980.57,
      previousSpend: [
        1448.67,
        885.26,
        7607.12,
      ],
      notifiedAt: [
        449.74,
        9042.33,
        4595.16,
      ],
      createdAt: 4704.67,
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
| `budget`                                                                   | [models.UserEventPayload335Budget](../models/usereventpayload335budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |