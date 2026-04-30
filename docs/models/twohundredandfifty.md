# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndFifty = {
  budget: {
    type: "fixed",
    fixedBudget: 7075.34,
    previousSpend: [
      5853.52,
      5688.08,
      9030.54,
    ],
    notifiedAt: [
      4969.45,
    ],
    createdAt: 9731.1,
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