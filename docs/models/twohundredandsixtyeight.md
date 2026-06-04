# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/twohundredandthirty.js";

let value: TwoHundredAndSixtyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 8466.39,
    previousSpend: [],
    notifiedAt: [
      1442.35,
      6238.12,
    ],
    createdAt: 7681.98,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload268Budget](../models/usereventpayload268budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |