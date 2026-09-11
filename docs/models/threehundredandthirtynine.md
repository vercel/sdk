# ThreeHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyNine } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndThirtyNine = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 5979.92,
      previousSpend: [],
      notifiedAt: [],
      createdAt: 8732.33,
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
| `budget`                                                                   | [models.UserEventPayload339Budget](../models/usereventpayload339budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |