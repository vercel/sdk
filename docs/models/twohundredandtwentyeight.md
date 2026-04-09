# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndTwentyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 7148.61,
    previousSpend: [
      8119.34,
      8506.43,
    ],
    notifiedAt: [],
    createdAt: 7760.4,
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