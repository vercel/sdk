# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/userevent.js";

let value: NinetyNine = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4084.8,
      previousSpend: [
        5082.46,
      ],
      notifiedAt: [
        4620.84,
      ],
      createdAt: 2521.87,
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