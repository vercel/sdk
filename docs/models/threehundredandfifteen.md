# ThreeHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifteen } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndFifteen = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5653.56,
      previousSpend: [
        113.26,
        7139.24,
      ],
      notifiedAt: [
        2483.29,
        4262.12,
        3812.34,
      ],
      createdAt: 3465.41,
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
| `budget`                                                                   | [models.UserEventPayload315Budget](../models/usereventpayload315budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |