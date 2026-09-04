# ThreeHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySix } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndThirtySix = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 1908.34,
      previousSpend: [
        4519.42,
        7039.92,
      ],
      notifiedAt: [],
      createdAt: 9599.28,
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
| `budget`                                                                   | [models.UserEventPayload336Budget](../models/usereventpayload336budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |