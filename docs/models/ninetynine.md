# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/userevent.js";

let value: NinetyNine = {
  budget: {
    type: "fixed",
    fixedBudget: 4084.8,
    previousSpend: [
      4620.84,
      2521.87,
    ],
    notifiedAt: [
      332.38,
    ],
    createdAt: 7600.65,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.Budget](../models/budget.md)                                    | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |