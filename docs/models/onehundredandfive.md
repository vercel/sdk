# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFive = {
  budget: {
    type: "fixed",
    fixedBudget: 1236.74,
    previousSpend: [
      8664.74,
      4850.97,
      8759.72,
    ],
    notifiedAt: [
      7004.13,
      2121.1,
      9128.57,
    ],
    createdAt: 5735.15,
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