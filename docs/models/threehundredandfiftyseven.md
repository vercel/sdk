# ThreeHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySeven } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: ThreeHundredAndFiftySeven = {
  budget: {
    createdAt: 5324.3,
    fixedBudget: 8963.65,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      5306.72,
      9641.19,
      3343.43,
    ],
    previousSpend: [
      7809.76,
      94.64,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload357Budget](../models/usereventpayload357budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |