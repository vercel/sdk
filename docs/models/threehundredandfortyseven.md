# ThreeHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySeven } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFortySeven = {
  budget: {
    createdAt: 8836.74,
    fixedBudget: 8742.23,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      229.43,
      9965.73,
    ],
    previousSpend: [
      1984.22,
      2147.05,
      5466.56,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload347Budget](../models/usereventpayload347budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |