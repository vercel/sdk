# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload328names.js";

let value: ThreeHundredAndThirtyThree = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 1751.36,
      previousSpend: [
        235.77,
      ],
      notifiedAt: [
        239.72,
      ],
      createdAt: 3438.14,
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
| `budget`                                                                   | [models.UserEventPayload333Budget](../models/usereventpayload333budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |