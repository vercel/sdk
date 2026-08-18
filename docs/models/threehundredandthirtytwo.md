# ThreeHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyTwo } from "@vercel/sdk/models/usereventpayload326geolocationmostspecificsubdivisionnames.js";

let value: ThreeHundredAndThirtyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 1446.46,
    previousSpend: [
      8079.16,
    ],
    notifiedAt: [
      505.3,
    ],
    createdAt: 8696.4,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload332Budget](../models/usereventpayload332budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |