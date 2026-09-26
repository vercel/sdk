# ThreeHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyNine } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

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
| `prevBudget`                                                               | [models.PrevBudget](../models/prevbudget.md)                               | :heavy_minus_sign:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `prevWebhookUrl`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Stored for project budgets. Same value as `budget.scopeId`.                |
| `projectName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Injected at read time from `payload.projectId`.                            |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |