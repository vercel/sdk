# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndThirtyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 8777.49,
    previousSpend: [
      9716.33,
      5512.09,
    ],
    notifiedAt: [
      1329.85,
      9607.04,
    ],
    createdAt: 4020.81,
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