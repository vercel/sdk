# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayload221previous.js";

let value: TwoHundredAndTwentyThree = {
  budget: {
    type: "fixed",
    fixedBudget: 2825.51,
    previousSpend: [
      7459.09,
    ],
    notifiedAt: [],
    createdAt: 5207.24,
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