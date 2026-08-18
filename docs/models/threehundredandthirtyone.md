# ThreeHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyOne } from "@vercel/sdk/models/usereventpayload326geolocationmostspecificsubdivisionnames.js";

let value: ThreeHundredAndThirtyOne = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 2482.34,
      previousSpend: [],
      notifiedAt: [
        5806.68,
        3942.6,
        3947.18,
      ],
      createdAt: 8901.76,
      isActive: true,
      teamId: "<id>",
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload331Budget](../models/usereventpayload331budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |