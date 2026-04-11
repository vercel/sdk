# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/twohundredandtwentynine.js";

let value: TwoHundredAndThirty = {
  budget: {
    type: "fixed",
    fixedBudget: 5842.61,
    previousSpend: [
      4549.47,
      1091.58,
    ],
    notifiedAt: [
      659.48,
      7787.4,
    ],
    createdAt: 8621.89,
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