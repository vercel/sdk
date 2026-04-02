# TwoHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySix } from "@vercel/sdk/models/twohundredandtwentyfive.js";

let value: TwoHundredAndTwentySix = {
  budget: {
    type: "fixed",
    fixedBudget: 7883.97,
    previousSpend: [],
    notifiedAt: [
      4827.6,
      8736.42,
    ],
    createdAt: 9749.42,
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