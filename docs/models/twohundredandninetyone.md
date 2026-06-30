# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/twohundredandfiftyeight.js";

let value: TwoHundredAndNinetyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 8974.99,
    previousSpend: [
      1193.57,
    ],
    notifiedAt: [
      4740.08,
    ],
    createdAt: 7590.21,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload291Budget](../models/usereventpayload291budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |