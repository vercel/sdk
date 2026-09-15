# ThreeHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyOne } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndFortyOne = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 8533.42,
      previousSpend: [
        9625.9,
      ],
      notifiedAt: [
        3008.5,
      ],
      createdAt: 875.15,
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
| `budget`                                                                   | [models.UserEventPayload341Budget](../models/usereventpayload341budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |