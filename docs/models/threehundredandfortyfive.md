# ThreeHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFive } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndFortyFive = {
  budget: {
    createdAt: 9719,
    fixedBudget: 6735.86,
    id: "<id>",
    isActive: false,
    notifiedAt: [
      5085.38,
      8585.66,
      3864.69,
    ],
    previousSpend: [
      2409.45,
      6444.38,
      4810.74,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload345Budget](../models/usereventpayload345budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |