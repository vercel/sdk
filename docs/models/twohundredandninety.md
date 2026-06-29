# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: TwoHundredAndNinety = {
  budget: {
    type: "fixed",
    fixedBudget: 2000.02,
    previousSpend: [
      5184.1,
    ],
    notifiedAt: [
      976.02,
    ],
    createdAt: 3120.32,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload290Budget](../models/usereventpayload290budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |