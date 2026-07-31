# ThreeHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifteen } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndFifteen = {
  budget: {
    type: "fixed",
    fixedBudget: 2701.87,
    previousSpend: [
      3315.9,
      3393.77,
    ],
    notifiedAt: [],
    createdAt: 3249.53,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload315Budget](../models/usereventpayload315budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |