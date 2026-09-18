# ThreeHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyNine } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndFortyNine = {
  budget: {
    budgetItem: {
      createdAt: 204.55,
      fixedBudget: 2023.55,
      id: "<id>",
      isActive: true,
      notifiedAt: [
        6582.94,
        1639.27,
      ],
      previousSpend: [],
      teamId: "<id>",
      type: "fixed",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload349Budget](../models/usereventpayload349budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |