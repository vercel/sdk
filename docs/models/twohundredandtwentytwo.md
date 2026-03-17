# TwoHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyTwo } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: TwoHundredAndTwentyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 4076.34,
    previousSpend: [
      9343.6,
      8243.64,
    ],
    notifiedAt: [
      5843.09,
      9347.34,
      7648.21,
    ],
    createdAt: 591.94,
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