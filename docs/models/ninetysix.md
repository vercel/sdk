# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/userevent.js";

let value: NinetySix = {
  budget: {
    type: "fixed",
    fixedBudget: 3075.73,
    previousSpend: [
      6317.69,
    ],
    notifiedAt: [
      8899.97,
    ],
    createdAt: 4232.05,
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