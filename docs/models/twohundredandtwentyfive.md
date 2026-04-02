# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/twohundredandtwentyfour.js";

let value: TwoHundredAndTwentyFive = {
  budget: {
    type: "fixed",
    fixedBudget: 8538.65,
    previousSpend: [],
    notifiedAt: [
      7449.82,
      2447.08,
    ],
    createdAt: 1493.61,
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