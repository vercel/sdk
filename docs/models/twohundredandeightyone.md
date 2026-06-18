# TwoHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyOne } from "@vercel/sdk/models/reasoncode.js";

let value: TwoHundredAndEightyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 4667.2,
    previousSpend: [
      7431.24,
      3333.89,
    ],
    notifiedAt: [
      9497.84,
      9252.92,
    ],
    createdAt: 5583.41,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload281Budget](../models/usereventpayload281budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |