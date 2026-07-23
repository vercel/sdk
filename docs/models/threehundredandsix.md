# ThreeHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSix } from "@vercel/sdk/models/twohundredandeighty.js";

let value: ThreeHundredAndSix = {
  budget: {
    type: "fixed",
    fixedBudget: 4437.82,
    previousSpend: [
      8093.24,
      6212.82,
      2733.71,
    ],
    notifiedAt: [],
    createdAt: 80.67,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload306Budget](../models/usereventpayload306budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |