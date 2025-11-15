# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNine = {
  budget: {
    type: "fixed",
    fixedBudget: 6865.5,
    previousSpend: [
      4098.04,
      4311.93,
      5542.39,
    ],
    notifiedAt: [
      1460.68,
    ],
    createdAt: 205.89,
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