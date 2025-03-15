# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/userevent.js";

let value: NinetySix = {
  budget: {
    type: "fixed",
    fixedBudget: 7491.01,
    previousSpend: [
      5323.36,
    ],
    notifiedAt: [
      1149.52,
    ],
    createdAt: 3936.3,
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