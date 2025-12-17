# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFourteen = {
  budget: {
    type: "fixed",
    fixedBudget: 4688.1,
    previousSpend: [],
    notifiedAt: [
      432.34,
      6355.3,
      4153.31,
    ],
    createdAt: 5177.97,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |