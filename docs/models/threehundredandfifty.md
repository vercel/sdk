# ThreeHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifty } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndFifty = {
  budget: {
    createdAt: 4293.35,
    fixedBudget: 2642.09,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      2960.96,
    ],
    previousSpend: [],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload350Budget](../models/usereventpayload350budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |