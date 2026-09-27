# ThreeHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyNine } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: ThreeHundredAndFiftyNine = {
  budget: {
    createdAt: 3037.87,
    fixedBudget: 4645.69,
    id: "<id>",
    isActive: true,
    notifiedAt: [
      184.74,
      5448.61,
    ],
    previousSpend: [
      3709.25,
      631.73,
    ],
    teamId: "<id>",
    type: "fixed",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload359Budget](../models/usereventpayload359budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |