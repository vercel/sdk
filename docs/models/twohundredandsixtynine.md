# TwoHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyNine } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndSixtyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 6406.53,
    previousSpend: [
      4008.74,
      4318.76,
      1316.6,
    ],
    notifiedAt: [
      6021.25,
    ],
    createdAt: 9914.99,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload269Budget](../models/usereventpayload269budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |