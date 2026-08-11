# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndTwentySix = {
  budget: {
    type: "fixed",
    fixedBudget: 1856.3,
    previousSpend: [
      7067.73,
    ],
    notifiedAt: [
      2388.2,
    ],
    createdAt: 1394.68,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload326Budget](../models/usereventpayload326budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |