# ThreeHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyOne } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndFortyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 2418.45,
    previousSpend: [],
    notifiedAt: [
      2860.37,
      8564.14,
      688.57,
    ],
    createdAt: 3486.86,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload341Budget](../models/usereventpayload341budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |