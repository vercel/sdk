# ThreeHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyTwo } from "@vercel/sdk/models/usereventpayload327geolocationnames.js";

let value: ThreeHundredAndThirtyTwo = {
  budget: {
    budgetItem: {
      type: "fixed",
      fixedBudget: 4553.8,
      previousSpend: [
        9968.67,
      ],
      notifiedAt: [],
      createdAt: 3905.45,
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
| `budget`                                                                   | [models.UserEventPayload332Budget](../models/usereventpayload332budget.md) | :heavy_check_mark:                                                         | N/A                                                                        |