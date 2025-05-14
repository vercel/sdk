# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/userevent.js";

let value: NinetyEight = {
  budget: {
    type: "fixed",
    fixedBudget: 9632.55,
    previousSpend: [
      6804.15,
    ],
    notifiedAt: [
      8681.46,
    ],
    createdAt: 2866.67,
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