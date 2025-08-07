# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFour = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 3089.34,
      previousSpend: [
        8881.12,
      ],
      notifiedAt: [
        6992.68,
        7286.47,
      ],
      createdAt: 3556.79,
      isActive: false,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `budget`                                           | [models.PayloadBudget](../models/payloadbudget.md) | :heavy_check_mark:                                 | N/A                                                |