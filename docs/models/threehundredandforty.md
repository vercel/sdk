# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/twohundredandseventyseven.js";

let value: ThreeHundredAndForty = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4860.38,
      previousSpend: [],
      notifiedAt: [
        2606.92,
        4992.81,
      ],
      createdAt: 2429.34,
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
| `budget`                                                                   | [models.UserEventPayload340Budget](../models/usereventpayload340budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |