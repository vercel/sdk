# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/userevent.js";

let value: NinetySeven = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4466.53,
      previousSpend: [
        1518.84,
      ],
      notifiedAt: [
        8866.64,
      ],
      createdAt: 2316.51,
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