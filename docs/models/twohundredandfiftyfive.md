# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndFiftyFive = {
  budget: {
    type: "fixed",
    fixedBudget: 5394.09,
    previousSpend: [],
    notifiedAt: [
      7270.85,
    ],
    createdAt: 2966.43,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |