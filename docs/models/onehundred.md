# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/userevent.js";

let value: OneHundred = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 7642.14,
      previousSpend: [
        7073.71,
      ],
      notifiedAt: [
        7851.11,
      ],
      createdAt: 804.65,
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