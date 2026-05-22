# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndFiftyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 4517.92,
    previousSpend: [
      943.37,
    ],
    notifiedAt: [
      9713.31,
      439.54,
      7773.05,
    ],
    createdAt: 6433.26,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |