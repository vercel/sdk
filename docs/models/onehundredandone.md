# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndOne = {
  budget: {
    type: "fixed",
    fixedBudget: 2985.01,
    previousSpend: [
      4223.38,
      2292.94,
    ],
    notifiedAt: [
      3599.57,
    ],
    createdAt: 8328.14,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.Budget](../models/budget.md)                                    | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |