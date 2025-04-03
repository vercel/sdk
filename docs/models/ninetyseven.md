# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/userevent.js";

let value: NinetySeven = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 7689.99,
      previousSpend: [
        831.64,
      ],
      notifiedAt: [
        9747.75,
      ],
      createdAt: 492.85,
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