# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: ThreeHundredAndTen = {
  budget: {
    type: "fixed",
    fixedBudget: 2359.11,
    previousSpend: [
      3872.69,
      7929.13,
    ],
    notifiedAt: [
      2637.93,
      3085.89,
      7986.24,
    ],
    createdAt: 7420.99,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload310Budget](../models/usereventpayload310budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |